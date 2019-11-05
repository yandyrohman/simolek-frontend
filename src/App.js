import React from 'react'
import Menu from '../src/pages/Menu'
import Kegiatan from '../src/pages/Kegiatan'
import Tambah from '../src/pages/Tambah'
import Input from '../src/pages/Input'
import Profile from '../src/pages/Profile'
import Login from '../src/pages/Login'
import { Route } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/kegiatan" component={Kegiatan} />
        <Route exact path="/tambah" component={Tambah} />
        <Route exact path="/input" component={Input} />
        <Route exact path="/profile" component={Profile} />
      </React.Fragment>
    )
  }
}
