import React from 'react'
import { Add, DeleteOutline } from '@material-ui/icons'
import Kegiatans from './Kegiatan'
import Delete from './Delete'

export default class Program extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      delete_show: false,
      delete_id: '',
      delete_caption: '',
      delete_type: ''
    }
  }
  openDelete = ({id, nama_program}) => {
    this.setState({
      delete_show: true,
      delete_id: id,
      delete_caption: nama_program,
      delete_type: 'program'
    })
  }
  hideDelete = () => {
    this.setState({
      delete_show: false
    })
  }
  showChild = (index) => {
    let thisChildContainer = document.getElementById(`program-child-${index}`);
    let { display } = thisChildContainer.style;
    if (display === 'none' || display === '') {
      thisChildContainer.style.display = 'block';
    } else {
      thisChildContainer.style.display = 'none';
    }
  }
  render() {
    let data = this.props.data;
    let programs;
    if (data.length !== 0) {
      programs = data.map((x, i) => {
        return (
          <React.Fragment key={i}>
            <div 
              className="tambah-program"
              onClick={() => this.showChild(i)}
            >
              <b>{x.id}.</b>&nbsp;
              <span>{x.nama_program}</span>
              <div 
                className="tambah-program-delete"
                onClick={() => this.openDelete(x)}
              >
                <DeleteOutline />
              </div>
            </div>
            <div 
              className="tambah-program-child"
              id={`program-child-${i}`}
            >
              <Kegiatans 
                data={x.child}
                indexProgram={x.id}
                nomorProgram={i+1}
                namaProgram={x.nama_program}
                openPopup={this.props.openPopup}
                getAllDatas={this.props.getAllDatas}
                turnLoading={this.props.turnLoading}
              />
            </div>
          </React.Fragment>
        )
      });
    } else {
      programs = (
        <div className="tambah-program-none">
          Tidak ada program..
        </div>
      );
    }
    return (
      <React.Fragment>
        {programs}
        <div 
          className="tambah-program-add"
          onClick={() => this.props.openPopup('program', {
            title: 'Program',
            etc: '',
            id_program: null,
            id_kegiatan: null
          })}
        >
          <Add />
          <div className="tambah-program-add-caption">
            <span className="tambah-program-add-arrow"></span>
            <span>Tambah Program</span>
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