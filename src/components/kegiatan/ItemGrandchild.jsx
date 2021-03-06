import React from 'react'
import { KeyboardArrowRight } from '@material-ui/icons'

export default class ItemGrandChild extends React.Component {
  render() {
    let { data, idProgram, numberKegiatan } = this.props;
    let grandChilds = data.map((grandChild, index) => {
      // variable dibawah ini bisa memanggil data lengkap
      let { 
        nama_detail,
        persentase_fisik,
        persentase_keuangan 
      } = grandChild;
      let pc_fisik = {width: `${persentase_fisik}%`};
      let pc_keuangan = {width: `${persentase_keuangan}%`};
      return (
        <div 
          className="kegiatan-grandchild-item" 
          key={index}
          onClick={() => this.props.openDetailPopup(grandChild)}
        >
          <div className="kegiatan-grandchild-item-etc">
            <span className="kegiatan-grandchild-item-num">
              &nbsp;{`${idProgram}.${numberKegiatan}.${grandChild.number}`}&nbsp;
            </span>&nbsp;
            <span>{nama_detail}</span>
          </div>
          <div className="kegiatan-grandchild-item-etc"><KeyboardArrowRight /></div>
          <div className="kegiatan-grandchild-process">
            <small>Persentase Fisik :</small>
            <div className="kegiatan-grandchild-fisik">
              <div className="kegiatan-grandchild-bar" style={pc_fisik}></div>
              <div className="kegiatan-grandchild-percen">{persentase_fisik}%</div>
            </div>
            <small>Persentase Keuangan :</small>
            <div className="kegiatan-grandchild-keuangan">
              <div className="kegiatan-grandchild-bar" style={pc_keuangan}></div>
              <div className="kegiatan-grandchild-percen">{persentase_keuangan}%</div>
            </div>
          </div>
        </div>
      )
    });
    return (
      <React.Fragment>
        {grandChilds}
      </React.Fragment>
    )
  }
}