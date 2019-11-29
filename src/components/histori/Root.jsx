import React, { Component } from 'react'
import '../../css/histori.css'
import Back from '../other/Back'
import Bg from '../other/Bg'
import Item from './Item'
import Url from '../../API'
import Loading from '../other/Loading'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false
    }
  }
  componentDidMount() {
    this.getHistori()
  }
  getHistori() {
    let url = Url.api + 'get_histori';
    this.turnLoading('on')
    fetch(url).then(res => res.json()).then(data => {
      this.setState({data: data.data})
      this.turnLoading('off')
    })
  }
  turnLoading = (value) => {
    this.setState({
      loading: value === 'on' ? true : false
    })
  }
  render() {
    let { data, loading } = this.state;
    return (
      <div className="histori-root">
        <Bg />
        <Loading loading={loading}/>
        <div className="histori-list">
          <Back 
            caption="Histori"
            hint="Lihat riwayat input para pejabat"
          />
          {
            data.map((item, i) => (
              <Item 
                key={i}
                data={item}
              />
            ))
          }
        </div>
      </div>
    )
  }
} 