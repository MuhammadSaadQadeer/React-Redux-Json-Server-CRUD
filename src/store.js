import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './views/reducers/index';
import thunk from 'redux-thunk';
//Adding persistor to retain the redux state on page refresh
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
//Applying middle ware using redux thunk
const middleware = applyMiddleware(thunk)
//Creating store using middle ware and also adding redux-dev tool configurations
export const store = createStore(persistedReducer, compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f))

export const persistor = persistStore(store)