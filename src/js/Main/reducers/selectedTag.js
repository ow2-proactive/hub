import { SELECT_TAG } from '../actions/index';

const selectedTag = (state = null, action) => {
    switch (action.type) {
        case SELECT_TAG:
            return action.selection;
        default:
            return state;
    }
};

export default selectedTag;