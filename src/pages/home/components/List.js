import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo } from '../style'

class List extends PureComponent {
  state = {}
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map(item =>
            <ListItem key={item.get('id')}>
              <ListInfo>
                <Link to={{ pathname: `/detail`, state: { id: item.get('id') } }}>
                  <h3>{item.get('title')}</h3>
                </Link>
                <p>{item.get('desc')}</p>
                <div className='meta'>
                  <span className='diamonds'>
                    <span className="iconfont diamonds-icon">&#xe65d;</span>
                    {item.get('diamonds')}
                  </span>
                  <span className='author'>{item.get('author')}</span>
                  <span className='comment'>
                    <span className="iconfont comment-icon">&#xe629;</span>
                    {item.get('commentNum')}
                  </span>
                  <span className='like'>
                    <span className="iconfont like-icon">&#xe630;</span>
                    {item.get('like')}
                  </span>
                  <span className='like' style={{ display: item.get('reward') ? '' : 'none' }}>
                    <span className="iconfont like-icon">&#xe611;</span>
                    {item.get('reward')}
                  </span>
                </div>
              </ListInfo>
              <img className='pic' src='' alt='' />

            </ListItem>
          )
        }
      </div>

    )
  }
}

const mapState = state => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}


export default connect(mapState, null)(List)