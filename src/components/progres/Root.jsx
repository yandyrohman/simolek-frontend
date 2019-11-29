import React from 'react'
import Back from '../other/Back'
import '../../css/progres.css'
import Url from '../../API'
import Loading from '../other/Loading'
import Bg from '../other/Bg'

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
        <Bg />
        <div className="progres-list">
          <Back 
            caption="Progres Kegiatan"
            hint="Nilai Progres dari Semua Kegiatan"
          />
          {
            datas.map((item, index) => (
              <div key={index} className="progres-item">
                <div className="progres-text">
                  <span className="progres-text-num">
                    &nbsp;{`${item.id_program}.${item.number_kegiatan}.${item.number}`}&nbsp;
                  </span>&nbsp;
                  <span>{item.nama_detail}</span>
                </div>
                <div className="progres-percent">
                  <div className="progres-title">Fisik :&nbsp;</div>
                  <div 
                    className={`progres-value ${
                      item.persentase_fisik === 0 ? 'progres-one' :  
                      item.persentase_fisik <= 49 ? 'progres-two' :
                      item.persentase_fisik <= 99 ? 'progres-three' :
                      item.persentase_fisik === 100 ? 'progres-four' : ''
                    }`}
                  >&nbsp;{item.persentase_fisik}%&nbsp;</div>
                </div>
                <div className="progres-percent">
                  <div className="progres-title">Keuangan :&nbsp;</div>
                  <div 
                    className={`progres-value ${
                      item.persentase_keuangan === 0 ? 'progres-one' :  
                      item.persentase_keuangan <= 49 ? 'progres-two' :
                      item.persentase_keuangan <= 99 ? 'progres-three' :
                      item.persentase_keuangan === 100 ? 'progres-four' : ''
                    }`}
                  >&nbsp;{item.persentase_keuangan}%&nbsp;</div>
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