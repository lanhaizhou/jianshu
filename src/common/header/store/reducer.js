import * as constants from './constants'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  foucused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
})

const searchFocus = (state, action) => {
  return state.set('foucused', true)
}

const Reducer = (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
  if (action.type === constants.SEARCH_FOCUS) {
    searchFocus(state, action)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('foucused', false)
  }
  if (action.type === constants.CHANGE_LIST) {
    // return state.set('list', action.data).set('totalPage', action.totalPage)
    return state.merge({
      list: action.data,
      totalPage: action.totalPage,
    })
  }
  if (action.type === constants.MOUSE_ENTER) {
    return state.set('mouseIn', true)
  }
  if (action.type === constants.MOUSE_LEAVE) {
    return state.set('mouseIn', false)
  }
  if (action.type === constants.CHANGE_PAGE) {
    return state.set('page', action.page)
  }


  return state
}

export default Reducer