import { fromJS } from 'immutable'
import * as constants from './constants'


const defaultState = fromJS({
  title: '',
  content: '',

})

const getDetail = (state, action) => {
  return state.merge({
    title: action.title,
    content: action.content
  })
}


const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DETAIL_DATA:
      return getDetail(state, action)
    default:
      return state
  }
}

export default Reducer