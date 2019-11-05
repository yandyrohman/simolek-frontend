import React from 'react'
import { StarBorder, Star } from '@material-ui/icons'

export default class RatingStar extends React.Component {
  render() {
    let color = this.props.type === 'full' ? 'green' : '#ccc';
    return (
      <React.Fragment>
        { 
          this.props.type === 'null' ? (
            <StarBorder 
              onClick={() => this.props.changeStarValue(this.props.value)}
              style={{color: color}}
            />
          ) : (
            <Star 
              onClick={() => this.props.changeStarValue(this.props.value)}
              style={{color: color}}
            />
          )
        }
      </React.Fragment>
    )
  }
}