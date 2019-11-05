import React from 'react';
import '../../css/tambah.css';
import Url from '../../API';
import Programs from './Program';
import Loading from '../other/Loading';
import Tambah from './Tambah';
import Back from '../other/Back';

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false,
      popup_show: false,
      popup_type: '',
      popup_data: {
        title: '',
        etc: ''
      }
    }
  }
  componentDidMount() {
    this.getDataKegiatan(data => {
      this.setState({
        data: data,
        loading: false
      })
    })
  }
  openPopup = (type, data) => {
    this.setState({
      popup_show: true,
      popup_type: type,
      popup_data: data
    })
  }
  getDataKegiatan(callback) {
    let url = Url.api + 'get_kegiatan';
    this.setState({
      loading: true
    })
    fetch(url).then(res => res.json()).then(data => {
      callback(data)
    })
  }
  render() {
    let { 
      data, 
      loading, 
      popup_show, 
      popup_type,
      popup_data
    } = this.state;
    return (
      <div className="tambah-root">
        <Tambah 
          show={popup_show} 
          type={popup_type}
          data={popup_data}
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
          />
        </div>
      </div>
    )
  }
}