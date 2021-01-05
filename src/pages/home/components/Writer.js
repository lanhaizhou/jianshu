import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterTitle,
  WriterItem,
  LookAll,
} from '../style'

class Writer extends PureComponent {
  state = {}
  render() {
    const { writerList } = this.props
    return (
      <WriterWrapper>
        <WriterTitle>
          <div className='recommend-writer'>推荐作者</div>
          <div className='recommend-writer pointer'>
            <span className='iconfont'>&#xe851;</span>
            换一批
          </div>
        </WriterTitle>
        {
          writerList.map(item => (
            <WriterItem key={item.get('id')}>
              <img src={item.get('avatar_source')} alt='' />
              <div className='info'>
                <div className='name'>{item.get('nickname')}</div>
                <div className='intro'>写了{item.get('wordage')}字  {item.get('like')}喜欢</div>
              </div>
              <div className='follow'>+关注</div>
            </WriterItem>
          ))
        }



        <LookAll>查看全部 ></LookAll>
      </WriterWrapper>
    )
  }
}


const mapState = state => {
  return {
    writerList: state.getIn(['home', 'writerList'])
  }
}

export default connect(mapState, null)(Writer)