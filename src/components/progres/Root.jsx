import React from 'react'
import Back from '../other/Back'
import '../../css/progres.css'
import Url from '../../API'
import Loading from '../other/Loading'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
      loading: false
    }
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    let user = JSON.parse(window.localStorage.getItem('user'))
    let url = Url.api + 'get_detail_only/' + user.login.role + '/' + user.login.id;
    this.setState({loading: true})
    fetch(url).then(res => res.json()).then(res => {
      this.setState({
        datas: res,
        loading: false
      })
    });
  }
  render() {
    let { datas, loading } = this.state;
    return (
      <div className="progres-root">
        <div className="progres-list">
          <Back 
            caption="Progres Kegiatan"
            hint="Nilai Progres dari Semua Kegiatan"
          />
          {
            datas.map((item, index) => (
              <div key={index} className="progres-item">
                <span>{item.nama_detail}</span>
                <div className="progres-percent">
                  <div className="progres-title">Fisik</div>
                  <div className="progres-value">{item.persentase_fisik}%</div>
                </div>
                <div className="progres-percent">
                  <div className="progres-title">Keuangan</div>
                  <div className="progres-value">{item.persentase_keuangan}%</div>
                </div>
              </div>
            ))
          }
        </div>
        <Loading loading={loading}/>
      </div>
    )
  }
}