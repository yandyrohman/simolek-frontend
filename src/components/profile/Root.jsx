import React from 'react'
import Back from '../other/Back'
import '../../css/profile.css'
import { Email, Call, Room } from '@material-ui/icons'

export default class Root extends React.Component {
  render() {
    return (
      <div className="profile-root">
        <div className="profile-list">
          <Back 
            caption="Profile"
            hint="Profile Lengkap Anda"
          />
          <div className="profile-box">
            <img className="profile-image" src="/icon/profil.png" alt="profileimage"/>
            <div className="profile-name">Yandi Rohman</div>
            <div className="profile-jabatan">Kepala Dinas PUPR Garut</div>
            <div className="profile-line"></div>
            <div className="profile-etc">
              <div className="profile-etc-label"><Email />Email</div>
              <div className="profile-etc-value">yandy.rhm@gmail.com</div>
            </div>
            <div className="profile-etc">
              <div className="profile-etc-label"><Call />Telepon</div>
              <div className="profile-etc-value">0812 2169 7518</div>
            </div>
            <div className="profile-etc">
              <div className="profile-etc-label"><Room />Alamat</div>
              <div className="profile-etc-value">
                Jl. Pasir Randu No. 56, Desa Ciranjang,
                Kec. Ciranjang, Kab. Cianjur
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}