import packageJson from './../../../packageList/index.json';


export const SEARCH_INPUT = 'SEARCH_INPUT';
export function searchInput(selection) {
    return {
        type: SEARCH_INPUT,
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
        return Promise.resolve(dispatch(receivePackages(packageJson)));
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
