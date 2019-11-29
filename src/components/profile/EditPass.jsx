import React, { Component } from 'react'
import { Close } from '@material-ui/icons'
import Url from '../../API'
import Loading from '../other/Loading'

export default class EditPass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      new_password: '',
      loading: false
    }
  }
  turnLoading = (value) => {
    this.setState({
      loading: value === 'on' ? true : false
    })
  }
  handleChange = (e) => {
    this.setState({new_password: e.target.value})
  }
  updatePassword = () => {
    let url = Url.api + 'update_password';
    let data = JSON.parse(window.localStorage.getItem('user'))
    let user = data.login;
    this.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: user.id,
        new_password: this.state.new_password
      })
    }).then(() => {
      this.props.hideEditPass()
      this.props.showInfo()
      this.turnLoading('off')
      this.setState({new_password: ''})
    })
  }
  render() {
    let display = this.props.show ? 'flex' : 'none';
    return (
      <div className="profile-edit-pass-bg" style={{display: display}}>
        <div className="profile-edit-pass-close" onClick={() => {
            this.props.hideEditPass()
            this.setState({new_password: ''})
          }
        }>
          <Close />
        </div>
        <div className="profile-edit-pass">
          <input 
            type="text"
            placeholder="Password Baru"
            className="profile-edit-pass-input"
            onChange={this.handleChange}
            value={this.state.new_password}
          />
          <div 
            className="profile-edit-pass-button"
            onClick={this.updatePassword}
          >UBAH</div>
        </div>
        <Loading loading={this.state.loading}/>
      </div>
    )
  }
}