import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import '../../css/back.css'

export default class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <Link to={this.props.to ? this.props.to : '/menu'}>
          <ArrowBack />
        </Link>
        <div className="back-title">
          {this.props.caption}
        </div>
        <div className="back-hint">
          {this.props.hint}
        </div>
      </div>
    )
  }
}