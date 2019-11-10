import React from 'react'
import { Delete } from '@material-ui/icons'

export default class Form extends React.Component {
  render() {
    let { show, data, type, warning } = this.props;
    let display = show === true ? 'flex' : 'none';
    return (
      <div className="users-form-popup" style={{display: display}}>
        <div className="users-form-scroll">
          <div className="users-form-box">
            <div 
              className="users-form-delete"
              onClick={() => this.props.showDelete(data.id)}
            >
              <Delete />
            </div>
            <div className="users-form-title">
              {`${type === 'add' ? 'Tambah' : 'Ubah'} Pengguna`}
            </div>
            <div className="users-form-group">
              <label>Nama Lengkap</label>
              <input 
                className="users-form-input"
                type="text" 
                placeholder="Nama Lengkap"
                name="real_name"
                onChange={this.props.changeForm}
                value={data.real_name}
              />
            </div>
            <div className="users-form-group">
              <label>Username</label>
              <input 
                className="users-form-input"
                type="text" 
                placeholder="Username"
                name="name"
                onChange={this.props.changeForm}
                value={data.name}
              />
            </div>
            <div className="users-form-group">
              <label>Password</label>
              <input 
                className="users-form-input"
                type="text" 
                placeholder="Password"
                name="password"
                onChange={this.props.changeForm}
                value={data.password}
              />
            </div>
            <div className="users-form-group">
              <label>Email</label>
              <input 
                className="users-form-input"
                type="text" 
                placeholder="Email"
                name="email"
                onChange={this.props.changeForm}
                value={data.email}
              />
            </div>
            <div className="users-form-group">
              <label>Jabatan</label>
              <input 
                className="users-form-input"
                type="text" 
                placeholder="Jabatan"
                name="position"
                onChange={this.props.changeForm}
                value={data.position}
              />
            </div>
            <div className="users-form-group">
              <label>Nomor Telepon</label>
              <input 
                className="users-form-input"
                type="text" 
                placeholder="Nomor Telepon"
                name="telepon"
                onChange={this.props.changeForm}
                value={data.telepon}
              />
            </div>
            <div className="users-form-group">
              <label>Alamat</label>
              <input 
                className="users-form-input"
                type="text" 
                placeholder="Alamat"
                name="alamat"
                onChange={this.props.changeForm}
                value={data.alamat}
              />
            </div>
            <div className="users-form-group">
              <label>Role</label>
              <select 
                className="users-form-input"
                name="role"
                onChange={this.props.changeForm}
                value={data.role}
              >
                <option hidden>Pilih Role</option>
                <option value="kpa">KPA</option>
                <option value="pptk">PPTK</option>
                <option value="ppk">PPK</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="users-form-warning">{warning ? warning : ''}</div>
            <div className="users-form-action">
              <div 
                className="users-form-no" 
                onClick={() => this.props.hideForm()}
              >BATAL</div>
              <div 
                className="users-form-yes"
                onClick={() => type === 'add' ? this.props.sendForm() : this.props.updateForm(data.id)}
              >SIMPAN</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}