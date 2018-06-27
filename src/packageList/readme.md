# Update the card list in the hub

The [Activeeon Hub](http://hub.activeeon.com/) fetch at each refresh the content of the index.json found [here](https://github.com/ow2-proactive/hub/tree/master/src/packageList). 
To update the list it is required to edit this file. 
The method below is explaining how to use a pre-built workflow to generate the file automatically.

## Method

1. Go to [github.com/ow2-proactive/hub/tree/master/src/packageList](https://github.com/ow2-proactive/hub/tree/master/src/packageList)
2. Download the file called *Workflow-IndexGenerator.xml*
3. Import the xml file into [ProActive](https://try.activeeon.com/studio)
4. Execute the job
5. Preview the output of the task called: *preview_index*
6. Format json ([tool](https://duckduckgo.com/?q=format+json))
7. Update the *index.json* file
8. Check on [hub.activeeon.com](http://hub.activeeon.com/) that everything is updated
