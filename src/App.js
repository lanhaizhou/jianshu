
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes/routes'
import store from './store'
import Header from './common/header/index'
import { Globalstyle, } from './style'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <BrowserRouter>
          <Header />
          {/* <Route path='/' exact render={() => <div>home</div>} /> */}
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/login' exact component={Login} /> */}
          {/* <Route path='/detail' component={Detail} /> */}
          {/* <Route path='/write' component={Write} /> */}
          {
            renderRoutes(routes)
          }
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;



