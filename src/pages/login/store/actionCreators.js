import axios from 'axios'
import * as constants from './constants'

const changeLogin = login => ({
  type: constants.CHANGE_LOGIN,
  login
})



export const login = (account, password) => {
  return dispatch => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(response => {
      const result = response.data.data
      dispatch(changeLogin(result))
    }).catch(error => {
      console.log('error', error)
    })
  }
}

export const logout = () => ({
  type: constants.LOGOUT,
  login: false,
})