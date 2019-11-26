import React from 'react'
import '../../css/tambah.css'
import Url from '../../API'
import Programs from './Program'
import Loading from '../other/Loading'
import Tambah from './Tambah'
import Back from '../other/Back'
import { CloudUpload, Person } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Bg from '../other/Bg'
import Dialog from './Dialog'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      users: [],
      loading: false,
      popup_show: false,
      popup_type: '',
      popup_data: {
        title: '',
        etc: '',
        id_program: null,
        id_kegiatan: null
      },
      dialog_show: false
    }
  }
  componentDidMount() {
    this.getAllDatas()
  }
  getAllDatas = () => {
    this.turnLoading('on')
    this.getDataKegiatan((data, users) => {
      this.setState({
        data: data,
        users: users,
      }, this.turnLoading('off'))
    })
  }
  getDataKegiatan = (callback) => {
    let user = JSON.parse(window.localStorage.getItem('user'));
    // eslint-disable-next-line
    let url = Url.api + 'get_kegiatan' + '/' + user.login.role + '/' + user.login.id;
    fetch(url).then(res => res.json()).then(data => {
      this.getDataUsers(users => {
        callback(data, users)
      })
    })
  }
  getDataUsers = (callback) => {
    let url = Url.api + 'get_users';
    fetch(url).then(res => res.json()).then(data => {
      callback(data)
    })
  }
  openPopup = (type, data) => {
    this.setState({
      popup_show: true,
      popup_type: type,
      popup_data: data
    })
  }
  hidePopup = () => {
    this.setState({
      popup_show: false
    })
  }
  turnLoading = (value) => {
    this.setState({
      loading: value === 'on' ? true : false
    })
  }
  openDialog = () => {
    this.setState({dialog_show: true})
  }
  hideDialog = () => {
    this.setState({dialog_show: false})
  }
  render() {
    let { 
      data, 
      loading, 
      popup_show, 
      popup_type,
      popup_data,
      users,
      dialog_show
    } = this.state;
    return (
      <div className="tambah-root">
        <Bg />
        <Dialog 
          show={dialog_show}
          hideDialog={this.hideDialog}
          turnLoading={this.turnLoading}
          getAllDatas={this.getAllDatas}
        />
        <Tambah 
          show={popup_show} 
          type={popup_type}
          data={popup_data}
          users={users}
          getAllDatas={this.getAllDatas}
          hidePopup={this.hidePopup}
          turnLoading={this.turnLoading}
        />
        <Loading loading={loading}/>
        <div className="tambah-list">
          <Back 
            caption="Kelola Kegiatan"
            hint="Tambah atau hapus kegiatan"
          />
          <div className="tambah-button" onClick={this.openDialog}>
            <span>Import Kegiatan&nbsp;</span>
            <CloudUpload />  
          </div>
          <Link to="/input_pejabat" className="tambah-button">
            <span>Input Pejabat&nbsp;</span>
            <Person />  
          </Link>
          <div className="tambah-title">Data Kegiatan</div>
          <Programs 
            data={data}
            openPopup={this.openPopup}
            getAllDatas={this.getAllDatas}
            turnLoading={this.turnLoading}
          />
        </div>
      </div>
    )
  }
}