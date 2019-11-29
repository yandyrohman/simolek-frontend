import React, { Component } from 'react'

export default class Item extends Component {
  numToMonth(num) {
    if (num === '01') {
      return 'Januari'
    } else if (num === '02') {
      return 'Februari'
    } else if (num === '03') {
      return 'Maret'
    } else if (num === '04') {
      return 'April'
    } else if (num === '05') {
      return 'Mei'
    } else if (num === '06') {
      return 'Juni'
    } else if (num === '07') {
      return 'Juli'
    } else if (num === '08') {
      return 'Agustus'
    } else if (num === '09') {
      return 'September'
    } else if (num === '10') {
      return 'Oktober'
    } else if (num === '11') {
      return 'November'
    } else if (num === '12') {
      return 'Desember'
    }
  }
  render() {
    let { data } = this.props;
    let time = data.jam.split(':');
    return (
      <div className="histori-item">
        <div className="histori-date">
          {`${data.tgl} ${this.numToMonth(data.bulan)} ${data.tahun} [${time[0]}:${time[1]}]`}
        </div>
        <div className="histori-value">
          <b>{data.real_name} :&nbsp;</b>
          <span>Menginput {data.nama_detail}</span>&nbsp;
          <b className="histori-num">
            &nbsp;
              {`${data.number_program}.${data.number_kegiatan}.${data.number_detail}`}
            &nbsp;
          </b>
        </div>
      </div>
    )
  }
}