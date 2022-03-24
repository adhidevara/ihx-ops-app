import React from 'react'
// import Tambah from './tambah'
// import Inc from './inc'

// import Header1 from './layout/header1'
// import Header2 from './layout/header2'
import Landing_Page from './landing/index'
// import Footer from './layout/footer'
import profileDokter from './profileDokter/index'
import detailDokter from './detailDokter/index'
import indexBank from './bank/index'
import { config } from './config/config'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      size: false
    }
  }

  componentDidMount() {
    this.headerchanger()
    localStorage.setItem('id', 1)
  }

  headerchanger = () => {
    let c = document.getElementById('main-body')
    if (localStorage.getItem(config.username) == null) {
      c.className = 'hold-transition layout-top-nav'
      this.setState({
        size: true
      })
    }
    else {
      c.className = 'hold-transition sidebar-mini layout-fixed'
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing_Page}></Route>
          <Route exact path='/profileDokter' component={profileDokter}></Route>
          <Route exact path='/detailDokter' component={detailDokter}></Route>
          <Route exact path='/indexBank' component={indexBank}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App