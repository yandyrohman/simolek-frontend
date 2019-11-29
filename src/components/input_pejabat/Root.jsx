import React from 'react'
import '../../css/input_pejabat.css'
import Back from '../other/Back'
import Loading from '../other/Loading'
import SubKegiatan from './SubKegiatan'
import Bg from '../other/Bg'
import Url from '../../API'
import ListPejabat from './ListPejabat'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data_kegiatan: [],
      data_pejabat: [],
      loading: false,
      data_for_update: [],
      button_select_pejabat: false,
      show_select_pejabat: false
    }
  }
  putIdDetail = (id_detail) => {
    if (this.state.data_for_update[id_detail] === undefined) {
      this.setState({
        data_for_update: {
          ...this.state.data_for_update,
          [id_detail]: {
            id_ppk: 0,
            id_pptk: 0
          }
        } 
      })
    } else {
      let { data_for_update } = this.state;
      delete data_for_update[id_detail];
      this.setState({
        data_for_update: data_for_update
      })
    }
  }
  openSelectPejabat = () => {
    this.setState({show_select_pejabat: true})
  }
  hideSelectPejabat = () => {
    this.setState({show_select_pejabat: false})
  }
  onChangePejabat = (type) => (e) => {
    let { data_for_update } = this.state;
    let dataFinal = data_for_update;
    for (let id_detail in data_for_update) {
      dataFinal[id_detail][type] = e.target.value
    }
    this.setState({
      data_for_update: dataFinal
    })
  }
  sendPejabat = () => {
    let url = Url.api + 'input_pejabat';
    this.turnLoading('on')
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: this.state.data_for_update})
    }).then(() => {
      this.hideSelectPejabat()
      this.getAllDatas()
      this.turnLoading('off')
      this.setState({data_for_update: []})
      // window.location = '/input_pejabat'
    })
  }
  turnLoading = (value) => {
    this.setState({
      loading: value === 'on' ? true : false
    })
  }
  componentDidMount() {
    this.getAllDatas()
  }
  getAllDatas = () => {
    this.turnLoading('on')
    this.getDataKegiatan((data, users) => {
      this.setState({
        data_kegiatan: data,
        data_pejabat: users,
      }, this.turnLoading('off'))
    })
  }
  getDataKegiatan = (callback) => {
    // eslint-disable-next-line
    let url = Url.api + 'get_kegiatan_null_pejabat';
    fetch(url).then(res => res.json()).then(data => {
      this.getDataUsers(users => {
        callback(data, users)
      })
    })
  }
  getDataUsers = (callback) => {
    let url = Url.api + 'get_users';
    fetch(url).then(res => res.json()).then(data => {
      callback(data)
    })
  }
  render() {
    let { data_kegiatan, show_select_pejabat, data_pejabat } = this.state;
    let dataChanged = Object.keys(this.state.data_for_update).length;
    return (
      <div className="input_pejabat-root">
        <Bg />
        <Loading loading={this.state.loading}/>
        <div className="input_pejabat-list">
          <Back 
            to="/tambah"
            caption="Input Pejabat"
            hint="Pilih pejabat pada suatu kegiatan"
          />
          {
            data_kegiatan.map((program, indexProgram) => (
              <div 
                className="input_pejabat-program" 
                key={indexProgram}
              >
                <div className="input_pejabat-program-title">
                  {`(${program.id}) ${program.nama_program}`}
                </div>
                {
                  program.child.map((kegiatan, indexKegiatan) => (
                    <div 
                      className="input_pejabat-kegiatan"
                      key={indexKegiatan}
                    >
                      <div className="input_pejabat-kegiatan-title">
                        {`(${kegiatan.id_program}.${kegiatan.number}) ${kegiatan.nama_kegiatan}`}
                      </div>
                      <div className="input_pejabat-detail">
                        {
                          kegiatan.grandchild.map((detail, indexDetail) => (
                            <SubKegiatan 
                              key={detail.id}
                              data={detail}
                              putIdDetail={this.putIdDetail}
                            />
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
        {
          dataChanged ? (
            <div 
              className="input_pejabat-select-pejabat"
              onClick={this.openSelectPejabat}
            >Pilih Pejabat</div>
          ) : ''
        }
        <ListPejabat 
          show={show_select_pejabat}
          pejabats={data_pejabat}
          hideSelectPejabat={this.hideSelectPejabat}
          onChangePejabat={this.onChangePejabat}
          sendPejabat={this.sendPejabat}
        />
      </div>
    )
  }
}