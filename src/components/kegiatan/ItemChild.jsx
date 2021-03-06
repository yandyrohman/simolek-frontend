import React from 'react'
import { KeyboardArrowDown } from '@material-ui/icons'
import ItemGrandChild from './ItemGrandchild'

export default class ItemChild extends React.Component {
  showItemGrandChild = (e) => {
    let id = e.target.id;
    if (id) {
      if (id.match(/child/)) {
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
    let parentIndex = this.props.index;
    let idProgram = this.props.idProgram;
    let itemChilds = data.map((child, index) => {
      let { nama_kegiatan, grandchild } = child;
      return (
        <div className="kegiatan-child-item" onClick={this.showItemGrandChild} key={index}>
          <div className="kegiatan-child-item-etc" id={`child-${parentIndex}-${index}`}>
            <span className="kegiatan-child-num" id={`child-${parentIndex}-${index}`}>
              &nbsp;{`${idProgram}.${child.number}`}&nbsp;
            </span>&nbsp;
            <span id={`child-${parentIndex}-${index}`}>{nama_kegiatan}</span>
          </div>
          <div className="kegiatan-child-item-etc">
            <KeyboardArrowDown id={`child-${parentIndex}-${index}`} />
          </div>
          <div className="kegiatan-grandchild" id={`child-${parentIndex}-${index}-list`}>
            <ItemGrandChild 
              data={grandchild}
              openDetailPopup={this.props.openDetailPopup}
              idProgram={idProgram}
              numberKegiatan={child.number}
            />
          </div>
        </div>
      )
    });
    return (
      <React.Fragment>
        {itemChilds}
      </React.Fragment>
    )
  }
}