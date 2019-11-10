import React from 'react'
import { Add, DeleteOutline } from '@material-ui/icons'
import Details from './Detail'
import Delete from './Delete'

export default class Kegiatan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      delete_show: false,
      delete_id: '',
      delete_caption: '',
      delete_type: ''
    }
  }
  openDelete = ({id, nama_kegiatan}) => {
    this.setState({
      delete_show: true,
      delete_id: id,
      delete_caption: nama_kegiatan,
      delete_type: 'kegiatan'
    })
  }
  hideDelete = () => {
    this.setState({
      delete_show: false
    })
  }
  showChild = (indexProgram) => {
    let thisChildContainer = document.getElementById(`kegiatan-child-${indexProgram}`);
    let { display } = thisChildContainer.style;
    if (display === 'none' || display === '') {
      thisChildContainer.style.display = 'block';
    } else {
      thisChildContainer.style.display = 'none';
    }
  }
  render() {
    let { data, indexProgram, namaProgram } = this.props;
    let kegiatans;
    if (data.length !== 0) {
      kegiatans = data.map((x, i) => {
        return (
          <React.Fragment key={i}>
            <div 
              className="tambah-kegiatan"
              onClick={() => this.showChild(`${indexProgram}-${i}`)}
            >
              <b>{i+1}.</b>&nbsp;
              <span>{x.nama_kegiatan}</span>
              <div 
                className="tambah-kegiatan-delete"
                onClick={() => this.openDelete(x)}
              >
                <DeleteOutline />
              </div>
            </div>
            <div 
              className="tambah-kegiatan-child"
              id={`kegiatan-child-${indexProgram}-${i}`}
            >
              <Details 
                data={x.grandchild}
                indexProgram={indexProgram}
                indexKegiatan={x.id}
                nomorKegiatan={i+1}
                namaKegiatan={x.nama_kegiatan}
                openPopup={this.props.openPopup}
                getAllDatas={this.props.getAllDatas}
                turnLoading={this.props.turnLoading}
              />
            </div>
          </React.Fragment>
        )
      });
    } else {
      kegiatans = (
        <div className="tambah-kegiatan-none">
          Program {indexProgram} tidak ada kegiatan..
        </div>
      );
    }
    return (
      <React.Fragment>
        {kegiatans}
        <div 
          className="tambah-kegiatan-add"
          onClick={() => this.props.openPopup('kegiatan', {
            title: 'Kegiatan',
            etc: namaProgram,
            id_program: indexProgram,
            id_kegiatan: null
          })}
        >
          <Add />
          <div className="tambah-kegiatan-add-caption">
            <span className="tambah-kegiatan-add-arrow"></span>
            <span>Tambah Kegiatan <b>(Program {indexProgram})</b></span>
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