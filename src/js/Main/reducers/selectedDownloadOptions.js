import { SELECT_DOWNLOAD_OPTIONS, CLOSE_DOWNLOAD_OPTIONS } from '../actions/index';

const selectedDownloadOptions = (state = null, action) => {
    switch (action.type) {
        case SELECT_DOWNLOAD_OPTIONS:
            return action.selection;
        case CLOSE_DOWNLOAD_OPTIONS:
            return null;
        default:
            return state;
    }
};

export default selectedDownloadOptions;