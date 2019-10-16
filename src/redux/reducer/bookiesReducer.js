import {GET_DATA, SHOW_DATA, LOADING, LOADING_TEXT} from '../actions/actionTypes';

const initialState = {
  data: [],
  match: {},
  showData: {},
  loading: false,
  textArea: false,
  loadingText: false,
}

export const bookiesReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case GET_DATA:
      return {
        ...state,
        data: payload
      }
    case SHOW_DATA:
      return {
        ...state,
        showData: payload,
        textArea: true,
      }
    case LOADING:
      return {
        ...state,
        loading: payload
      }
      case LOADING_TEXT:
          return {
            ...state,
            loadingText: payload
          }
    default:
      return {
        ...state
      }
  }
}