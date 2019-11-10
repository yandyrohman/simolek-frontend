import React from 'react'
import '../../css/menu.css'
import { Link } from 'react-router-dom'
import Feedback from '../other/Feedback'
import { 
  Assignment,
  SettingsApplications,
  Input,
  Person,
  EmojiEmotions,
  PowerSettingsNew,
  Assessment,
  SupervisorAccount
} from '@material-ui/icons' 

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_feedback: false
    }
  }
  displayFeedback = () => {
    this.setState({
      show_feedback: !this.state.show_feedback 
    })
  }
  logout = () => {
    window.localStorage.removeItem('user')
  }
  render() {
    let user = JSON.parse(window.localStorage.getItem('user'));
    let { role, name, position } = user.login;
    return (
      <div className="menu-root">
        <div className="menu-title">
          <h3>SiMolek</h3>
          <small>Pantau kegiatan dinas dengan mudah!</small>
        </div>
        <div className="menu-profile">
          <img 
            className="menu-profile-photo" 
            src="/icon/profil.png"
            alt="profile"
          />
          <div className="menu-profile-name">{name}</div>
          <div className="menu-profile-jabatan">{position}</div>
        </div>
        {
          role === 'kpa' ? (
            <MenuKPA 
              displayFeedback={this.displayFeedback}
              logout={this.logout}
            />
          ) : role === 'pptk' ? (
            <MenuPPTK 
              displayFeedback={this.displayFeedback}
              logout={this.logout}
            />
          ) : role === 'ppk' ? (
            <MenuPPK 
              displayFeedback={this.displayFeedback}
              logout={this.logout}
            />
          ) : role === 'admin' ? (
            <MenuAdmin 
              displayFeedback={this.displayFeedback}
              logout={this.logout}
            />
          ) : ''
        }
        <div className="menu-footer">&copy; Dinas PUPR Garut v1.0</div>
        <Feedback 
          show={this.state.show_feedback}
          display={this.displayFeedback}  
        />
      </div>
    )
  }
}

class MenuKPA extends React.Component {
  render() {
    return (
      <div className="menu-list">
        <Link to="/grafik">
          <Assessment />
          <span>Grafik<br/>Kegiatan</span>
        </Link>
        <Link to="/kegiatan">
          <Assignment />
          <span>Semua<br/>Kegiatan</span>
        </Link>
        <Link to="/pejabat">
          <SupervisorAccount />
          <span>Daftar<br/>Pejabat</span>
        </Link>
        <Link to="/profile">
          <Person />
          <span>Profile</span>
        </Link>
        <div className="menu-link" onClick={this.props.displayFeedback}>
          <EmojiEmotions />
          <span>Feedback</span>
        </div>
        <Link to="/" onClick={this.props.logout}>
          <PowerSettingsNew />
          <span>Logout</span>
        </Link>
      </div>
    )
  }
}

class MenuPPTK extends React.Component {
  render() {
    return (
      <div className="menu-list">
        <Link to="/grafik">
          <Assessment />
          <span>Grafik<br/>Kegiatan</span>
        </Link>
        <Link to="/kegiatan">
          <Assignment />
          <span>Semua<br/>Kegiatan</span>
        </Link>
        <Link to="/pejabat">
          <SupervisorAccount />
          <span>Daftar<br/>PPK</span>
        </Link>
        <Link to="/profile">
          <Person />
          <span>Profile</span>
        </Link>
        <div className="menu-link" onClick={this.props.displayFeedback}>
          <EmojiEmotions />
          <span>Feedback</span>
        </div>
        <Link to="/" onClick={this.props.logout}>
          <PowerSettingsNew />
          <span>Logout</span>
        </Link>
      </div>
    )
  }
}

class MenuPPK extends React.Component {
  render() {
    return (
      <div className="menu-list">
        <Link to="/input">
          <Input />
          <span>Input<br/>Kegiatan</span>
        </Link>
        <Link to="/kegiatan">
          <Assignment />
          <span>Semua<br/>Kegiatan</span>
        </Link>
        <Link to="/grafik">
          <Assessment />
          <span>Grafik<br/>Kegiatan</span>
        </Link>
        <Link to="/profile">
          <Person />
          <span>Profile</span>
        </Link>
        <div className="menu-link" onClick={this.props.displayFeedback}>
          <EmojiEmotions />
          <span>Feedback</span>
        </div>
        <Link to="/" onClick={this.props.logout}>
          <PowerSettingsNew />
          <span>Logout</span>
        </Link>
      </div>
    )
  }
}

class MenuAdmin extends React.Component {
  render() {
    return (
      <div className="menu-list">
        <Link to="/tambah">
          <SettingsApplications />
          <span>Kelola<br/>Kegiatan</span>
        </Link>
        <Link to="/users">
          <SupervisorAccount />
          <span>Kelola<br/>User</span>
        </Link>
        <Link to="/kegiatan">
          <Assignment />
          <span>Semua<br/>Kegiatan</span>
        </Link>
        <Link to="/profile">
          <Person />
          <span>Profile</span>
        </Link>
        <div className="menu-link" onClick={this.props.displayFeedback}>
          <EmojiEmotions />
          <span>Feedback</span>
        </div>
        <Link to="/" onClick={this.props.logout}>
          <PowerSettingsNew />
          <span>Logout</span>
        </Link>
      </div>
    )
  }
}

// Role (harus ada 6 setiap role) :

// - KPA : 
//  * Grafik Kegiatan
//  * Semua Kegiatan
//  * List Semua Pejabat
//  * Profile
//  * Feedback
//  * Logout

// - PPTK :
//  * Grafik Kegiatan (kegiatan dia)
//  * Semua Kegiatan (kegiatan dia)
//  * List Semua PPK (ppk dia)
//  * Profile
//  * Feedback
//  * Logout

// - PPK :
//  * Input Kegiatan (kegiatan dia)
//  * Semua Kegiatan (kegiatan dia)
//  * Grafik Kegiatan (kegiatan dia)
//  * Profile
//  * Feedback
//  * Logout

// - Admin :
//  * Kelola Kegiatan
//  * Kelola User
//  * Semua Kegiatan
//  * Profile
//  * Feedback
//  * Logout