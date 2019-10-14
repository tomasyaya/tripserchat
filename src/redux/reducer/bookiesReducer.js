import {GET_DATA, SHOW_DATA} from '../actions/actionTypes';

const initialState = {
  data: [],
  match: {},
  showData: {},
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
      }
    default:
      return {
        ...state
      }
  }
}