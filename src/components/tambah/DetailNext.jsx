import React from 'react'

export default class DetailNext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  UNSAFE_componentWillReceiveProps({show}) {
    this.setState({
      show: show
    })
  }
  hidePopup = () => {
    this.props.hideDetailNext()
    this.setState({
      show: false
    })
  }
  render() {
    let { show } = this.state;
    let { users, data } = this.props;
    let display = show === true ? 'flex' : 'none';
    return (
      <div className="tambah-detailnext-popup" style={{display: display}} id="popup-next">
        <div className="tambah-detailnext-box">
          <h2>Lengkapi Sub Kegiatan</h2>
          <div className="tambah-detailnext-group">
            <label>Nama Sub Kegiatan</label>
            <input 
              name="input"
              className="tambah-detailnext-input"
              type="text"
              placeholder="Nama Sub Kegiatan"
              spellCheck="false"
              value={data.input}
              onChange={this.props.changeNextData}
            />
          </div>
          <div className="tambah-detailnext-group">
            <label>PPTK</label>
            <select 
              name="pptk"
              className="tambah-detailnext-input"
              value={data.pptk}
              onChange={this.props.changeNextData}
            >
              <option hidden>Pilih PPTK</option>
              {
                users.map(user => 
                  user.role === 'pptk' ? (
                    <option key={user.id} value={user.id}>{user.real_name}</option>
                  ) : ''
                )
              }
            </select>
          </div>
          <div className="tambah-detailnext-group">
            <label>PPK</label>
            <select 
              name="ppk"
              className="tambah-detailnext-input"
              value={data.ppk}
              onChange={this.props.changeNextData}
            >
              <option hidden>Pilih PPK</option>
              {
                users.map(user => 
                  user.role === 'ppk' ? (
                    <option key={user.id} value={user.id}>{user.real_name}</option>
                  ) : ''
                )
              }
            </select>
          </div>
          <div className="tambah-detailnext-action">
            <div className="tambah-detailnext-no" onClick={this.hidePopup}>BATAL</div>
            <div 
              className="tambah-detailnext-yes"
              onClick={() => this.props.sendDetail()}
            >SIMPAN</div>
          </div>
        </div>
      </div>
    )
  }
}