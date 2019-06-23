import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './AuthReducer';
import StreamsReducer from './StreamsReducer';

export default combineReducers({
    auth: AuthReducer,
    streams: StreamsReducer,
    form: formReducer
});