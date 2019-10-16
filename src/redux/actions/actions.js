
import {GET_DATA, SHOW_DATA, LOADING, LOADING_TEXT} from './actionTypes';
import {fetchData, manageData} from '../../data';

export const getData = () => async dispatch => {
  try {
    dispatch(
      actionCreator(LOADING, true)
    )
    const data = await fetchData()
    dispatch(
      actionCreator(GET_DATA, data)
    )
    dispatch(
      actionCreator(LOADING, false)
    )
  }
  catch(e){
    console.log(e)
  }
}

export const printData = state => async dispatch => {
  try {
    dispatch(
      actionCreator(LOADING_TEXT, true)
    )
    const data = await manageData(state)
    dispatch(
      actionCreator(SHOW_DATA, data)
    )
    dispatch(
      actionCreator(LOADING_TEXT, false)
    )
  }
  catch(e){
    console.log(e)
  }
}

const actionCreator = (type, payload) => ({
  type,
  payload,
})