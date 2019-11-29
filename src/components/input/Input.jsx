import React from 'react'
import Url from '../../API'
import InputKontrak from './data/InputKontrak'
import InputPerusahaan from './data/InputPerusahaan'
import InputAdendum from './data/InputAdendum'
import InputSp2d from './data/InputSp2d'
import InputFile from './data/InputFile'
import InputPersentase from './data/InputPersentase'

export default class DetailNext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      caption: '',
      active_inputs: '',
      id_sub_kegiatan: null,
      data_adendum: {
        adendum_1_tgl: '',
        adendum_1_nomor: '',
        adendum_1_waktu: '',
        adendum_1_target: 0,
        adendum_1_nilai: '',
        adendum_1_ket: '',
        adendum_2_tgl: '',
        adendum_2_nomor: '',
        adendum_2_waktu: '',
        adendum_2_target: 0,
        adendum_2_nilai: '',
        adendum_2_ket: '',
        adendum_3_tgl: '',
        adendum_3_nomor: '',
        adendum_3_waktu: '',
        adendum_3_target: 0,
        adendum_3_nilai: '',
        adendum_3_ket: '',
      },
      data_sp2d: {
        sp2d_1: 0,
        sp2d_1_ket: '',
        sp2d_2: 0,
        sp2d_2_ket: '',
        sp2d_3: 0,
        sp2d_3_ket: '',
        sp2d_4: 0,
        sp2d_4_ket: '',
        sp2d_5: 0,
        sp2d_5_ket: '',
      },
      data_kontrak: {
        anggaran: 0,
        nilai_kontrak: 0,
        no_kontrak: '',
        tgl_kontrak: '',
        tgl_mulai: '',
        tgl_selesai: '',
        sumber_dana: ''
      },
      data_perusahaan: {
        penyedia_kegiatan: '',
        nama_direktur: '',
        no_rekening: '',
        telepon: '',
        npwp: '',
        no_spk: '',
        tgl_spk: '',
        no_spmk: '',
        tgl_spmk: ''
      },
      data_persentase: {
        persentase_fisik: 0,
        persentase_keuangan: 0,
      },
      data_file: {
        file_kontrak: ''
      }
    }
  }
  UNSAFE_componentWillReceiveProps({show, caption, data}) {
    this.setState({
      show: show,
      caption: caption,
      id_sub_kegiatan: data.id
    })
  }
  hidePopup = () => {
    this.setState({show: false})
  }
  hideInput = () => {
    this.setState({active_inputs: ''})
  }
  changeTab = (tabName) => {
    let id = this.state.id_sub_kegiatan;
    let url = Url.api + 'show_kegiatan/' + tabName + '/' + id;
    this.props.turnLoading('on')
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.props.turnLoading('off')
        this.setState({
          ...this.state,
          active_inputs: tabName,
          [tabName]: data[0]
        })
      })
  }
  changeData = (data, prop, value=false) => (e) => {
    this.setState({
      ...this.state,
      [data]: {
        ...this.state[data],
        [prop]: value ? value : e.target.value
      }
    })
  }
  updateData = (type) => {
    let url = Url.api + 'input_kegiatan/' + type;
    let data = this.state[type];
    let data_login = JSON.parse(window.localStorage.getItem('user'))
    let user = data_login.login;
    data = {
      ...data,
      id: this.state.id_sub_kegiatan,
      id_user: user.id
    };
    this.props.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.text()).then(() => {
      this.props.turnLoading('off')
    })
  }
  render() {
    let { show, caption, active_inputs } = this.state;
    let display = show === true ? 'flex' : 'none';
    let displayInput = active_inputs ? 'none' : 'block';
    return (
      <div className="input-value-popup" style={{display: display}}>
        <div className="input-value-box">
          <h3 className="input-value-title">{`Input Kegiatan ${caption}`}</h3>
          { active_inputs === 'data_kontrak' ? (
              <InputKontrak
                hideInput={this.hideInput} 
                data={this.state.data_kontrak}
                changeData={this.changeData}
                updateData={this.updateData}
              />
            ) : active_inputs === 'data_perusahaan' ? (
              <InputPerusahaan
                hideInput={this.hideInput} 
                data={this.state.data_perusahaan}
                changeData={this.changeData}
                updateData={this.updateData}
              />
            ) : active_inputs === 'data_adendum' ? (
              <InputAdendum
                hideInput={this.hideInput} 
                data={this.state.data_adendum}
                changeData={this.changeData}
                updateData={this.updateData}
              /> 
            ) : active_inputs === 'data_sp2d' ? (
              <InputSp2d
                hideInput={this.hideInput} 
                data={this.state.data_sp2d}
                changeData={this.changeData}
                updateData={this.updateData}
              /> 
            ) : active_inputs === 'data_file' ? (
              <InputFile
                hideInput={this.hideInput} 
                data={this.state.data_file}
                changeData={this.changeData}
                updateData={this.updateData}
                turnLoading={this.props.turnLoading}
                id={this.state.id_sub_kegiatan}
              /> 
            ) : active_inputs === 'data_persentase' ? (
              <InputPersentase
                hideInput={this.hideInput} 
                data={this.state.data_persentase}
                changeData={this.changeData}
                updateData={this.updateData}
              /> 
            ) : (
              <div className="input-value-selector" style={{display: displayInput}}>
                <div 
                  className="input-value-selector-item"
                  onClick={() => this.changeTab('data_kontrak')}
                >Data Kontrak</div>
                <div 
                  className="input-value-selector-item"
                  onClick={() => this.changeTab('data_perusahaan')}
                >Data Perusahaan</div>
                <div 
                  className="input-value-selector-item"
                  onClick={() => this.changeTab('data_file')}
                >Upload File Kontrak</div>
                <div 
                  className="input-value-selector-item"
                  onClick={() => this.changeTab('data_persentase')}
                >Data Persentase</div>
                <div 
                  className="input-value-selector-item"
                  onClick={() => this.changeTab('data_sp2d')}
                >Data SP2D</div>
                <div 
                  className="input-value-selector-item"
                  onClick={() => this.changeTab('data_adendum')}
                >Data Adendum</div>
                <div 
                  className="input-value-selector-item"
                  onClick={this.hidePopup}
                ><b>Batal</b></div>
              </div>
            )
          }
        </div>
      </div>
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