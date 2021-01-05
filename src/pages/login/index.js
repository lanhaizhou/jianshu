import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style'

class Detail extends PureComponent {
  state = {}



  render() {
    const { loginFun, login } = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={input => { this.account = input }} />
            <Input placeholder='密码' type='password' ref={input => { this.password = input }} />
            <Button onClick={() => loginFun(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }

  }
}

const mapState = state => {
  return {
    login: state.getIn(['login', 'login'])
  }
}


const mapDispatch = dispatch => {
  return {
    loginFun(accountElem, passwordElem) {
      dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)