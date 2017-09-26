import { SEARCH_INPUT } from '../actions/index';

const searchTerm = (state = null, action) => {
    switch (action.type) {
        case SEARCH_INPUT:
            return action.selection;
        default:
            return state;
    }
};

export default searchTerm;
