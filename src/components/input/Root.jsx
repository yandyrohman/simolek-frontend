import React from 'react'
import '../../css/input.css'
import Back from '../other/Back'
import Programs from './Program'
import Url from '../../API'
import Loading from '../other/Loading'
import Input from './Input'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false,
      popup_show: false,
      popup_caption: '',
      popup_data: []
    }
  }
  componentDidMount() {
    this.getDataKegiatan()
  }
  getDataKegiatan = () => {
    let user = JSON.parse(window.localStorage.getItem('user'));
    let url = Url.api + 'get_kegiatan/' + user.login.role + '/' + user.login.id;
    this.setState({
      loading: true
    })
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        data: data,
        loading: false,
        popup_show: false
      })
    })
  }
  openInput = (data) => {
    this.setState({
      popup_show: true,
      popup_caption: data.nama_detail,
      popup_data: data
    })
  }
  turnLoading = (value) => {
    this.setState({
      loading: value === 'on' ? true : false
    })
  }
  render() {
    let { data, loading, popup_show, popup_caption, popup_data } = this.state;
    return (
      <div className="input-root">
        <div className="input-list">
          <Back 
            caption="Input Kegiatan"
            hint="Klik kegiatan untuk menginput nilai"
          />
          <Programs 
            data={data}
            openInput={this.openInput}
          />
        </div>
        <Loading loading={loading}/>
        <Input 
          show={popup_show}
          caption={popup_caption}
          data={popup_data}
          turnLoading={this.turnLoading}
          getDataKegiatan={this.getDataKegiatan}
        />
      </div>
    );
  }
}