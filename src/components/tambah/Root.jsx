import React from 'react'
import '../../css/tambah.css'
import Url from '../../API'
import Programs from './Program'
import Loading from '../other/Loading'
import Tambah from './Tambah'
import Back from '../other/Back'

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
      }
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
  render() {
    let { 
      data, 
      loading, 
      popup_show, 
      popup_type,
      popup_data,
      users
    } = this.state;
    return (
      <div className="tambah-root">
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