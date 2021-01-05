import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import {
  DetailBox,
  DetailWrapper,
  DetailLeft,
  DetailLeftContent,
  Title,
  Author,
  Article,
  DetailRight,
  AuthorArticle,
  Recommend,
} from './style'

class Detail extends PureComponent {
  state = {}

  componentDidMount() {
    const { id } = this.props.location.state || {}
    console.log('id', id)
    this.props.getDetails(id)
  }

  render() {
    const { title, content } = this.props
    return (
      <DetailBox>
        <DetailWrapper>
          <DetailLeft>
            <DetailLeftContent>
              <Title>{title}</Title>
              <Author></Author>
              <Article dangerouslySetInnerHTML={{ __html: content }} />
            </DetailLeftContent>

          </DetailLeft>
          <DetailRight>
            <AuthorArticle></AuthorArticle>
            <Recommend></Recommend>
          </DetailRight>
        </DetailWrapper>
      </DetailBox>
    )
  }
}

const mapState = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
  }
}

const mapDispatch = dispatch => {
  return {
    getDetails(id) {
      dispatch(actionCreators.getDetails(id))
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail))