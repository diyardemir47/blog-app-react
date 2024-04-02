import { createStore, combineReducers, applyMiddleware ,compose} from 'redux'
import blogReducer from '../reducers/blogs';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const compoeseEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            auth: authReducer
        }),

        compoeseEnhancers(applyMiddleware(thunk))
    );
    return store;
}

