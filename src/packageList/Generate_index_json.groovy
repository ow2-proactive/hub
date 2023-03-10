import java.time.LocalDateTime
import groovy.json.JsonSlurper
import groovy.io.FileType
import groovy.json.JsonOutput
import groovy.xml.XmlParser


def getExtension(fileName){
    return fileName.lastIndexOf('.').with {it != -1 ? fileName.substring(it+1):''}
}

// Download proactive-example zip
//"wget https://github.com/ow2-proactive/proactive-examples/archive/master.zip".execute().waitForProcessOutput(System.out, System.err)

// Unzip it
//"unzip master.zip".execute().waitForProcessOutput(System.out, System.err)

// Iterate over metadata json files
def githubURL = "https://github.com/ow2-proactive/proactive-examples/tree/master/"
//def proactiveExamplesFolder = new File("./proactive-examples-master");
def proactiveExamplesFolder = new File("C:/Users/Michael/IdeaProjects/proactive-examples");
def jsonSlurper = new JsonSlurper()
def xmlParser = new XmlParser()
def indexJsonMap = [:]

// Add index metadata
indexJsonMap["metadata"] = [:]
indexJsonMap["metadata"]["date"] = "" + LocalDateTime.now()

// Add packages infos
indexJsonMap["packages"] = [:]

proactiveExamplesFolder.eachFile(FileType.DIRECTORIES, { packageDir ->

    def packageDirPath = packageDir.getAbsolutePath()
    def metadataJsonFile = new File(packageDirPath, "METADATA.json")

    // For each package directory (i.e. including METADATA.json)
    if (metadataJsonFile.exists()) {

        // add the full package metadata json
        def packageMetadataJson = jsonSlurper.parseText(metadataJsonFile.text)

        
        // For each package directory including objects
        if(packageMetadataJson["catalog"] != null) {

            indexJsonMap["packages"][packageDir.name] = packageMetadataJson

            // Add some package metadata extra infos
            indexJsonMap["packages"][packageDir.name]["metadata"]["repo_url"] = githubURL + packageDir.name
            indexJsonMap["packages"][packageDir.name]["metadata"]["version"] = "1.0"

            def packageTagsSet = new HashSet<>()

            for (int i = 0; i < packageMetadataJson["catalog"]["objects"].size(); i++) {

                def catalogObject = indexJsonMap["packages"][packageDir.name]["catalog"]["objects"][i]
                def workflowFile = new File(packageDirPath, catalogObject.file)

                // For each xml workflow get tags
                if (getExtension(workflowFile.name) == "xml") {
                    def tags = xmlParser.parse(workflowFile).'@tags'

                    if (tags != null) {

                        // Append the wkw xml tags to the object tags of the metadata json
                        def objectTagsSet = new HashSet<>()
                        if (indexJsonMap["packages"][packageDir.name]["catalog"]["objects"][i]["metadata"].containsKey("tags")) {
                            objectTagsSet += indexJsonMap["packages"][packageDir.name]["catalog"]["objects"][i]["metadata"]["tags"].split(",").toList()
                        }
                        objectTagsSet += tags.split(",").toList()
                        indexJsonMap["packages"][packageDir.name]["catalog"]["objects"][i]["metadata"]["tags"] = objectTagsSet.toArray(new String[objectTagsSet.size()])
                        packageTagsSet += objectTagsSet
                    }
                }

            }
            indexJsonMap["packages"][packageDir.name]["metadata"]["tags"] = packageTagsSet.toArray(new String[packageTagsSet.size()])
        }

    }
})

// Generate JSON file
new File("./index.json").text = JsonOutput.prettyPrint(JsonOutput.toJson(indexJsonMap))