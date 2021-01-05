import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Write extends PureComponent {
  state = {}

  render() {
    const { login } = this.props
    if (login) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to='/login' />
    }

  }
}

const mapState = state => {
  return {
    login: state.getIn(['login', 'login'])
  }
}




export default connect(mapState, null)(Write)