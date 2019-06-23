import _ from 'lodash';
import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_STREAMS:
            // Clones the current state into a new object, then clones the
            // result of the mapKeys lodash function into the new object.
            return { ...state, ..._.mapKeys(action.payload, 'id')}
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            // Here we use action.payload instead of action.payload.id because
            // the action creator for the DELETE action returns only the id
            // of the deleted stream instead of the whole object
            // (see index.js DELETE action creator)
            return _.omit(state, action.payload);
        default:
            return state;
    }
}