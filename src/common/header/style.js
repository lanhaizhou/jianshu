import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderBox = styled.div`
  width:100%;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`

export const HeaderWrapper = styled.div`
  position:relative;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height:100%;
`
export const Logo = styled.div`
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  margin:0 auto;
  width:960px;
  height:100%;
  box-sizing:border-box;
`

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  cursor: pointer;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .zoom{
    position:absolute;
    bottom:5px;
    right:5px;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    &.foucused{
      background:#777;
      color:#fff;
    }
  }
`

export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
  margin-top:9px;
  margin-left:20px;
  padding:0 30px 0 20px;
  box-sizing:border-box;
  width:240px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  &::placeholder{
    color:#999;
  }
  &.foucused{
    width:320px;
    transition:all .5s ease-out;
  }
  &.blured{
    width:240px;
    transition:all .5s ease-out;
  }
`

export const SearchInfo = styled.div`
  position:absolute;
  top:56px;
  left:0;
  padding:0 20px;
  width:240px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  background:#fff;
  z-index:2;
`

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;
    transform-origin:center center;
  }
`

export const SearchInfoList = styled.div`
  overflow:hidden;
`

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height:20px;
  margin:0 10px 15px 0;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#333;
  border-radius:3px;
  cursor:pointer;
`

export const Addition = styled.div`
  position:absolute;
  top:0;
  right:0;
  height:56px;
  &::after{
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
  }
`

export const Button = styled.div`
  float:right;
  margin:9px 20px 0 0;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  cursor: pointer;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`
