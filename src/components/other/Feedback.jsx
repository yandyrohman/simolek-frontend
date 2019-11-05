import React from 'react'
import '../../css/feedback.css'
import RatingStar from './RatingStar'

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: 0,
      input: false
    }
  }
  changeStarValue = (value) => {
    this.setState({
      star: value,
      input: true
    })
  }
  render() {
    let { show } = this.props;
    let display = show === true ? 'flex' : 'none';
    let ratings = [];
    for (let i = 0; i < 5; i++) {
      ratings.push((
        <RatingStar 
          key={i}
          changeStarValue={this.changeStarValue}
          value={i+1}
          type={i < this.state.star ? 'full' : 'null'}
        />
      ))
    }
    return (
      <div className="feedback-popup" style={{display: display}}>
        <div className="feedback-box">
          <div className="feedback-title">Beri Rating</div>
          <div className="feedback-stars">
            {ratings}
          </div>
          <textarea 
            style={
              {display: this.state.input === true ? 'block' : 'none'}
            }
            className="feedback-input"
            placeholder="Beri Masukan Untuk Aplikasi Ini"
          ></textarea>
          <div className="feedback-action">
            <div 
              className="feedback-action-no" 
              onClick={() => this.props.display()}
            >BATAL</div>
            <div className="feedback-action-yes">KIRIM</div>
          </div>
        </div>
      </div>
    )
  }
}