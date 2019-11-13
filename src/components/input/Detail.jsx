import React from 'react'
import { TouchApp } from '@material-ui/icons'

export default class Detail extends React.Component {
  render() {
    let { data, index } = this.props;
    let details;
    if (data.length !== 0) {
      details = data.map((x, i) => {
        return (
          <React.Fragment key={i}>
            <div 
              className="input-detail"
              onClick={() => this.props.openInput(x)}
            >
              <b>{i+1}.</b>&nbsp;
              <span>{x.nama_detail}</span>
              <div 
                className="input-detail-delete"
              >
                <TouchApp style={{color: '#888'}}/>
              </div>
            </div>
          </React.Fragment>
        )
      });
    } else {
      details = (
        <div className="input-detail-none">
          Kegiatan {index} tidak ada sub kegiatan..
        </div>
      );
    }
    return (
      <React.Fragment>
        {details}
      </React.Fragment>
    )
  }
}