import React from 'react'
import { Add, DeleteOutline } from '@material-ui/icons'
import Delete from './Delete'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      delete_show: false,
      delete_id: '',
      delete_caption: '',
      delete_type: ''
    }
  }
  openDelete = ({id, nama_detail}) => {
    this.setState({
      delete_show: true,
      delete_id: id,
      delete_caption: nama_detail,
      delete_type: 'detail'
    })
  }
  hideDelete = () => {
    this.setState({
      delete_show: false
    })
  }
  render() {
    let { data, index, namaKegiatan } = this.props;
    let details;
    if (data.length !== 0) {
      details = data.map((x, i) => {
        return (
          <React.Fragment key={i}>
            <div className="tambah-detail">
              <b>{i+1}.</b>&nbsp;
              <span>{x.nama_detail}</span>
              <div 
                className="tambah-detail-delete"
                onClick={() => this.openDelete(x)}
              >
                <DeleteOutline />
              </div>
            </div>
          </React.Fragment>
        )
      });
    } else {
      details = (
        <div className="tambah-detail-none">
          Kegiatan {index} tidak ada sub kegiatan..
        </div>
      );
    }
    return (
      <React.Fragment>
        {details}
        <div 
          className="tambah-detail-add"
          onClick={() => this.props.openPopup('detail', {
            title: 'Sub Kegiatan',
            etc: namaKegiatan
          })}
        >
          <Add />
          <div className="tambah-detail-add-caption">
            <span className="tambah-detail-add-arrow"></span>
            <span>Tambah Sub Kegiatan <b>(Kegiatan {index})</b></span>
          </div>
        </div>
        <Delete 
          show={this.state.delete_show}
          id={this.state.delete_id}
          caption={this.state.delete_caption}
          type={this.state.delete_type}
          hideDeleteParentState={this.hideDelete}
        />
      </React.Fragment>
    )
  }
}