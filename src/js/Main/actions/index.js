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
                    dispatch(receivePackages(json));
                }
            )
    }
}