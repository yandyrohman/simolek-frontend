import React from 'react'

export default class InputKontrak extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-value-cluster">
          <div className="input-value-cluster-title">Pertama</div>
          <div className="input-value-group">
            <label>Tanggal</label>
            <input 
              className="input-value-input"
              type="date"
              placeholder="Tanggal"
              spellCheck="false"
              value={this.props.data.adendum_1_tgl}
              onChange={this.props.changeData('data_adendum', 'adendum_1_tgl')}
            />
          </div>
          <div className="input-value-group">
            <label>Nomor</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Nomor"
              spellCheck="false"
              value={this.props.data.adendum_1_nomor}
              onChange={this.props.changeData('data_adendum', 'adendum_1_nomor')}
            />
          </div>
          <div className="input-value-group">
            <label>Waktu</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Waktu"
              spellCheck="false"
              value={this.props.data.adendum_1_waktu}
              onChange={this.props.changeData('data_adendum', 'adendum_1_waktu')}
            />
          </div>
          <div className="input-value-group">
            <label>Target</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Target"
              spellCheck="false"
              value={this.props.data.adendum_1_target}
              onChange={this.props.changeData('data_adendum', 'adendum_1_target')}
            />
          </div>
          <div className="input-value-group">
            <label>Nilai</label>
            <input 
              className="input-value-input"
              type="number"
              placeholder="Anggaran"
              spellCheck="false"
              value={this.props.data.adendum_1_nilai}
              onChange={this.props.changeData('data_adendum', 'adendum_1_nilai')}
            />
          </div>
          <div className="input-value-group">
            <label>Keterangan</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Keterangan"
              spellCheck="false"
              value={this.props.data.adendum_1_ket}
              onChange={this.props.changeData('data_adendum', 'adendum_1_ket')}
            />
          </div>
        </div>
        <div className="input-value-cluster">
          <div className="input-value-cluster-title">Kedua</div>
          <div className="input-value-group">
            <label>Tanggal</label>
            <input 
              className="input-value-input"
              type="date"
              placeholder="Tanggal"
              spellCheck="false"
              value={this.props.data.adendum_2_tgl}
              onChange={this.props.changeData('data_adendum', 'adendum_2_tgl')}
            />
          </div>
          <div className="input-value-group">
            <label>Nomor</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Nomor"
              spellCheck="false"
              value={this.props.data.adendum_2_nomor}
              onChange={this.props.changeData('data_adendum', 'adendum_2_nomor')}
            />
          </div>
          <div className="input-value-group">
            <label>Waktu</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Waktu"
              spellCheck="false"
              value={this.props.data.adendum_2_waktu}
              onChange={this.props.changeData('data_adendum', 'adendum_2_waktu')}
            />
          </div>
          <div className="input-value-group">
            <label>Target</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Target"
              spellCheck="false"
              value={this.props.data.adendum_2_target}
              onChange={this.props.changeData('data_adendum', 'adendum_2_target')}
            />
          </div>
          <div className="input-value-group">
            <label>Nilai</label>
            <input 
              className="input-value-input"
              type="number"
              placeholder="Anggaran"
              spellCheck="false"
              value={this.props.data.adendum_2_nilai}
              onChange={this.props.changeData('data_adendum', 'adendum_2_nilai')}
            />
          </div>
          <div className="input-value-group">
            <label>Keterangan</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Keterangan"
              spellCheck="false"
              value={this.props.data.adendum_2_ket}
              onChange={this.props.changeData('data_adendum', 'adendum_2_ket')}
            />
          </div>
        </div>
        <div className="input-value-cluster">
          <div className="input-value-cluster-title">Ketiga</div>
          <div className="input-value-group">
            <label>Tanggal</label>
            <input 
              className="input-value-input"
              type="date"
              placeholder="Tanggal"
              spellCheck="false"
              value={this.props.data.adendum_3_tgl}
              onChange={this.props.changeData('data_adendum', 'adendum_3_tgl')}
            />
          </div>
          <div className="input-value-group">
            <label>Nomor</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Nomor"
              spellCheck="false"
              value={this.props.data.adendum_3_nomor}
              onChange={this.props.changeData('data_adendum', 'adendum_3_nomor')}
            />
          </div>
          <div className="input-value-group">
            <label>Waktu</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Waktu"
              spellCheck="false"
              value={this.props.data.adendum_3_waktu}
              onChange={this.props.changeData('data_adendum', 'adendum_3_waktu')}
            />
          </div>
          <div className="input-value-group">
            <label>Target</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Target"
              spellCheck="false"
              value={this.props.data.adendum_3_target}
              onChange={this.props.changeData('data_adendum', 'adendum_3_target')}
            />
          </div>
          <div className="input-value-group">
            <label>Nilai</label>
            <input 
              className="input-value-input"
              type="number"
              placeholder="Anggaran"
              spellCheck="false"
              value={this.props.data.adendum_3_nilai}
              onChange={this.props.changeData('data_adendum', 'adendum_3_nilai')}
            />
          </div>
          <div className="input-value-group">
            <label>Keterangan</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Keterangan"
              spellCheck="false"
              value={this.props.data.adendum_3_ket}
              onChange={this.props.changeData('data_adendum', 'adendum_3_ket')}
            />
          </div>
        </div>
        <div className="input-value-action">
          <div 
            className="input-value-no" 
            onClick={this.props.hideInput}
          >BATAL</div>
          <div 
            className="input-value-yes" 
            onClick={() => this.props.updateData('data_adendum')}
          >SIMPAN</div>
        </div>
      </React.Fragment>
    )
  }
}