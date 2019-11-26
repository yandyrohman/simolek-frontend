import React, { Component } from 'react'
import { GetApp, CloudUpload, Close } from '@material-ui/icons'
import Url from '../../API'
import XLSX from 'xlsx'

export default class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      save_show: false,
      filename: '',
      excel_data: []
    }
  }
  handleChange = (e) => {
    let file = e.target.files[0];
    this.setState({
      save_show: true,
      filename: 'tunggu sebentar...'
    })
    this.readExcel(file, datas => {
      this.setState({
        filename: file.name,
        excel_data: datas
      })
    })
  }
  sendData = () => {
    let url = Url.api + '/import_kegiatan';
    this.props.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: this.state.excel_data
      })
    }).then(() => {
      this.props.turnLoading('on')
      this.props.hideDialog()
      this.props.getAllDatas()
    })
  }
  readExcel(file, callback) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let data = new Uint8Array(e.target.result);
      let workbook = XLSX.read(data, {type: 'array'});
      let sheetName = workbook.Workbook.Sheets[0].name;
      let sheet = workbook.Sheets[sheetName];
      let dataOutput = [];
      let row;
      let rowNum;
      let colNum;
      let range = XLSX.utils.decode_range(sheet['!ref']);
      for(rowNum = 1; rowNum <= range.e.r; rowNum++){
        row = [];
        for(colNum= range.s.c; colNum<=range.e.c; colNum++){
          let nextCell = sheet[
              XLSX.utils.encode_cell({r: rowNum, c: colNum})
          ];
          if( typeof nextCell === 'undefined' ){
              row.push(0);
          } else {
            if (colNum == 1) {
              row.push(nextCell.w); // data formatted
            } else {
              row.push(nextCell.v); // data plan
            }
          }
        }
        dataOutput.push(row);
      }
      callback(dataOutput)
    }
    reader.readAsArrayBuffer(file);
  }
  render() {
    let save_show = this.state.save_show ? 'flex' : 'none';
    let display = this.props.show ? 'flex' : 'none';
    let download = Url.api + 'download_kerangka_excel';
    return (
      <div 
        className="tambah-dialog-bg" 
        style={{display: display}}
      >
        <div 
          className="tambah-dialog-close"
          onClick={this.props.hideDialog}
        >
          <Close />
        </div>
        <div className="tambah-dialog">
          <div className="tambah-dialog-warn">
            <span>
              Silahkan unduh terlebih dahulu kerangka excel yang sudah disediakan
            </span>
            <a className="tambah-dialog-unduh" href={download}>
              <span>Unduh Kerangka&nbsp;</span>
              <GetApp />
            </a>
          </div>
          <label className="tambah-dialog-upload" for="input-kegiatan">
            <span>Import Kegiatan&nbsp;</span>
            <CloudUpload />
          </label>
          <input 
            id="input-kegiatan"
            type="file" 
            style={{display: 'none'}}
            onChange={this.handleChange} 
          />
          <div 
            className="tambah-dialog-filename"
            style={{display: save_show}}
          >
            {this.state.filename}
          </div>
          <div 
            className="tambah-dialog-save"
            style={{display: save_show}}
            onClick={this.sendData}
          >SIMPAN</div>
        </div>
      </div>
    )
  }
}