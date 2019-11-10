import React from 'react'
import { KeyboardArrowDown } from '@material-ui/icons'
import ItemChild from './ItemChild'

export default class Item extends React.Component {
  showItemChild = (e) => {
    let id = e.target.id;
    if (id) {
      if (id.match(/item/)) {
        let show = document.getElementById(`${id}-list`).style.display;
        if (show === '' || show === 'none') {
          document.getElementById(`${id}-list`).style.display = 'grid';
        } else {
          document.getElementById(`${id}-list`).style.display = 'none';
        }
      }
    }
  }
  render() {
    let data = this.props.data;
    let items = data.map((item, index) => {
      let { nama_program, child } = item;
      return ( 
        <div 
          className="kegiatan-item" 
          id="kegiatan" 
          onClick={this.showItemChild} 
          key={index}
        >
          <div className="kegiatan-item-etc">{index + 1}</div>
          <div className="kegiatan-item-etc" id={`item-${index}`}>
            {nama_program}
          </div>
          <div className="kegiatan-item-etc"><KeyboardArrowDown id={`item-${index}`}/></div>
          <div className="kegiatan-child" id={`item-${index}-list`}>
            <ItemChild 
              data={child} 
              index={index}
              openDetailPopup={this.props.openDetailPopup}
            />
          </div>
       </div> 
      )
    });
    return (
      <React.Fragment>
        {items}
      </React.Fragment>
    )
  }
}