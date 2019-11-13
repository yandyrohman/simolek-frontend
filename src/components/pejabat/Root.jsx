import React from 'react'
import Back from '../other/Back'
import '../../css/pejabat.css'
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
    let url = Url.api + 'get_pejabat/' + user.login.role + '/' + user.login.id;
    this.setState({loading: true})
    fetch(url).then(res => res.json()).then(res => {
      this.setState({
        datas: res,
        loading: false
      })
    });
  }
  render() {
    let user = JSON.parse(window.localStorage.getItem('user'));
    let role = user.login.role;
    let { datas, loading } = this.state;
    return (
      <div className="pejabat-root">
        <div className="pejabat-list">
          <Back 
            caption={role === 'kpa' ? 'Daftar Pejabat' : 'PPK'}
            hint={role === 'kpa' ? 'List Semua Pejabat' : 'Semua PPK dari Anda'}
          />
          {
            datas.map((item, index) => (
              <div 
                key={index}
                className="pejabat-item"
              >
                {role === 'kpa' ? item.real_name : item.ppk}
                <br />
                {role === 'kpa' ? <small>{item.position}</small> : ''}
              </div>
            ))
          }
        </div>
        <Loading loading={loading}/>
      </div>
    )
  }
}
