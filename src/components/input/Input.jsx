import React from 'react'

export default class DetailNext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      caption: ''
    }
  }
  UNSAFE_componentWillReceiveProps({show, caption}) {
    this.setState({
      show: show,
      caption: caption
    })
  }
  hidePopup = () => {
    this.setState({
      show: false
    })
  }
  render() {
    let { show, caption } = this.state;
    let display = show === true ? 'flex' : 'none';
    return (
      <div className="input-value-popup" style={{display: display}}>
        <div className="input-value-box">
          <h3 className="input-value-title">{`Input Kegiatan ${caption}`}</h3>
          <div className="input-value-group">
            <label>Label</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="placeholder"
              spellCheck="false"
            />
          </div>
          <div className="input-value-group">
            <label>Label</label>
            <select className="input-value-input">
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
              <option>Item 4</option>
              <option>Item 5</option>
            </select>
          </div>
          <div className="input-value-group">
            <label>Label</label>
            <input 
              className="input-value-input"
              type="text"
              placeholder="placeholder"
              spellCheck="false"
            />
          </div>
          <div className="input-value-action">
            <div className="input-value-no" onClick={this.hidePopup}>BATAL</div>
            <div className="input-value-yes">SIMPAN</div>
          </div>
        </div>
      </div>
    )
  }
}