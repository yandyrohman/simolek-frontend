import React from 'react'

export default class Delete extends React.Component {
  render() {
    let { show, id } = this.props;
    let display = show ? 'flex' : 'none';
    return (
      <div className="users-delete-popup" style={{display: display}}>
        <div className="users-delete-box">
          <div className="users-delete-text">Yakin Ingin Menghapus Pengguna Ini?</div>
          <div 
            className="users-delete-no"
            onClick={() => this.props.hideDelete()}
          >BATAL</div>
          <div 
            className="users-delete-yes"
            onClick={() => this.props.deleteUser(id)}
          >YA</div>
        </div>
      </div>
    )
  }
}