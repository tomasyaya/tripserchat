
import {GET_DATA, SHOW_DATA} from './actionTypes';
import {fetchData, manageData} from '../../data';

export const getData = () => async dispatch => {
  try {
    const data = await fetchData()
    console.log(data)
    dispatch({
      type: GET_DATA,
      payload: data,
    })
  }
  catch(e){
    console.log(e)
  }
}

export const printData = state => async dispatch => {
  try {
    const data = await manageData(state)
    dispatch({
      type: SHOW_DATA,
      payload: data
    })
  }
  catch(e){
    console.log(e)
  }
}