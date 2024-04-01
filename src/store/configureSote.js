
import { combineReducers, createStore } from 'redux';

export default ()=> {

    const store=createStore(
        combineReducers({
            blogs:blogReducer,
            auth:authReducer
        })
    );
    return store;
}

