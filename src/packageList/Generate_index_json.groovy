import java.time.LocalDateTime
import groovy.json.JsonSlurper
import groovy.io.FileType
import groovy.json.JsonOutput

// For local execution of jenkins compatibility
def XmlParserClass
try {
    XmlParserClass = "groovy.xml.XmlParser" as Class
} catch (Exception ex) {
    XmlParserClass = "groovy.util.XmlParser" as Class
}

def xmlParser = XmlParserClass.newInstance()



def getExtension(fileName){
    return fileName.lastIndexOf('.').with {it != -1 ? fileName.substring(it+1):''}
}

if (args.length != 1) {
    println "Incorrect number of arguments, expected 1, received " + args.length;
    return;
}
def proactiveExamplesFolder = new File(args[0])


// Iterate over metadata json files
def githubURL = "https://github.com/ow2-proactive/proactive-examples/tree/master/"
def jsonSlurper = new JsonSlurper()
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
                def objectTagsSet = new HashSet<>()

                // Retrieve the wkw xml tags
                if (getExtension(workflowFile.name) == "xml") {
                    def tags = xmlParser.parse(workflowFile).'@tags'

                    if (tags != null) {
                        objectTagsSet += tags.split(",").toList()
                    }
                } else {

                    // Retrieve the object tags (script,..) defined at the metadata json level
                    if (indexJsonMap["packages"][packageDir.name]["catalog"]["objects"][i]["metadata"].containsKey("tags")) {
                        objectTagsSet += indexJsonMap["packages"][packageDir.name]["catalog"]["objects"][i]["metadata"]["tags"].split(",").toList()
                    }
                }

                // Store the tags in the metadata object tags
                indexJsonMap["packages"][packageDir.name]["catalog"]["objects"][i]["metadata"]["tags"] = objectTagsSet.toArray(new String[objectTagsSet.size()])
                packageTagsSet += objectTagsSet

            }
            // Store the tags in the metadata package tags
            indexJsonMap["packages"][packageDir.name]["metadata"]["tags"] = packageTagsSet.toArray(new String[packageTagsSet.size()])
        }

    }
})

// Generate JSON file
new File("./index.json").text = JsonOutput.prettyPrint(JsonOutput.toJson(indexJsonMap))