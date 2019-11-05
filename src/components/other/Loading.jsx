import React from 'react';
import '../../css/loading.css';

export default class Loading extends React.Component {
  render() {
    let display = this.props.loading === true ? 'flex' : 'none';
    return (
      <div 
        className="loading"
        style={{display: display}}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}