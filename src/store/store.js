import { configureStore } from "@reduxjs/toolkit";
import { listSliseReducer } from "../slices/listSlice";
import createSagaMiddleware from 'redux-saga';

import saga from "../saga/saga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        list: listSliseReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(saga);

export default store;