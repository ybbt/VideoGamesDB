import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'//!

import rootReducer from "./reducers";

// создаем мидлвар saga
export const sagaMiddleware = createSagaMiddleware();//!


export default createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware), //добавляем мидлвар в стору //!
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);