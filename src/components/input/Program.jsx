import React from 'react'
import Kegiatans from './Kegiatan'

export default class Program extends React.Component {
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
              className="input-program"
              onClick={() => this.showChild(i)}
            >
              <b className="input-program-num">
                &nbsp;{x.id}&nbsp;
              </b>&nbsp;
              <span>{x.nama_program}</span>
            </div>
            <div 
              className="input-program-child"
              id={`program-child-${i}`}
            >
              <Kegiatans 
                data={x.child}
                index={i+1}
                idProgram={x.id}
                namaProgram={x.nama_program}
                openInput={this.props.openInput}
              />
            </div>
          </React.Fragment>
        )
      });
    } else {
      programs = (
        <div className="input-program-none">
          Tidak ada program..
        </div>
      );
    }
    return (
      <React.Fragment>
        {programs}
      </React.Fragment>
    )
  }
}