import React from 'react'
import { KeyboardArrowRight } from '@material-ui/icons'

export default class Person extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <div 
        className="users-item" 
        onClick={() => this.props.showForm('edit', data)}
      >
        <div className="users-item-photo">
          <img 
            src="/icon/profil.png"
            alt="profile"
          />
        </div>
        <div className="users-item-name">{data.real_name}</div>
        <div className="users-item-position">{data.position}</div>
        <div className="users-item-action">
          <KeyboardArrowRight />
        </div>
      </div>
    )
  }
}