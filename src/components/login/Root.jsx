import React from 'react'
import '../../css/login.css'
import { PersonOutline, LockOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Url from '../../API'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      username: '',
      password: ''
    }
  }
  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  login = () => {
    let { username, password } = this.state;
    let url = Url.api + 'login';
    let body = {
      username: username,
      password: password
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(res => {
      if (res.login !== false) {
        window.localStorage.setItem('user', JSON.stringify(res));
        window.location = '/#/menu';
      } else {
        this.loginError()
      }
    });
  }
  loginError() {
    this.setState({
      error: true
    })
  }
  render() {
    return (
      <div className="login-root">
        <div className="login-box">
          <div className="login-title">SiMolek</div>
          <div className="login-input">
            <div className="login-input-icon">
              <PersonOutline />
            </div>
            <input
              className="login-input-value" 
              type="text" 
              placeholder="Username"
              spellCheck="false"
              onKeyUp={this.handleUsername}
            />
          </div>
          <div className="login-input">
            <div className="login-input-icon">
              <LockOutlined />
            </div>
            <input
              className="login-input-value" 
              type="password" 
              placeholder="Password"
              spellCheck="false"
              onKeyUp={this.handlePassword}
            />
          </div>
          { this.state.error === true ? (
            <div className="login-error">Username atau Password Salah!</div>
          ) : ''}
          <div className="login-action">
            <button
              onClick={this.login}
            >MASUK</button>
          </div>
          <div className="login-etc">
            <Link to="/">Lupa Password ?</Link>
            <a href="/">Daftar</a>
          </div>
        </div>
      </div>
    )
  }
}