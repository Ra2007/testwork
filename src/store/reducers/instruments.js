import {
  INSTRUMENTS_LOADING,
  INSTRUMENTS_SET,
  INSTRUMENTS_ERROR
} from "../types";

export const initialState = {
  list: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INSTRUMENTS_LOADING:
      return {
        ...state,
        loading: true
      };

    case INSTRUMENTS_SET:
      return {
        ...state,
        list: payload,
        loading: false,
        error: null
      };

    case INSTRUMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
