import React from 'react'

export default class InputKontrak extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-value-cluster">
          <div className="input-value-cluster-title">Pertama</div>
          <div className="input-value-group">
            <label>SP2D</label>
            <input 
              className="input-value-input"
              type="number"
              placeholder="SP2D"
              spellCheck="false"
              value={this.props.data.sp2d_1}
              onChange={this.props.changeData('data_sp2d', 'sp2d_1')}
            />
          </div>
          <div className="input-value-group">
            <label>Keterangan</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Keterangan"
              spellCheck="false"
              value={this.props.data.sp2d_1_ket}
              onChange={this.props.changeData('data_sp2d', 'sp2d_1_ket')}
            />
          </div>
        </div>
        <div className="input-value-cluster">
          <div className="input-value-cluster-title">Kedua</div>
          <div className="input-value-group">
            <label>SP2D</label>
            <input 
              className="input-value-input"
              type="number"
              placeholder="SP2D"
              spellCheck="false"
              value={this.props.data.sp2d_2}
              onChange={this.props.changeData('data_sp2d', 'sp2d_2')}
            />
          </div>
          <div className="input-value-group">
            <label>Keterangan</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Keterangan"
              spellCheck="false"
              value={this.props.data.sp2d_2_ket}
              onChange={this.props.changeData('data_sp2d', 'sp2d_2_ket')}
            />
          </div>
        </div>
        <div className="input-value-cluster">
          <div className="input-value-cluster-title">Ketiga</div>
          <div className="input-value-group">
            <label>SP2D</label>
            <input 
              className="input-value-input"
              type="number"
              placeholder="SP2D"
              spellCheck="false"
              value={this.props.data.sp2d_3}
              onChange={this.props.changeData('data_sp2d', 'sp2d_3')}
            />
          </div>
          <div className="input-value-group">
            <label>Keterangan</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Keterangan"
              spellCheck="false"
              value={this.props.data.sp2d_3_ket}
              onChange={this.props.changeData('data_sp2d', 'sp2d_3_ket')}
            />
          </div>
        </div>
        <div className="input-value-cluster">
          <div className="input-value-cluster-title">Keempat</div>
          <div className="input-value-group">
            <label>SP2D</label>
            <input 
              className="input-value-input"
              type="number"
              placeholder="SP2D"
              spellCheck="false"
              value={this.props.data.sp2d_4}
              onChange={this.props.changeData('data_sp2d', 'sp2d_4')}
            />
          </div>
          <div className="input-value-group">
            <label>Keterangan</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Keterangan"
              spellCheck="false"
              value={this.props.data.sp2d_4_ket}
              onChange={this.props.changeData('data_sp2d', 'sp2d_4_ket')}
            />
          </div>
        </div>
        <div className="input-value-cluster">
          <div className="input-value-cluster-title">Kelima</div>
          <div className="input-value-group">
            <label>SP2D</label>
            <input 
              className="input-value-input"
              type="number"
              placeholder="SP2D"
              spellCheck="false"
              value={this.props.data.sp2d_5}
              onChange={this.props.changeData('data_sp2d', 'sp2d_5')}
            />
          </div>
          <div className="input-value-group">
            <label>Keterangan</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="Keterangan"
              spellCheck="false"
              value={this.props.data.sp2d_5_ket}
              onChange={this.props.changeData('data_sp2d', 'sp2d_5_ket')}
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
            onClick={() => this.props.updateData('data_sp2d')}
          >SIMPAN</div>
        </div>
      </React.Fragment>
    )
  }
}