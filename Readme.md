ActiveEon Hub Front-end
========================

hub.activeeon.com is a front-end for ActiveEon Hub, a collection of packages.js contributed by ActiveEon users and engineers.

It's a simple React app rendering the package index; there is no server-side to it at all, and the index is available for consumption as a JSON file.



## Package Json Format

Each package needs to have the following json structure to clearly appear within ProActive Hub.

```json
{
    "name": "a name",
    "short_description": "a short description", 
    "author": "an author",
    "tags": ["Basics", "Finance", "Monte Carlo"],
    "repo_url": "https://github.com/StackStorm-Exchange/web",
    "version": "0.0.1",
    "content": {
    "workflows": {
            "count": 2
        },
        "dockerfile": {
            "count": 1
        },
        "jar": {
            "count": 2
        },
        "other_files": {
            "count": 1
        }
    }
}
```
