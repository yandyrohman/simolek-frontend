import React from 'react'
import Back from '../other/Back'
import '../../css/profile.css'
import { Email, Call, Room, Person } from '@material-ui/icons'
import Bg from '../other/Bg'

export default class Root extends React.Component {
  render() {
    let data = JSON.parse(window.localStorage.getItem('user'))
    let user = data.login;
    return (
      <div className="profile-root">
        <Bg />
        <div className="profile-list">
          <Back 
            caption="Profile"
            hint="Profile Lengkap Anda"
          />
          <div className="profile-box">
            {/* <img className="profile-image" src="/icon/profil.png" alt="profileimage"/> */}
            <div className="profile-image-box">
              <Person />
            </div>
            <div className="profile-name">{user.real_name}</div>
            <div className="profile-jabatan">{user.position}</div>
            <div className="profile-line"></div>
            <div className="profile-etc">
              <div className="profile-etc-label"><Email />Email</div>
              <div className="profile-etc-value">{user.email}</div>
            </div>
            <div className="profile-etc">
              <div className="profile-etc-label"><Call />Telepon</div>
              <div className="profile-etc-value">{user.telepon}</div>
            </div>
            <div className="profile-etc">
              <div className="profile-etc-label"><Room />Alamat</div>
              <div className="profile-etc-value">
                {user.alamat}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}