import React from 'react'
import Back from '../other/Back'
import '../../css/profile.css'
import { EmailTwoTone, CallTwoTone, RoomTwoTone, EditTwoTone } from '@material-ui/icons'
import Bg from '../other/Bg'
import Url from '../../API'
import EditFoto from './EditFoto'
import EditPass from './EditPass'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_edit_foto: false,
      show_edit_pass: false,
      image: '',
      loading: false,
      info: false
    }
  }
  componentDidMount() {
    this.getFoto()
  }
  turnLoading = (value) => {
    this.setState({
      loading: value === 'on' ? true : false
    })
  }
  showEditFoto = () => {
    this.setState({show_edit_foto: true})
  }
  hideEditFoto = () => {
    this.setState({show_edit_foto: false})
  }
  getFoto = () => {
    let data = JSON.parse(window.localStorage.getItem('user'))
    let user = data.login;
    let url = Url.api + 'get_foto/' + user.id;
    this.turnLoading('on')
    fetch(url).then(res => res.text()).then(base64 => {
      this.setState({image: base64})
      this.turnLoading('off')
    })
  }
  showEditPass = () => {
    this.setState({show_edit_pass: true})
  }
  hideEditPass = () => {
    this.setState({show_edit_pass: false})
  }
  showInfo = () => {
    this.setState({info: true})
  }
  render() {
    let data = JSON.parse(window.localStorage.getItem('user'))
    let user = data.login;
    let img = this.state.image;
    return (
      <div className="profile-root">
        <Bg />
        <div className="profile-list">
          <Back 
            caption="Profile"
            hint="Profile Lengkap Anda"
          />
          <div className="profile-box">
            {
              this.state.loading ? (
                <div className="profile-image-loading">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <img className="profile-image" src={img} alt="profileimage"/>
              )
            }
            <div className="profile-name">{user.real_name}</div>
            <div className="profile-jabatan">{user.position}</div>
            <div className="profile-line"></div>
            <div className="profile-etc">
              <div className="profile-etc-label"><EmailTwoTone />Email</div>
              <div className="profile-etc-value">{user.email}</div>
            </div>
            <div className="profile-etc">
              <div className="profile-etc-label"><CallTwoTone />Telepon</div>
              <div className="profile-etc-value">{user.telepon}</div>
            </div>
            <div className="profile-etc">
              <div className="profile-etc-label"><RoomTwoTone />Alamat</div>
              <div className="profile-etc-value">
                {user.alamat}
              </div>
            </div>
            <div className="profile-line"></div>
            {
              this.state.info ? (
                <div className="profile-info">Ubah Password Sukses!</div>
              ) : ''
            }
            <div className="profile-action">
              <div className="profile-action-button" onClick={this.showEditFoto}>
                <EditTwoTone />
                <span>Edit Foto</span>
              </div>
              <div className="profile-action-button" onClick={this.showEditPass}>
                <EditTwoTone />
                <span>Edit Password</span>
              </div>
            </div>
          </div>
        </div>
        <EditFoto 
          show={this.state.show_edit_foto}
          hideEditFoto={this.hideEditFoto}
          getFoto={this.getFoto}
        />
        <EditPass 
          show={this.state.show_edit_pass}
          hideEditPass={this.hideEditPass}
          showInfo={this.showInfo}
        />
      </div>
    )
  }
}