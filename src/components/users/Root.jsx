import React from 'react'
import Back from '../other/Back'
import '../../css/users.css'
import Person from './Person'
import Url from '../../API'
import { Add } from '@material-ui/icons'
import Loading from '../other/Loading'
import Form from './Form'
import Delete from './Delete'
import Bg from '../other/Bg'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false,
      form_show: false,
      form_data: [],
      form_type: 'add', // add | edit
      form_warning: '',
      delete_show: false,
      delete_id: null
    }
  }
  componentDidMount() {
    this.getDataUsers()
  }
  getDataUsers() {
    let url = Url.api + 'get_users';
    this.setState({
      loading: true
    })
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        data: data,
        loading: false
      })
    })
  }
  showForm = (type, data = {
    // isi default untuk tambah data
      real_name: '',
      name: '',
      password: '',
      email: '',
      role: '',
      position: '',
      telepon: '',
      alamat: ''
    }) => {
    this.setState({
      form_show: true,
      form_type: type,
      form_data: data
    })
    console.log('* HIRAUKAN ERROR NYA!! *')
  }
  hideForm = () => {
    this.setState({
      form_show: false
    })
  }
  changeForm = (e) => {
    this.setState({
      form_data: {
        ...this.state.form_data,
        [e.target.name]: e.target.value
      }
    })
  }
  checkUsernameAvailability(value, callback) {
    let url = Url.api + 'check_user';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: value})
    }).then(res => res.json()).then(res => {
      callback(res.available)
    })
  }
  isFormFilled() {
    let { form_data:data } = this.state;
    if (
      data.real_name &&
      data.name &&
      data.password &&
      data.email &&
      data.role &&
      data.position &&
      data.telepon &&
      data.alamat
    ) {
      return true
    } else {
      return false
    }
  } 
  sendForm = () => {
    let { form_data:data } = this.state;
    let url = Url.api + 'send_user';
    this.setState({loading: true})
    this.checkUsernameAvailability(data.name, isAvailable => {
      if (isAvailable) {
        if (this.isFormFilled()) {
          fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res => res.json()).then(() => {
            this.hideForm()
            this.getDataUsers()
            this.setState({
              loading: false,
              form_warning: ''
            })
          })
        } else {
          this.setState({
            loading: false,
            form_warning: 'Isi Semua Inputan!'
          })
        }
      } else {
        this.setState({
          loading: false,
          form_warning: 'Username Tidak Tersedia!'
        })
      }
    })
  }
  updateForm = (id) => {
    let { form_data:data } = this.state;
    let url = Url.api + 'update_user';
    this.setState({loading: true})
    if (this.isFormFilled()) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id ,...data})
      }).then(res => res.json()).then(() => {
        this.hideForm()
        this.getDataUsers()
        this.setState({
          loading: false,
          form_warning: ''
        })
      })
    } else {
      this.setState({
        loading: false,
        form_warning: 'Isi Semua Inputan!'
      })
    }
  }
  showDelete = (id) => {
    this.setState({
      delete_show: true,
      delete_id: id
    })
  }
  hideDelete = () => {
    this.setState({
      delete_show: false
    })
  }
  deleteUser = (id) => {
    let url = Url.api + 'delete_user';
    this.setState({loading: true})
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id})
    }).then(res => res.text()).then(() => {
      this.hideDelete()
      this.hideForm()
      this.getDataUsers()
      this.setState({loading: false})
    })
  }
  render() {
    let { 
      data, 
      loading,
      form_show,
      form_data,
      form_type,
      form_warning,
      delete_show,
      delete_id
    } = this.state;
    let users = data.map(item => (
      <Person 
        key={item.id}
        data={item}
        showForm={this.showForm}
      />
    ));
    return (
      <div className="users-root">
        <Bg />
        <div className="users-list">
          <Back 
            caption="Kelola Pengguna"
            hint="Edit, Tambah, atau Hapus Pengguna"
          />
          {users}
        </div>
        <div className="users-add" onClick={() => this.showForm('add')}>
          <Add />
        </div>
        <Form 
          show={form_show}
          data={form_data}
          type={form_type}
          warning={form_warning}
          hideForm={this.hideForm}
          changeForm={this.changeForm}
          sendForm={this.sendForm}
          updateForm={this.updateForm}
          showDelete={this.showDelete}
        />
        <Delete 
          id={delete_id}
          show={delete_show}
          hideDelete={this.hideDelete}
          deleteUser={this.deleteUser}
        />
        <Loading loading={loading}/>
      </div>
    )
  }
}