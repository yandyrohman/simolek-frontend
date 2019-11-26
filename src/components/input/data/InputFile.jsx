import React from 'react'
import { CloudUpload } from '@material-ui/icons'
import Url from '../../../API'

export default class InputKontrak extends React.Component {
  getBase64 = (e) => {
    let file = e.target.files[0];
    let filename = file.name;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    this.props.turnLoading('on')
    reader.onload = () => {
      let data = {
        id: this.props.id,
        filename: filename,
        base64: reader.result,
      };
      let url = Url.api + 'upload_file_kontrak';
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(() => {
        this.props.hideInput()
        this.props.turnLoading('off')
      })
    }
    reader.onerror = error => {
      console.log('Error: ', error);
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="input-value-group">
          <label>Upload File</label>
          <label className="input-value-input" for="file-kontrak">
            <b>Upload File</b>&nbsp;
            <CloudUpload />
          </label>
          <input 
            type="file" 
            id="file-kontrak" 
            style={{display: 'none'}} 
            onChange={this.getBase64}
          />
        </div>
        { this.props.data.file_kontrak === '-' ? (
          <div className="input-value-warning">
            File kontrak belum diupload, silahkan klik tombol <b>Upload File</b>.
          </div>
        ) : (
          <div className="input-value-success">
            File kontrak sudah terupload, jika ingin menggantinya silahkan upload ulang.
          </div>
        )}
        <div className="input-value-action">
          <div 
            className="input-value-no" 
            onClick={this.props.hideInput}
          >BATAL</div>
          <div 
            className="input-value-yes" 
            onClick={this.props.hideInput}
          >SELESAI</div>
        </div>
      </React.Fragment>
    )
  }
}