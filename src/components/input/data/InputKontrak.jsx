import React from 'react'

export default class InputKontrak extends React.Component {
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
            value={this.props.data.anggaran}
            onChange={this.props.changeData('data_kontrak', 'anggaran')}
          />
        </div>
        <div className="input-value-group">
          <label>Nilai Kontrak</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Nilai Kontrak"
            spellCheck="false"
            value={this.props.data.nilai_kontrak}
            onChange={this.props.changeData('data_kontrak', 'nilai_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Nomor Kontrak</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Nomor Kontrak"
            spellCheck="false"
            value={this.props.data.no_kontrak}
            onChange={this.props.changeData('data_kontrak', 'no_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Kontrak</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Kontrak"
            spellCheck="false"
            value={this.props.data.tgl_kontrak}
            onChange={this.props.changeData('data_kontrak', 'tgl_kontrak')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Mulai</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Mulai"
            spellCheck="false"
            value={this.props.data.tgl_mulai}
            onChange={this.props.changeData('data_kontrak', 'tgl_mulai')}
          />
        </div>
        <div className="input-value-group">
          <label>Tanggal Selesai</label>
          <input 
            className="input-value-input"
            type="date"
            placeholder="Tanggal Selesai"
            spellCheck="false"
            value={this.props.data.tgl_selesai}
            onChange={this.props.changeData('data_kontrak', 'tgl_selesai')}
          />
        </div>
        <div className="input-value-group">
          <label>Sumber Dana</label>
          <input 
            className="input-value-input"
            type="text"
            placeholder="Sumber Dana"
            spellCheck="false"
            value={this.props.data.sumber_dana}
            onChange={this.props.changeData('data_kontrak', 'sumber_dana')}
          />
        </div>
        <div className="input-value-action">
          <div 
            className="input-value-no" 
            onClick={this.props.hideInput}
          >BATAL</div>
          <div 
            className="input-value-yes" 
            onClick={() => this.props.updateData('data_kontrak')}
          >SIMPAN</div>
        </div>
      </React.Fragment>
    )
  }
}