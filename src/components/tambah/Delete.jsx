import React from 'react'

export default class Delete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      id: '',
      caption: '',
      type: ''
    }
  }
  UNSAFE_componentWillReceiveProps({ show, id, caption, type }) {
    this.setState({
      show: show,
      id: id,
      caption: caption,
      type: type
    })
  }
  hideDelete = () => {
    this.props.hideDeleteParentState()
    this.setState({
      show: false
    })
  }
  render() {
    let { show, caption } = this.state;
    let display = show === true ? 'flex' : 'none';
    return (
      <div 
        style={{display: display}}
        className="tambah-delete-popup"
      >
        <div className="tambah-delete-box">
          <div className="tambah-delete-box-title">
            Anda yakin ingin menghapus <i>{caption}</i> ?
          </div>
          <div 
            className="tambah-delete-no"
            onClick={this.hideDelete}
          >BATAL</div>
          <div className="tambah-delete-yes">YA</div>
        </div>
      </div>
    )
  }
}