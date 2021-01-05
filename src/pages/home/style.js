import styled from 'styled-components'

export const HomeWrapper = styled.div`
  padding-top:30px;
  padding-bottom:50px;
  margin: 0 auto;
  width: 960px;
  display:flex;
  justify-content: space-between;
  a{
    text-decoration: none !important;
  }
`

export const HomeLeft = styled.div`
  width:625px;
  .banner-img{
    width:100%;
    height:270px;
    border-radius: 6px;
  }
`

export const HomeRight = styled.div`
  width:280px;
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom:1px solid #dcdcdc;
  display: flex;
  align-items: center;
  .pic{
    display:block;
    width:125px;
    height:100px;
  }
`

export const ListInfo = styled.div`
  padding-right:40px;
  width:500px;
  box-sizing:border-box;
  h3{
    margin: -7px 0 4px;
    font-size:18px;
    font-weight: 700;
    color: #333;
    line-height: 1.5;
    cursor:pointer;
  }
  h3:hover{
    text-decoration: underline;
  }
  p{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .meta{
    display:flex;
    .diamonds{
      margin-right: 10px;
      color: #ea6f5a !important;
      font-size:12px;
      display: flex;
      align-items: center;
      .diamonds-icon{
        margin-right:4px;
        font-size:12px !important;
      }
    }
    .author{
      margin-right: 10px;
      font-size:12px;
      color: #b4b4b4;
      cursor:pointer;
    }
    .comment{
      margin-right: 10px;
      color: #b4b4b4;
      font-size:12px;
      cursor:pointer;
      display: flex;
      align-items: center;
      .comment-icon{
        margin-right:4px;
        font-size:12px !important;
      }
    }
    .author:hover,.comment:hover{
      color: #787878;
    } 
    .like{
      margin-right: 10px;
      color: #b4b4b4 !important;
      font-size:12px;
      display: flex;
      align-items: center;
      .like-icon{
        margin-right:4px;
        font-size:12px !important;
      }
    }
  }
`

export const RecommendWrapper = styled.div`
  width:100%;
`

export const RecommendItem = styled.div`
  margin-bottom:6px;
  width:100%;
  height:50px;
  background:url(${props => props.imgUrl});
  background-size:contain;
  cursor:pointer;
`

export const DownWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height:82px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  box-sizing:border-box;
  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .code-img{
    width:60px;
    height:60px;
  }
  .info{
    margin-left:10px;
    .title{
      font-size: 15px;
      color: #333;
    }
    .desc{
      margin-top: 10px;
      font-size: 13px;
      color: #999;
    }
  }
`

export const WriterWrapper = styled.div`
  
`

export const WriterTitle = styled.div`
  margin-bottom:15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .recommend-writer{
    font-size: 14px;
    color: #969696;
  }
  .pointer{
    cursor:pointer;
  }
`

export const WriterItem = styled.div`
  overflow:hidden;
  margin-bottom:12px;
  img{
    float:left;
    margin-right: 10px;
    width:48px;
    height:48px;
    border-radius:50%;
    cursor: pointer;
  }
  .info{
    display:inline-block;
    float:left;
    .name{
      margin-top:5px;
      font-size:14px;
      color: #2f2f2f;
      cursor: pointer;
    }
    .intro{
      margin-top:10px;
      font-size: 12px;
      color: #969696;
    }
  }
  .follow{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
  .follow:hover{
    border-color: #42c02e;
  }
`

export const LookAll = styled.div`
  padding: 7px 7px 7px 12px;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align:center;
  cursor: pointer;
`