import React from 'react'
import Url from '../../API'

export default class DetailNext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      caption: '',
      active_tab: 0,
      active_inputs: 'data_kontrak',
      data: []
    }
  }
  UNSAFE_componentWillReceiveProps({show, caption, data}) {
    this.setState({
      show: show,
      caption: caption,
      data: data
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
    let { show, caption, data } = this.state;
    let display = show === true ? 'flex' : 'none';
    return (
      <div className="input-value-popup" style={{display: display}}>
        <div className="input-value-box">
          <h3 className="input-value-title">{`Input Kegiatan ${caption}`}</h3>
          <InputData
            hideFunc={this.hidePopup} 
            data={data}
            turnLoading={this.props.turnLoading}
            getDataKegiatan={this.props.getDataKegiatan}
          />  
        </div>
      </div>
    )
  }
}

class InputData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      anggaran: 0,
      nilai_kontrak: 0,
      no_kontrak: '',
      tgl_kontrak: '',
      tgl_mulai: '',
      tgl_selesai: '',
      penyedia_kegiatan: '',
      nama_direktur: '',
      no_rekening: '',
      telepon: '',
      npwp: '',
      no_spk: '',
      tgl_spk: '',
      no_spmk: '',
      tgl_spmk: '',
      persentase_fisik: '',
      persentase_keuangan: '',
      sumber_dana: '',
      sp2d: '',
      keterangan: ''
    }
  }
  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      id: props.data.id,
      anggaran: props.data.anggaran,
      nilai_kontrak: props.data.nilai_kontrak,
      no_kontrak: props.data.no_kontrak,
      tgl_kontrak: props.data.tgl_kontrak,
      tgl_mulai: props.data.tgl_mulai, 
      tgl_selesai: props.data.tgl_selesai,
      penyedia_kegiatan: props.data.penyedia_kegiatan,
      nama_direktur: props.data.nama_direktur,
      no_rekening: props.data.no_rekening,
      telepon: props.data.telepon,
      npwp: props.data.npwp,
      no_spk: props.data.no_spk,
      tgl_spk: props.data.tgl_spk,
      no_spmk: props.data.no_spmk,
      tgl_spmk: props.data.tgl_spmk,
      persentase_fisik: props.data.persentase_fisik,
      persentase_keuangan: props.data.persentase_keuangan,
      sumber_dana: props.data.sumber_dana,
      sp2d: props.data.sp2d,
      keterangan: props.data.keterangan
    })
  }
  updateData = () => {
    let url = Url.api + 'input_kegiatan';
    this.props.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(res => res.text()).then(() => {
      this.props.getDataKegiatan()
      this.props.turnLoading('off')
    })
  }
  changeData = (prop) => (e) => {
    this.setState({
      ...this.state,
      [prop]: e.target.value
    })
  }
  render() {
    console.log('HIRAUKAN ERROR NYA!')
    return (
      <React.Fragment>
        <div><b>Data Kontrak</b></div>
        <div className="input-value-group">
          <label>Anggaran</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Anggaran"
            spellCheck="false"
            value={this.state.anggaran}
            onChange={this.changeData('anggaran')}
          />
        </div>
        <div className="input-value-group">
          <label>Nilai Kontrak</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Nilai Kontrak"
            spellCheck="false"
            value={this.state.nilai_kontrak}
            onChange={this.changeData('nilai_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Nomor Kontrak</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Nomor Kontrak"
            spellCheck="false"
            value={this.state.no_kontrak}
            onChange={this.changeData('no_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Kontrak</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Kontrak"
            spellCheck="false"
            value={this.state.tgl_kontrak}
            onChange={this.changeData('tgl_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Mulai</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Mulai"
            spellCheck="false"
            value={this.state.tgl_mulai}
            onChange={this.changeData('tgl_mulai')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Selesai</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Selesai"
            spellCheck="false"
            value={this.state.tgl_selesai}
            onChange={this.changeData('tgl_selesai')}
          />
        </div>
        <p></p>
        <div><b>Data Perusahaan</b></div>
        <div className="input-value-group">
          <label>Nama Perusahaan</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Nama Perusahaan"
            spellCheck="false"
            value={this.state.penyedia_kegiatan}
            onChange={this.changeData('penyedia_kegiatan')}
          />
        </div>
        <div className="input-value-group">
          <label>Nama Direktur</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Nama Direktur"
            spellCheck="false"
            value={this.state.nama_direktur}
            onChange={this.changeData('nama_direktur')}
          />
        </div>
        <div className="input-value-group">
          <label>Rekening</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Rekening"
            spellCheck="false"
            value={this.state.no_rekening}
            onChange={this.changeData('no_rekening')}
          />
        </div>
        <div className="input-value-group">
          <label>No Telepon</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No Telepon"
            spellCheck="false"
            value={this.state.telepon}
            onChange={this.changeData('telepon')}
          />
        </div>
        <div className="input-value-group">
          <label>NPWP</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="NPWP"
            spellCheck="false"
            value={this.state.npwp}
            onChange={this.changeData('npwp')}
          />
        </div>
        <div className="input-value-group">
          <label>No SPK</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No SPK"
            spellCheck="false"
            value={this.state.no_spk}
            onChange={this.changeData('no_spk')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal SPK</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal SPK"
            spellCheck="false"
            value={this.state.tgl_spk}
            onChange={this.changeData('tgl_spk')}
          />
        </div>
        <div className="input-value-group">
          <label>No SPMK</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No SPMK"
            spellCheck="false"
            value={this.state.no_spmk}
            onChange={this.changeData('no_spmk')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal SPMK</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal SPMK"
            spellCheck="false"
            value={this.state.tgl_spmk}
            onChange={this.changeData('tgl_spmk')}
          />
        </div>
        <p></p>
        <div><b>Data Persentase</b></div>
        <div className="input-value-group">
          <label>Persentase Fisik (%)</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Persentase Fisik (%)"
            spellCheck="false"
            value={this.state.persentase_fisik}
            onChange={this.changeData('persentase_fisik')}
          />
        </div>
        <div className="input-value-group">
          <label>Persentase Keuangan (%)</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Persentase Keuangan (%)"
            spellCheck="false"
            value={this.state.persentase_keuangan}
            onChange={this.changeData('persentase_keuangan')}
          />
        </div>
        <p></p>
        <div><b>Data Lainnya</b></div>
        <div className="input-value-group">
          <label>Sumber Dana</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Sumber Dana"
            spellCheck="false"
            value={this.state.sumber_dana}
            onChange={this.changeData('sumber_dana')}
          />
        </div>
        <div className="input-value-group">
          <label>SP2D</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="SP2D"
            spellCheck="false"
            value={this.state.sp2d}
            onChange={this.changeData('sp2d')}
          />
        </div>
        <div className="input-value-group">
          <label>Keterangan</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Keterangan"
            spellCheck="false"
            value={this.state.keterangan}
            onChange={this.changeData('keterangan')}
          />
        </div>
        <div className="input-value-action">
          <div 
            className="input-value-no" 
            onClick={this.props.hideFunc}
          >BATAL</div>
          <div 
            className="input-value-yes" 
            onClick={this.updateData}
          >SIMPAN</div>
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