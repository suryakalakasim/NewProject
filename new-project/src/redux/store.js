import { createStore, applyMiddleware } from "redux";
import empolyeeReducers from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
const sagaMiddleware=createSagaMiddleware();
 export const store=createStore(empolyeeReducers,applyMiddleware(sagaMiddleware));
 sagaMiddleware.run(rootSaga);