import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

const changeHomeData = data => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: fromJS(data),
})

const changeWriterData = writerList => ({
  type: constants.CHANGE_WRITER_DATA,
  writerList: fromJS(writerList),
})

export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home.json').then(response => {
      const result = response.data.data
      const { articleList } = result
      dispatch(changeHomeData(articleList))
    })
  }
}

export const getWriterList = () => {
  return dispatch => {
    axios.get('/api/writer.json').then(response => {
      const result = response.data.data
      result.forEach(item => {
        const { total_likes_count, total_wordage } = item
        item.like = formatNumber(total_likes_count)
        item.wordage = formatNumber(total_wordage)
      })
      dispatch(changeWriterData(result))
    })

    function formatNumber(num) {
      return num > 1000 ? (num / 1e3).toFixed(1) + 'k' : num
    }
  }
}