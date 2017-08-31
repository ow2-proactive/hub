import {
    REQUEST_PACKAGES,
    RECEIVE_PACKAGES
} from '../actions'

function packages(state = {
    isFetching: false,
    items: []
    }, action) {
    switch (action.type) {
        case REQUEST_PACKAGES:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_PACKAGES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items,
                lastUpdated: action.receivedAt,
            });
        default:
            return state
    }
}

export default packages;