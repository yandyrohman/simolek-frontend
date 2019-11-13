import React from 'react'
import Url from '../../API'

export default class Delete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      id: '',
      caption: '',
      type: ''
    }
  }
  UNSAFE_componentWillReceiveProps({ show, id, caption, type }) {
    this.setState({
      show: show,
      id: id,
      caption: caption,
      type: type
    })
  }
  hideDelete = () => {
    this.props.hideDeleteParentState()
    this.setState({
      show: false
    })
  }
  deleteData = () => {
    let { id, type } = this.props;
    let url;
    if (type === 'detail') {
      url = Url.api + 'delete_sub_kegiatan';
    } else if (type === 'kegiatan') {
      url = Url.api + 'delete_kegiatan';
    } else if (type === 'program') {
      url = Url.api + 'delete_program';
    }
    this.props.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    }).then(res => res.text()).then((res) => {
      this.hideDelete()
      this.props.getAllDatas()
      document.getElementById('popup-next').style.display = 'none';
      document.getElementById('popup-tambah').style.display = 'none';
    })
  }
  render() {
    let { show, caption } = this.state;
    let display = show === true ? 'flex' : 'none';
    return (
      <div 
        style={{display: display}}
        className="tambah-delete-popup"
      >
        <div className="tambah-delete-box">
          <div className="tambah-delete-box-title">
            Anda yakin ingin menghapus <i>{caption}</i> ?
          </div>
          <div 
            className="tambah-delete-no"
            onClick={this.hideDelete}
          >BATAL</div>
          <div 
            className="tambah-delete-yes"
            onClick={this.deleteData}
          >YA</div>
        </div>
      </div>
    )
  }
}