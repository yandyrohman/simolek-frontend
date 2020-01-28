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
    let { 
      data, 
      indexProgram, 
      indexKegiatan, 
      namaKegiatan
    } = this.props;
    let details;
    let idProgram = data[0] ? data[0].id_program : 0;
    let numberKegiatan = data[0] ? data[0].number_kegiatan : 0;
    if (data.length !== 0) {
      details = data.map((x, i) => {
        return (
          <React.Fragment key={i}>
            <div className="tambah-detail">
              <b>{`${x.id_program}.${x.number_kegiatan}.${x.number}`}&nbsp;</b>&nbsp;
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
          Kegiatan {`${idProgram}.${numberKegiatan}`} tidak ada sub kegiatan..
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
            etc: namaKegiatan,
            id_program: indexProgram,
            id_kegiatan: indexKegiatan
          })}
        >
          <Add />
          <div className="tambah-detail-add-caption">
            <span className="tambah-detail-add-arrow"></span>
            <span>
              Tambah Sub Kegiatan <b>({`${idProgram}.${numberKegiatan}`})</b>
            </span>
          </div>
        </div>
        <Delete 
          show={this.state.delete_show}
          id={this.state.delete_id}
          caption={this.state.delete_caption}
          type={this.state.delete_type}
          hideDeleteParentState={this.hideDelete}
          getAllDatas={this.props.getAllDatas}
          turnLoading={this.props.turnLoading}
        />
      </React.Fragment>
    )
  }
}