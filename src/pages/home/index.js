import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import List from './components/List'
import Recommend from './components/Recommend'
import DownloadApp from './components/DownloadAPP'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style'

class Home extends PureComponent {
  state = {}

  componentDidMount() {
    this.props.changeHomeData()
    this.props.changeWriterData()
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/5010/8e6ff43ffeeadc5deb237a4c1da797b486904373.png' alt='' />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <DownloadApp />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeWriterData(){
    dispatch(actionCreators.getWriterList())
  },
})

export default connect(null, mapDispatch)(Home)