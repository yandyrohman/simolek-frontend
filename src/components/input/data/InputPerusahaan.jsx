import React from 'react'

export default class InputKontrak extends React.Component {
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
            value={this.props.data.penyedia_kegiatan}
            onChange={this.props.changeData('data_perusahaan', 'penyedia_kegiatan')}
          />
        </div>
        <div className="input-value-group">
          <label>Nama Direktur</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Nama Direktur"
            spellCheck="false"
            value={this.props.data.nama_direktur}
            onChange={this.props.changeData('data_perusahaan', 'nama_direktur')}
          />
        </div>
        <div className="input-value-group">
          <label>Rekening</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Rekening"
            spellCheck="false"
            value={this.props.data.no_rekening}
            onChange={this.props.changeData('data_perusahaan', 'no_rekening')}
          />
        </div>
        <div className="input-value-group">
          <label>No Telepon</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No Telepon"
            spellCheck="false"
            value={this.props.data.telepon}
            onChange={this.props.changeData('data_perusahaan', 'telepon')}
          />
        </div>
        <div className="input-value-group">
          <label>NPWP</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="NPWP"
            spellCheck="false"
            value={this.props.data.npwp}
            onChange={this.props.changeData('data_perusahaan', 'npwp')}
          />
        </div>
        <div className="input-value-group">
          <label>No SPK</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No SPK"
            spellCheck="false"
            value={this.props.data.no_spk}
            onChange={this.props.changeData('data_perusahaan', 'no_spk')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal SPK</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal SPK"
            spellCheck="false"
            value={this.props.data.tgl_spk}
            onChange={this.props.changeData('data_perusahaan', 'tgl_spk')}
          />
        </div>
        <div className="input-value-group">
          <label>No SPMK</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="No SPMK"
            spellCheck="false"
            value={this.props.data.no_spmk}
            onChange={this.props.changeData('data_perusahaan', 'no_spmk')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal SPMK</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal SPMK"
            spellCheck="false"
            value={this.props.data.tgl_spmk}
            onChange={this.props.changeData('data_perusahaan', 'tgl_spmk')}
          />
        </div>
        <div className="input-value-action">
          <div 
            className="input-value-no" 
            onClick={this.props.hideInput}
          >BATAL</div>
          <div 
            className="input-value-yes" 
            onClick={() => this.props.updateData('data_perusahaan')}
          >SIMPAN</div>
        </div>
      </React.Fragment>
    )
  }
}