import React from 'react'
import DetailNext from './DetailNext'

export default class Tambah extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      color: '',
      color_s: '',
      data: {
        title: '',
        etc: ''
      },
      show_next: false,

    }
  }
  UNSAFE_componentWillReceiveProps({type, show, data}) {
    let color;
    let color_s;
    if (type === 'program') {
      color = 'yellow';
      color_s = 'yellow-s';
    } else if (type === 'kegiatan') {
      color = 'black';
      color_s = 'black-s';
    } else if (type === 'detail') {
      color = 'white';
      color_s = 'white-s';
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
      show: false
    })
  }
  showNext = (type) => {
    if (type === 'detail') {
      this.setState({
        show_next: true
      })
    } else {

    }
  }
  hideNext = () => {
    this.setState({
      show_next: false
    })
  }
  handleKeyUp = (type) => (e) => {
    console.log(e.target.value);
    console.log(type)
  }
  render() {
    let { color, color_s, show, data, show_next } = this.state;
    let display = show === true ? 'flex' : 'none';
    let etc = data.etc === '' ? '' : `di ${data.etc}`;
    return (
      <div className="tambah-popup" style={{display: display}}>
        <div className={`tambah-box ${color}`}>
          <div className="tambah-box-title">
            <h3>Tambah {data.title}</h3>
            <small>{etc}</small>
          </div>
          <textarea 
            spellCheck="false"
            className={`tambah-box-input ${color_s}`}
            placeholder={`Tulis ${data.title}`}
            onKeyUp={() => this.handleKeyUp(this.props.type)}
          ></textarea>
        </div>
        <div className="tambah-action">
          <button 
            className={`tambah-batal ${color}`}
            onClick={this.hidePopup}
          >BATAL</button>
          <button 
            className={`tambah-simpan ${color}`}
            onClick={() => this.showNext(this.props.type)}
          >
            {this.props.type === 'detail' ? 'LANJUT' : 'SIMPAN'}
          </button>
        </div>
        <DetailNext 
          show={show_next}
          hideDetailNext={this.hideNext}
        />
      </div>
    )
  }
}