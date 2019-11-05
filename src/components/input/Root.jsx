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
      popup_caption: ''
    }
  }
  componentDidMount() {
    this.getDataKegiatan(data => {
      this.setState({
        data: data,
        loading: false,
      })
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
  openInput = (caption) => {
    this.setState({
      popup_show: true,
      popup_caption: caption
    })
  }
  render() {
    let { data, loading, popup_show, popup_caption } = this.state;
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
        />
      </div>
    );
  }
}