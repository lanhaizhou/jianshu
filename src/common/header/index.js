import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { actionCreators as LoginActionCreators } from '../../pages/login/store'
import {
  HeaderBox,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style'

class Header extends PureComponent {
  state = {}

  getListArea = () => {
    const { foucused, list, totalPage, page = 1, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage, } = this.props
    const newList = (list && list.toJS()) || []
    const pageList = []
    if (!foucused && !mouseIn) return false
    if (newList.length > 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        newList[i] && pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    return (
      <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          热门搜索
        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <span ref={icon => { this.spinIcon = icon }} className='iconfont spin'>&#xe851;</span>
          换一批
        </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
    )
  }

  render() {
    const { foucused, handleInputFocus, handleInputBlur, list, login, logoutFun, } = this.props
    return (
      <HeaderBox>
        <HeaderWrapper>
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <SearchWrapper>
              <NavSearch
                className={foucused ? 'foucused' : 'blured'}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
              <span className={foucused ? 'iconfont foucused zoom' : 'iconfont zoom'}>&#xe612;</span>
              {this.getListArea()}
            </SearchWrapper>
            {
              login ? <NavItem className='right' onClick={logoutFun}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
            }

            <NavItem className='right'>
              <span className="iconfont">&#xe636;</span>
            </NavItem>
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className='writting'>
                <span className='iconfont'>&#xe615;</span>
                写文章
              </Button>
            </Link>

            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </HeaderBox>
    )
  }
}




const mapStateToProps = state => {
  return {
    // foucused: state.get('header').get('foucused'), // 第一种写法
    foucused: state.getIn(['header', 'foucused']), // 第二种写法
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() { dispatch(actionCreators.searchBlur()) },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logoutFun() {
      dispatch(LoginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)