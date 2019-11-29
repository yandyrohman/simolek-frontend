import React from 'react'
import DetailNext from './DetailNext'
import Url from '../../API'

export default class Tambah extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      color: '',
      color_s: '',
      data: {
        title: '',
        etc: '',
        id_program: null, // ambil id program
        id_kegiatan: null // ambil id kegiatan
      },
      next_show: false,
      next_data: {
        input: '', // ambil inputan program, kegiatan, & detail disini
        pptk: '', // ambil pptk
        ppk: '' // ambil ppk
      }
    }
  }
  UNSAFE_componentWillReceiveProps({type, show, data}) {
    let color;
    let color_s;
    if (type === 'program') {
      color = 'dark';
      color_s = 'dark-s';
    } else if (type === 'kegiatan') {
      color = 'medium';
      color_s = 'medium-s';
    } else if (type === 'detail') {
      color = 'light';
      color_s = 'light-s';
    } else {
      color = '';
      color_s = '';
    }
    this.setState({
      color: color,
      color_s: color_s,
      show: show,
      data: data
    })
  }
  hidePopup = () => {
    this.setState({
      show: false,
      next_data: {
        input: '',
        pptk: '',
        ppk: ''
      }
    })
  }
  showNextOrSendData = (type) => {
    if (type === 'detail') {
      this.setState({
        next_show: true
      })
    } else if (type === 'kegiatan') {
      this.sendKegiatan({
        id_program: this.state.data.id_program,
        input: this.state.next_data.input
      })
    } else if (type === 'program') {
      this.sendProgram({
        input: this.state.next_data.input
      })
    }
  }
  hideNext = () => {
    this.setState({
      next_show: false,
    })
  }
  handleKeyUp = (e) => {
    this.setState({
      next_data: {
        input: e.target.value
      }
    })
  }
  changeNextData = (e) => {
    this.setState({
      next_data: {
        ...this.state.next_data,
        [e.target.name]: e.target.value
      }
    })
  }
  sendDetail = () => {
    let data = {
      id_program: this.state.data.id_program,
      id_kegiatan: this.state.data.id_kegiatan,
      input: this.state.next_data.input,
      pptk: this.state.next_data.pptk,
      ppk: this.state.next_data.ppk
    };
    let url = Url.api + 'create_sub_kegiatan';
    this.props.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.text()).then(() => {
      this.hideNext()
      this.props.hidePopup()
      this.props.getAllDatas()
    })
  }
  sendKegiatan = (data) => {
    let { id_program, input } = data;
    let url = Url.api + 'create_kegiatan';
    this.props.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_program: id_program,
        input: input
      })
    }).then(res => res.text()).then(() => {
      this.setState({
        next_data: {
          input: '',
          pptk: '',
          ppk: ''
        }
      })
      this.props.hidePopup()
      this.props.getAllDatas()
    })
  }
  sendProgram = (data) => {
    let { input } = data;
    let url = Url.api + 'create_program';
    this.props.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: input
      })
    }).then(res => res.text()).then(() => {
      this.setState({
        next_data: {
          input: '',
          pptk: '',
          ppk: ''
        }
      })
      this.props.hidePopup()
      this.props.getAllDatas()
    })
  }
  render() {
    let { color, color_s, show, data, next_show, next_data } = this.state;
    let display = show === true ? 'flex' : 'none';
    let etc = data.etc === '' ? '' : `di ${data.etc}`;
    return (
      <div className="tambah-popup" style={{display: display}} id="popup-tambah">
        <div className={`tambah-box ${color}`}>
          <div className="tambah-box-title">
            <h3>Tambah {data.title}</h3>
            <small>{etc}</small>
          </div>
          <textarea 
            spellCheck="false"
            className={`tambah-box-input ${color_s}`}
            placeholder={`Tulis ${data.title}`}
            onChange={this.handleKeyUp}
            value={this.state.next_data.input}
          ></textarea>
        </div>
        <div className="tambah-action">
          <button 
            className={`tambah-batal ${color}`}
            onClick={this.hidePopup}
          >BATAL</button>
          <button 
            className={`tambah-simpan ${color}`}
            onClick={() => this.showNextOrSendData(this.props.type)}
          >
            {this.props.type === 'detail' ? 'LANJUT' : 'SIMPAN'}
          </button>
        </div>
        <DetailNext 
          show={next_show}
          hideDetailNext={this.hideNext}
          users={this.props.users}
          data={next_data}
          changeNextData={this.changeNextData}
          sendDetail={this.sendDetail}
        />
      </div>
    )
  }
}