import React from 'react'
import { Done } from '@material-ui/icons'

export default class SubKegiatan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }
  selectThis = (id_detail) => {
    let { selected } = this.state;
    this.setState({selected: !selected})
    this.props.putIdDetail(id_detail)
  }
  render() {
    let { selected } = this.state;
    let { data } = this.props;
    let style = {
      background: selected ? '#304FFE' : '#FFF',
      color: selected ? '#FFF' : '#000'
    };
    return (
      <div 
        style={style}
        className="input_pejabat-item"
        onClick={() => this.selectThis(data.id)}
      >
        <span>
          {`(${data.id_program}.${data.number_kegiatan}.${data.number}) ${data.nama_detail}`}
        </span>
        <div className="input_pejabat-selected">
          {selected ? <Done /> : ''}
        </div>
      </div>
    )
  }
}