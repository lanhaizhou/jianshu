import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position:absolute;
  top:56px;
  bottom:0;
  left:0;
  right:0;
  background:#eee;
  z-index:0;
`

export const LoginBox = styled.div`
  margin:100px auto;
  padding-top:20px;
  width:400px;
  height:180px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.1);
`

export const Input = styled.input`
  display:block;
  padding: 0 10px;
  margin:10px auto;
  width:200px;
  height:30px;
  line-height:30px;
  color:#777;
`

export const Button = styled.div`
  margin:20px auto;
  width:220px;
  height:30px;
  line-height:30px;
  color:#fff;
  background:#3194d0;
  border-radius:15px;
  text-align:center;
  cursor:pointer;
`