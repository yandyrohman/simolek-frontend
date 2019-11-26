import React from 'react'
import '../../css/input_pejabat.css'
import Back from '../other/Back'
import Loading from '../other/Loading'
import SubKegiatan from './SubKegiatan'
import Bg from '../other/Bg'
import Url from '../../API'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data_kegiatan: [],
      data_pejabat: [],
      loading: false,
      data_for_update: {}
    }
  }
  putIdDetail = (id_detail) => {

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
      console.log(data)
      this.setState({
        data_kegiatan: data,
        data_pejabat: users,
      }, this.turnLoading('off'))
    })
  }
  getDataKegiatan = (callback) => {
    let user = JSON.parse(window.localStorage.getItem('user'));
    // eslint-disable-next-line
    let url = Url.api + 'get_kegiatan' + '/' + user.login.role + '/' + user.login.id;
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
    let { data_kegiatan } = this.state;
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
              <div className="input_pejabat-program">
                <div className="input_pejabat-program-title">
                  {`${indexProgram + 1} ${program.nama_program}`}
                </div>
                {
                  program.child.map((kegiatan, indexKegiatan) => (
                    <div className="input_pejabat-kegiatan">
                      <div className="input_pejabat-kegiatan-title">
                        {`${indexProgram + 1}.${indexKegiatan + 1} ${kegiatan.nama_kegiatan}`}
                      </div>
                      <div className="input_pejabat-detail">
                        {
                          kegiatan.grandchild.map((detail, indexDetail) => (
                            <SubKegiatan 
                              value={detail.nama_detail}
                              indexDetail={indexDetail}
                              indexProgram={indexProgram}
                              indexKegiatan={indexKegiatan}
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
        <div className="input_pejabat-select-pejabat">Pilih Pejabat</div>
      </div>
    )
  }
}