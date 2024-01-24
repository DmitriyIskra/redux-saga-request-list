import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: false,
    list: [],
    val: '',
}

const listSlise = createSlice({
    name: 'list',
    initialState,
    reducers: {
        inputValue: (state, action) => {
            state.val = action.payload;

            if(state.error) state.error = false;
            if(state.loading) state.loading = false;
        },
        saveResponse: (state, action) => {
            state.list = action.payload;

            if(state.error) state.error = false;
            if(state.loading) state.loading = false;
        },
        initLoading: (state) => {
            state.loading = true;
            state.list = []
        },
        initError: (state) => {
            state.error = true;
            if(state.loading) state.loading = false;
            state.list = [];
        }
    },
})

export const listSliseReducer = listSlise.reducer;
export const { inputValue, saveResponse, initLoading, initError } = listSlise.actions; 