import React, { Component } from 'react'
import { Close } from '@material-ui/icons'

export default class ListPejabat extends Component {
  render() {
    let { show, pejabats } = this.props;
    let display = show ? 'flex' : 'none';
    return (
      <div 
        className="input_pejabat-list-pejabat" 
        style={{display: display}}
      >
        <div 
          className="input_pejabat-list-pejabat-close"
          onClick={() => this.props.hideSelectPejabat()}
        >
          <Close />
        </div>
        <div className="input_pejabat-list-pejabat-box">
          <small>PPTK</small>
          <select 
            className="input_pejabat-list-pejabat-select"
            onChange={this.props.onChangePejabat('id_pptk')}
          >
            <option {...{
              selected: show ? false : true,
              style: {display: 'none'}
            }}>Pilih PPTK</option>
            {
              pejabats.map((pejabat, i) => 
                pejabat.role === 'pptk' ? (
                  <option key={i} value={pejabat.id}>{pejabat.real_name}</option>
                ) : ''
              )
            }
          </select>
          <div style={{height: '10px'}}></div>
          <small>PPK</small>
          <select 
            className="input_pejabat-list-pejabat-select"
            onChange={this.props.onChangePejabat('id_ppk')}
          >
            <option {...{
              selected: show ? false : true,
              style: {display: 'none'}
            }}>Pilih PPK</option>
            {
              pejabats.map((pejabat, i) => 
                pejabat.role === 'ppk' ? (
                  <option key={i} value={pejabat.id}>{pejabat.real_name}</option>
                ) : ''
              )
            }
          </select>
          <div 
            className="input_pejabat-list-pejabat-save"
            onClick={this.props.sendPejabat}
          >SIMPAN</div>
        </div>
      </div>
    )
  }
}