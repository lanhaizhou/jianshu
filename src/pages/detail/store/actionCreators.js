import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'


const getDetailAction = data => ({
  type: constants.GET_DETAIL_DATA,
  title: data.get('title'),
  content: data.get('content'),
})

export const getDetails = id => {
  return dispatch => {
    axios.get(`/api/detail.json?id=${id}`).then(response => {
      const data = response.data.data
      dispatch(getDetailAction(fromJS(data)))
    })
  }
}