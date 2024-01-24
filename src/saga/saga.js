import { takeLatest, debounce, retry, put, spawn, call } from 'redux-saga/effects';
import { inputValue, initLoading, saveResponse, initError } from '../slices/listSlice';
import searchSkills from '../api/api';

function filterInputAction({type, payload}) {
    return type === 'list/inputValue' && payload !== '';
}

function* fetchApi(action) {
    try{
        const retryCount = 3;
        const retryDelay = 1 * 1000;
        const data = yield retry(
            retryCount,
            retryDelay,
            searchSkills,
            action.payload
        )

        if(data.length > 0) {
            yield put(saveResponse(data))
        }
        
        if(data.length === 0) {
            yield put(saveResponse([{name: 'Ничего не найдено'}]))
        }

    } catch (e) {
        yield put(initError())
    }

}

// даже если с payload в slice ничего не делаем,
// все равно передаем чтоб не потерять данные
function* activateLoading(action) {
    yield put(initLoading(action.payload));
}

function* watchInputValue() {
    yield debounce(300, filterInputAction, activateLoading);
}

function* watchInitLoading() {
    yield takeLatest(initLoading.type, fetchApi)
}

export default function* saga() {
    yield spawn(watchInputValue);
    yield spawn(watchInitLoading);
}