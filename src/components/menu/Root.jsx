import React from 'react'
import '../../css/menu.css'
import { Link } from 'react-router-dom'
import Feedback from '../other/Feedback'
import { 
  AssignmentTwoTone,
  SettingsApplicationsTwoTone,
  AddCircleTwoTone,
  PersonTwoTone,
  // EmojiEmotionsTwoTone,
  ForwardTwoTone,
  AssessmentTwoTone,
  SupervisorAccountTwoTone,
  ScheduleTwoTone
} from '@material-ui/icons' 
import Bg from '../other/Bg'
import Url from '../../API'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_feedback: false,
      image: '',
      loading: false
    }
  }
  componentDidMount() {
    this.getFoto()
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
  turnLoading = (value) => {
    this.setState({
      loading: value === 'on' ? true : false
    })
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
        <Bg />
        <div className="menu-title">
          <h3>SiMolek</h3>
          <small>
            Sistem Informasi Monitoring dan <br />Evaluasi Kinerja
          </small>
        </div>
        <div className="menu-profile">
          {
            this.state.loading ? (
              <div className="menu-profile-photo-loading">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <img 
                className="menu-profile-photo" 
                src={this.state.image}
                alt="profile"
              />
            )
          }
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
        <div className="menu-footer">Dinas PUPR Garut v1.0</div>
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
        <Link to="/progres">
          <AssessmentTwoTone />
          <span>Progres<br/>Kegiatan</span>
        </Link>
        <Link to="/kegiatan">
          <AssignmentTwoTone />
          <span>Semua<br/>Kegiatan</span>
        </Link>
        <Link to="/pejabat">
          <SupervisorAccountTwoTone />
          <span>Daftar<br/>Pejabat</span>
        </Link>
        <Link to="/histori">
          <ScheduleTwoTone />
          <span>Histori</span>
        </Link>
        <Link to="/profile">
          <PersonTwoTone />
          <span>Profile</span>
        </Link>
        {/* <div className="menu-link" onClick={this.props.displayFeedback}>
          <EmojiEmotionsTwoTone />
          <span>Feedback</span>
        </div> */}
        <Link to="/" onClick={this.props.logout}>
          <ForwardTwoTone />
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
        <Link to="/progres">
          <AssessmentTwoTone />
          <span>Progres<br/>Kegiatan</span>
        </Link>
        <Link to="/kegiatan">
          <AssignmentTwoTone />
          <span>Semua<br/>Kegiatan</span>
        </Link>
        <Link to="/pejabat">
          <SupervisorAccountTwoTone />
          <span>Daftar<br/>PPK</span>
        </Link>
        <Link to="/histori">
          <ScheduleTwoTone />
          <span>Histori</span>
        </Link>
        <Link to="/profile">
          <PersonTwoTone />
          <span>Profile</span>
        </Link>
        {/* <div className="menu-link" onClick={this.props.displayFeedback}>
          <EmojiEmotionsTwoTone />
          <span>Feedback</span>
        </div> */}
        <Link to="/" onClick={this.props.logout}>
          <ForwardTwoTone />
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
          <AddCircleTwoTone />
          <span>Input<br/>Kegiatan</span>
        </Link>
        <Link to="/kegiatan">
          <AssignmentTwoTone />
          <span>Semua<br/>Kegiatan</span>
        </Link>
        <Link to="/progres">
          <AssessmentTwoTone />
          <span>Progres<br/>Kegiatan</span>
        </Link>
        <Link to="/histori">
          <ScheduleTwoTone />
          <span>Histori</span>
        </Link>
        <Link to="/profile">
          <PersonTwoTone />
          <span>Profile</span>
        </Link>
        {/* <div className="menu-link" onClick={this.props.displayFeedback}>
          <EmojiEmotionsTwoTone />
          <span>Feedback</span>
        </div> */}
        <Link to="/" onClick={this.props.logout}>
          <ForwardTwoTone />
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
          <SettingsApplicationsTwoTone />
          <span>Kelola<br/>Kegiatan</span>
        </Link>
        <Link to="/users">
          <SupervisorAccountTwoTone />
          <span>Kelola<br/>User</span>
        </Link>
        <Link to="/kegiatan">
          <AssignmentTwoTone />
          <span>Semua<br/>Kegiatan</span>
        </Link>
        <Link to="/histori">
          <ScheduleTwoTone />
          <span>Histori</span>
        </Link>
        <Link to="/profile">
          <PersonTwoTone />
          <span>Profile</span>
        </Link>
        <Link to="/" onClick={this.props.logout}>
          <ForwardTwoTone />
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
//  * AddCircleTwoTone Kegiatan (kegiatan dia)
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