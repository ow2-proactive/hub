import fetch from 'isomorphic-fetch';

const packageJsonPath = "https://raw.githubusercontent.com/ow2-proactive/hub/master/src/packageList/index.json";

function checkStatus(response) {
    // console.log("checkStatus", response);
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    // console.log("parseJson", response);
    return response.json();
}



export const SELECT_TAG = 'SELECT_TAG';
export function selectTag(selection) {
    return {
        type: SELECT_TAG,
        selection: selection
    }
}

export const REQUEST_PACKAGES = 'REQUEST_PACKAGES';
export function requestPackages() {
    return {
        type: REQUEST_PACKAGES
    }
}

export const RECEIVE_PACKAGES = 'RECEIVE_PACKAGES';
export function receivePackages(json) {
    return {
        type: RECEIVE_PACKAGES,
        items: json.packages,
        receivedAt: Date.now(),
    }
}

export function fetchPackages() {
    return function (dispatch) {
        dispatch(requestPackages());
        return fetch(packageJsonPath)
            .then(
                response => checkStatus(response),
                error => console.log('An error occured.', error)
            )
            .then((response) => parseJSON(response))
            .then(json => {
                    dispatch(receivePackages({
                        "metadata": {
                            "generated_ts": 1503627551,
                            "hash": "123456abcdef"
                        },
                        "packages": {
                            "ftpconnector": {
                                "slug": "ftpconnector",
                                "name": "FTP Connector",
                                "short_description": "Connect to an FTP, upload and download files",
                                "author": "ActiveEon's Team",
                                "tags": ["Basics"],
                                "repo_url": "https://github.com/StackStorm-Exchange/web",
                                "version": "0.0.1",
                                "content": {
                                    "workflows": {
                                        "count": 1
                                    }
                                }
                            },
                            "emailnotifications": {
                                "slug": "emailnotifications",
                                "name": "Email Notifications",
                                "short_description": "Notify people for every meaningful action",
                                "author": "ActiveEon's Team",
                                "tags": ["Basics",  "Messaging", "Notification"],
                                "repo_url": "https://github.com/StackStorm-Exchange/web",
                                "version": "0.0.1",
                                "content": {
                                    "workflows": {
                                        "count": 1
                                    }
                                }
                            },
                            "slack": {
                                "slug": "slack",
                                "name": "Slack",
                                "short_description": "Integrate your workflows with Slack",
                                "author": "ActiveEon's Team",
                                "tags": ["Slack", "Chat", "Messaging", "Notification"],
                                "repo_url": "https://github.com/StackStorm-Exchange/web",
                                "version": "0.0.1",
                                "content": {
                                    "workflows": {
                                        "count": 4
                                    }
                                }
                            }
                        }
                    }));
                }
            )
    }
}


export const SELECT_DOWNLOAD_OPTIONS = 'SELECT_DOWNLOAD_OPTIONS';
export function selectDownloadOptions(selection) {
    return {
        type: SELECT_DOWNLOAD_OPTIONS,
        selection: selection
    }
}

export const CLOSE_DOWNLOAD_OPTIONS = 'CLOSE_DOWNLOAD_OPTIONS';
export function closeDownloadOptions() {
    return {
        type: CLOSE_DOWNLOAD_OPTIONS,
    }
}