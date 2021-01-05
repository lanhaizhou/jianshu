import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = (loader) => {
  return Loadable({
    loader,
    loading() {
      return <div>正在加载...</div>
    },
  })
}

export default LoadableComponent