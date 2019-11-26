import React from 'react'

export default class InputKontrak extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-value-group">
          <label>Persentase Fisik</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Persentase Fisik (%)"
            spellCheck="false"
            value={this.props.data.persentase_fisik}
            onChange={this.props.changeData('data_persentase', 'persentase_fisik')}
          />
        </div>
        <div className="input-value-group">
          <label>Persentase Keuangan</label>
          <input 
            className="input-value-input"
            type="number"
            placeholder="Persentase Keuangan (%)"
            spellCheck="false"
            value={this.props.data.persentase_keuangan}
            onChange={this.props.changeData('data_persentase', 'persentase_keuangan')}
          />
        </div>
        <div className="input-value-action">
          <div 
            className="input-value-no" 
            onClick={this.props.hideInput}
          >BATAL</div>
          <div 
            className="input-value-yes" 
            onClick={() => this.props.updateData('data_persentase')}
          >SIMPAN</div>
        </div>
      </React.Fragment>
    )
  }
}