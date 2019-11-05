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
    let display = show === true ? 'flex' : 'none';
    return (
      <div className="tambah-detailnext-popup" style={{display: display}}>
        <div className="tambah-detailnext-box">
          <h2>Lengkapi Sub Kegiatan</h2>
          <div className="tambah-detailnext-group">
            <label>Nama Sub Kegiatan</label>
            <input 
              className="tambah-detailnext-input"
              type="text"
              placeholder="Nama Sub Kegiatan"
              spellCheck="false"
            />
          </div>
          <div className="tambah-detailnext-group">
            <label>Label</label>
            <select className="tambah-detailnext-input">
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
              <option>Item 4</option>
              <option>Item 5</option>
            </select>
          </div>
          <div className="tambah-detailnext-group">
            <label>Label</label>
            <input 
              className="tambah-detailnext-input"
              type="text"
              placeholder="placeholder"
              spellCheck="false"
            />
          </div>
          <div className="tambah-detailnext-action">
            <div className="tambah-detailnext-no" onClick={this.hidePopup}>BATAL</div>
            <div className="tambah-detailnext-yes">SIMPAN</div>
          </div>
        </div>
      </div>
    )
  }
}