import React from 'react'
import '../../css/menu.css'
import { Link } from 'react-router-dom'
import { Assignment } from '@material-ui/icons'
import { SettingsApplications } from '@material-ui/icons'
import { Input } from '@material-ui/icons'
import { Person } from '@material-ui/icons'
import { EmojiEmotions } from '@material-ui/icons'
import { PowerSettingsNew } from '@material-ui/icons' 
import Feedback from '../other/Feedback'

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
  render() {
    return (
      <div className="menu-root">
        <div className="menu-title">
          <h3>SiMolek</h3>
          <small>Pantau kegiatan dinas dengan mudah!</small>
        </div>
        <div className="menu-list">
          <Link to="/kegiatan">
            <Assignment />
            <span>Semua<br/>Kegiatan</span>
          </Link>
          <Link to="/tambah">
            <SettingsApplications />
            <span>Kelola<br/>Kegiatan</span>
          </Link>
          <Link to="/input">
            <Input />
            <span>Input<br/>Kegiatan</span>
          </Link>
          <Link to="/profile">
            <Person />
            <span>Profile</span>
          </Link>
          <div className="menu-link" onClick={this.displayFeedback}>
            <EmojiEmotions />
            <span>Feedback</span>
          </div>
          <Link to="/">
            <PowerSettingsNew />
            <span>Logout</span>
          </Link>
        </div>
        <div className="menu-footer">&copy; Dinas PUPR Garut v1.0</div>
        <Feedback 
          show={this.state.show_feedback}
          display={this.displayFeedback}  
        />
      </div>
    )
  }
}