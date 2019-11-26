import React from 'react'
import { Done } from '@material-ui/icons'

export default class SubKegiatan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }
  selectThis = () => {
    let { selected } = this.state;
    this.setState({selected: !selected})
  }
  render() {
    let { selected } = this.state;
    let { value, indexDetail, indexKegiatan, indexProgram } = this.props;
    let style = {
      background: selected ? '#304FFE' : '#FFF',
      color: selected ? '#FFF' : '#000'
    };
    return (
      <div 
        style={style}
        className="input_pejabat-item"
        onClick={this.selectThis}
      >
        <span>
          {`${indexProgram + 1}.${indexKegiatan + 1}.${indexDetail + 1} ${value}`}
        </span>
        <div className="input_pejabat-selected">
          {selected ? <Done /> : ''}
        </div>
      </div>
    )
  }
}