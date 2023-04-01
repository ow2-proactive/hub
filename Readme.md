ActiveEon Hub Front-end
========================

hub.activeeon.com is a front-end for ActiveEon Hub, a collection of packages.js contributed by ActiveEon users and engineers.

It's a simple React app rendering the package index; there is no server-side to it at all, and the index is available for consumption as a JSON file.


### Update manually the index.json file

The [Activeeon Hub](http://hub.activeeon.com/) relies on a index.json file reflecting the proactive-examples package files hierarchy to displays the package cards. This json file can be manually generated in the current directory following this command:

*> groovy src/packageList/Generate_index_json.groovy </path/to/proactive-examples/directory/>*


### Update the project

1. Download the latest version of the hub *> git clone https://github.com/ow2-proactive/hub*
2. Download relevant Javascript packages with *> npm install*
3. Update the relevant javascript files in *src/js*
4. Update production Javascript with *> npm run build*
5. Push back to the repo

When developing, if multiple edit are done, the command npm run dev will ensure any change will be update to the production javascript.


### Notable files

- *docs/index.html*: Main html containing the structure of the page
- *src/packageList/Index.json*: List all the packages with meta-data (see relevant section for the structure)
- *src/js/Main/containers/PackageFilterBar.js*: Tag list that build the menu
- *src/js/Main*: All the javascript files used for React
- *src/js/Main/actions/index.js*: List all the actions React can take
- *src/js/Main/components*: All the files used to display information
- *src/js/Main/containers*: All the files used to connect the state of the app to the components
- *src/js/Main/reducer*: All the files used to perform changes when actions are received
- *docs/css*: All the css files
- *docs/images*: All the images in use
- *docs/js*: All the javascript files in use and the compiled javascript file