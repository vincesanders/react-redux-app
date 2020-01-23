import {
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,
    FETCHING_DATA_START
  } from "../actions";

const initialState = {
    isLoading: false,
    data: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log('this is action in the reducer: ', action);
    switch (action.type) {
        case FETCHING_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}