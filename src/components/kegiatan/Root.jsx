import React from 'react'
import '../../css/kegiatan.css'
import Item from './Item'
import Search from './Search'
import Loading from '../other/Loading'
import Url from '../../API'
import Back from '../other/Back'
import Detail from './Detail'
import Bg from '../other/Bg'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      items_backup: [],
      search_filter: '',
      nama_detail: [],
      loading: false,
      detail_popup_show: false,
      detail_popup_data: []
    }
  }
  componentDidMount() {
    this.getDataKegiatan(data => {
      let items = data;
      let nama_detail = [];
      for(let i in items) {
        for(let ii in items[i].child) {
          for(let iii in items[i].child[ii].grandchild) {
            nama_detail.push({
              index_program: i,
              index_kegiatan: ii,
              index_detail: iii, 
              detail: items[i].child[ii].grandchild[iii].nama_detail
            });
          }
        }
      }
      this.setState({
        items: data,
        items_backup: data,
        nama_detail: nama_detail,
        loading: false
      })
    })
  }
  getDataKegiatan(callback) {
    let user = JSON.parse(window.localStorage.getItem('user'))
    let url = Url.api + 'get_kegiatan/' + user.login.role + '/' + user.login.id;
    this.setState({
      loading: true
    })
    fetch(url).then(res => res.json()).then(data => {
      callback(data)
    })
  }
  searchKegiatan = (e) => {
    this.resetStateItems();
    this.setState({
      search_filter: e.target.value
    })
    if (e.target.value === '') {
      document.getElementById('kegiatan-search-list').style.display = 'none';
    } else {
      document.getElementById('kegiatan-search-list').style.display = 'block';
    }
  }
  openSelectedKegiatan = (selectedItems) => {
    document.getElementById('kegiatan-search-list').style.display = 'none';
    let { 
      index_program,
      index_kegiatan,
      index_detail 
    } = selectedItems;
    let items = [
      {
        nama_program: this.state.items[index_program].nama_program,
        child: [
          {
            nama_kegiatan: this.state.items[index_program].child[index_kegiatan].nama_kegiatan,
            grandchild: [
              this.state.items[index_program].child[index_kegiatan].grandchild[index_detail]
            ]
          }
        ]
      }
    ];
    document.getElementById(`item-${index_program}-list`).style.display = 'block';
    document.getElementById(`child-${index_program}-${index_kegiatan}-list`).style.display = 'block';
    this.setState({
      items: items
    })
  }
  resetStateItems() {
    let backup = this.state.items_backup;
    this.setState({
      items: backup
    })
  }
  openDetailPopup = (data) => {
    this.setState({
      detail_popup_show: true,
      detail_popup_data: data
    })
  }
  closeDetailPopup = () => {
    this.setState({
      detail_popup_show: false,
    })
  }
  render() {
    return (
      <div className="kegiatan-root">
        <Bg />
        <Loading loading={this.state.loading}/>
        <div className="kegiatan-list">
          <Back 
            caption="Daftar Kegiatan"
            hint="Klik salah satu atau cari kegiatan"
          />
          <input 
            className="kegiatan-search"
            spellCheck="false"
            placeholder="Cari Kegiatan"
            onKeyUp={this.searchKegiatan}
          />
          <Search 
            data={this.state.nama_detail} 
            filter={this.state.search_filter}
            openSelectedKegiatan={this.openSelectedKegiatan}
          />
          <Item 
            data={this.state.items}
            openDetailPopup={this.openDetailPopup}
          />
        </div>
        <Detail 
          show={this.state.detail_popup_show}
          data={this.state.detail_popup_data}
          closeDetailPopup={this.closeDetailPopup}
        />
      </div>
    )
  }
}