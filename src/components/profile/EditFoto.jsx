import React, { Component, Fragment } from 'react'
import { CloudUploadTwoTone, Close } from '@material-ui/icons'
import Url from '../../API'

export default class EditFoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      loading: false
    }
  }
  turnLoading = (value) => {
    this.setState({
      loading: value === 'on' ? true : false
    })
  }
  getBase64 = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = reader.result;
      this.setState({image: base64})
    }
    reader.onerror = error => {
      console.log('Error: ', error);
    }
  }
  uploadImage() {
    let url = Url.api + 'edit_profile_image';
    let data_login = JSON.parse(window.localStorage.getItem('user'))
    let user = data_login.login;
    this.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: user.id,
        image: this.state.image
      })
    }).then(() => {
      this.turnLoading('off')
      this.props.hideEditFoto()
      this.props.getFoto()
    })
  }
  render() {
    let { image } = this.state;
    let display = this.props.show ? 'flex' : 'none';
    return (
      <div className="profile-edit-foto-bg" style={{display: display}}>
        <div className="profile-edit-foto-close" onClick={() => {
            this.props.hideEditFoto()
            this.setState({image: ''})
          }
        }>
          <Close />
        </div>
        <div className="profile-edit-foto">
          <small>Pilih gambar yang berbentuk persegi.</small>
          <label 
            for="select-photo" 
            className="profile-edit-foto-button"
          >
            <span>Pilih Foto</span>&nbsp;
            <CloudUploadTwoTone />
          </label>
          <input 
            type="file" 
            id="select-photo" 
            style={{display: 'none'}}
            onChange={this.getBase64}
          />
          {
            image ? (
              <Fragment>
                <img 
                  className="profile-edit-foto-img" 
                  alt="foto_profile" 
                  src={image}
                />
                <div 
                  className="profile-edit-foto-button"
                  onClick={() => this.uploadImage()}
                >
                  <span>UBAH</span>
                </div>
              </Fragment>
            ) : ''
          }
        </div>
      </div>
    )
  }
}