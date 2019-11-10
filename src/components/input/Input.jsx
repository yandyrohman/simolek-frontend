import React from 'react'

export default class DetailNext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      caption: '',
      active_tab: 0,
      active_inputs: 'data_kontrak'
    }
  }
  UNSAFE_componentWillReceiveProps({show, caption}) {
    this.setState({
      show: show,
      caption: caption
    })
  }
  hidePopup = () => {
    this.setState({
      show: false
    })
  }
  changeTab = (tabName, tabIndex) => {
    this.setState({
      active_tab: tabIndex,
      active_inputs: tabName
    })
  }
  render() {
    let { show, caption, active_tab, active_inputs } = this.state;
    let display = show === true ? 'flex' : 'none';
    return (
      <div className="input-value-popup" style={{display: display}}>
        <div className="input-value-box">
          <h3 className="input-value-title">{`Input Kegiatan ${caption}`}</h3>
          <div className="input-value-tabs">
            <div 
              className={
                active_tab === 0 ? 
                'input-value-tab-item input-value-tab-item-active' : 
                'input-value-tab-item'
              }
              onClick={() => this.changeTab('data_kontrak', 0)}
            >Data&nbsp;Kontrak</div>
            <div 
              className={
                active_tab === 1 ? 
                'input-value-tab-item input-value-tab-item-active' : 
                'input-value-tab-item'
              }
              onClick={() => this.changeTab('data_perusahaan', 1)}
            >Data&nbsp;Perusahaan</div>
            <div 
              className={
                active_tab === 2 ? 
                'input-value-tab-item input-value-tab-item-active' : 
                'input-value-tab-item'
              }
              onClick={() => this.changeTab('data_persentase', 2)}
            >Persentase&nbsp;Progres</div>
          </div>
          { active_inputs === 'data_kontrak' ? (
            <InputDataKontrak hideFunc={this.hidePopup}/>
          ) : active_inputs === 'data_perusahaan' ? (
            <InputDataPerusahaan hideFunc={this.hidePopup}/>
          ) : active_inputs === 'data_persentase' ? (
            <InputDataPersentase hideFunc={this.hidePopup}/>
          ) : '' }          
        </div>
      </div>
    )
  }
}

class InputDataKontrak extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anggaran: 0,
      nilai_kontrak: 0,
      nomor_kontrak: '',
      tgl_kontrak: '',
      tgl_mulai: '',
      tgl_selesai: ''
    }
  }
  changeData = (prop) => (e) => {
    this.setState({
      [prop]: e.target.value
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="input-value-group">
          <label>Anggaran</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Anggaran"
            spellCheck="false"
            onKeyUp={this.changeData('anggaran')}
          />
        </div>
        <div className="input-value-group">
          <label>Nilai Kontrak</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Nilai Kontrak"
            spellCheck="false"
            onKeyUp={this.changeData('nilai_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Nomor Kontrak</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Nomor Kontrak"
            spellCheck="false"
            onKeyUp={this.changeData('nomor_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Kontrak</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Kontrak"
            spellCheck="false"
            onKeyUp={this.changeData('tgl_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Mulai</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Mulai"
            spellCheck="false"
            onKeyUp={this.changeData('tgl_mulai')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Selesai</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Selesai"
            spellCheck="false"
            onKeyUp={this.changeData('tgl_selesai')}
          />
        </div>
        <div className="input-value-action">
          <div className="input-value-no" onClick={this.props.hideFunc}>BATAL</div>
          <div className="input-value-yes">SIMPAN</div>
        </div>
      </React.Fragment>
    )
  }
}

class InputDataPerusahaan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nama_perusahaan: '',
      alamat: '',
      rekening: '',
      telepon: '',
      npwp: '',
      no_spk: '',
      tgl_spk: '',
      no_spmk: '',
      tgl_spmk: ''
    }
  }
  changeData = (prop) => (e) => {
    this.setState({
      [prop]: e.target.value
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="input-value-group">
          <label>Nama Perusahaan</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Nama Perusahaan"
            spellCheck="false"
            onKeyUp={this.changeData('nama_perushaan')}
          />
        </div>
        <div className="input-value-group">
          <label>Alamat</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Alamat"
            spellCheck="false"
            onKeyUp={this.changeData('alamat')}
          />
        </div>
        <div className="input-value-group">
          <label>Rekening</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Rekening"
            spellCheck="false"
            onKeyUp={this.changeData('rekening')}
          />
        </div>
        <div className="input-value-group">
          <label>No Telepon</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No Telepon"
            spellCheck="false"
            onKeyUp={this.changeData('telepon')}
          />
        </div>
        <div className="input-value-group">
          <label>NPWP</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="NPWP"
            spellCheck="false"
            onKeyUp={this.changeData('npwp')}
          />
        </div>
        <div className="input-value-group">
          <label>No SPK</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No SPK"
            spellCheck="false"
            onKeyUp={this.changeData('no_spk')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal SPK</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal SPK"
            spellCheck="false"
            onKeyUp={this.changeData('tgl_spk')}
          />
        </div>
        <div className="input-value-group">
          <label>No SPMK</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No SPMK"
            spellCheck="false"
            onKeyUp={this.changeData('no_spmk')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal SPMK</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal SPMK"
            spellCheck="false"
            onKeyUp={this.changeData('tgl_spmk')}
          />
        </div>
        <div className="input-value-action">
          <div className="input-value-no" onClick={this.props.hideFunc}>BATAL</div>
          <div className="input-value-yes">SIMPAN</div>
        </div>
      </React.Fragment>
    )
  }
}

class InputDataPersentase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fisik: 0,
      keuangan: 0
    }
  }
  changeData = (prop) => (e) => {
    this.setState({
      [prop]: e.target.value
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="input-value-group">
          <label>Persentase Fisik</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Persentase Fisik"
            spellCheck="false"
          />
        </div>
        <div className="input-value-group">
          <label>Persentase Keuangan</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Persentase Keuangan"
            spellCheck="false"
          />
        </div>
        <div className="input-value-action">
          <div className="input-value-no" onClick={this.props.hideFunc}>BATAL</div>
          <div className="input-value-yes">SIMPAN</div>
        </div>
      </React.Fragment>
    )
  }
}


/* <div className="input-value-group">
  <label>Label</label>
  <select className="input-value-input">
    <option>Item 1</option>
    <option>Item 2</option>
    <option>Item 3</option>
    <option>Item 4</option>
    <option>Item 5</option>
  </select>
</div> */

/* <div className="input-value-group">
  <label>Label</label>
  <label className="input-value-input" for="file-kontrak">Upload File</label>
  <input type="file" id="file-kontrak" style={{display: 'none'}} />
</div> */