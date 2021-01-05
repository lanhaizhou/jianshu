import { fromJS } from 'immutable'
import * as constants from './constants'
import recommendImgUrl1 from '../../../statics/home/recomend-1.png'
import recommendImgUrl2 from '../../../statics/home/recomend-2.png'
import recommendImgUrl3 from '../../../statics/home/recomend-3.png'
import recommendImgUrl4 from '../../../statics/home/recomend-4.png'

const defaultState = fromJS({
  articleList: [],
  writerList: [],
  recommendList: [
    {
      id: 1,
      imgUrl: recommendImgUrl1,
    },
    {
      id: 2,
      imgUrl: recommendImgUrl2,
    },
    {
      id: 3,
      imgUrl: recommendImgUrl3,
    },
    {
      id: 4,
      imgUrl: recommendImgUrl4,
    },
  ],
})

const changeHomeData = (state, action) => {
  return state.set('articleList', action.articleList)
}
const changeWriterData = (state, action) => {
  return state.set('writerList', action.writerList)
}

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.CHANGE_WRITER_DATA:
      return changeWriterData(state, action)
    default:
      return state
  }
}

export default Reducer