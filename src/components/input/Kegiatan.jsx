import React from 'react'
import Details from './Detail'

export default class Kegiatan extends React.Component {
  showChild = (index) => {
    let thisChildContainer = document.getElementById(`kegiatan-child-${index}`);
    let { display } = thisChildContainer.style;
    if (display === 'none' || display === '') {
      thisChildContainer.style.display = 'block';
    } else {
      thisChildContainer.style.display = 'none';
    }
  }
  render() {
    let { data, index } = this.props;
    let kegiatans;
    if (data.length !== 0) {
      kegiatans = data.map((x, i) => {
        return (
          <React.Fragment key={i}>
            <div 
              className="tambah-kegiatan"
              onClick={() => this.showChild(`${index}-${i}`)}
            >
              <b>{i+1}.</b>&nbsp;
              <span>{x.nama_kegiatan}</span>
            </div>
            <div 
              className="tambah-kegiatan-child"
              id={`kegiatan-child-${index}-${i}`}
            >
              <Details 
                data={x.grandchild}
                index={i+1}
                namaKegiatan={x.nama_kegiatan}
                openInput={this.props.openInput}
              />
            </div>
          </React.Fragment>
        )
      });
    } else {
      kegiatans = (
        <div className="tambah-kegiatan-none">
          Program {index} tidak ada kegiatan..
        </div>
      );
    }
    return (
      <React.Fragment>
        {kegiatans}
      </React.Fragment>
    )
  }
}