import { SELECT_TAG } from '../actions/index';

const selectedTag = (state = null, action) => {
    switch (action.type) {
        case SELECT_TAG:
            if (action.selection === "All") {
                return null;
            }
            return action.selection;
        default:
            return state;
    }
};

export default selectedTag;