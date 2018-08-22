import React from 'react'
import List from './components/List'
import Filter from './components/Filter'
import UsersService from './services/users'
import UserService from './services/user'

class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      usersData: []
    }
  }

  componentDidMount () {
    this.getUsers()
  }
  
  getUsers (params, callback) {
    UsersService.query(params).then(res => {
      this.setState({
        usersData: res.data.data
      })
      callback && callback()
    })
  }

  searchHandler = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      name: e.value
    }))
    this.getUsers({name: e.value}, () => {
      e.value = ''
      this.setState((prevState) => ({
        ...prevState,
        name: ''
      }))
    })
  }

  deleteHandler = (record, e) => {
    UserService.remove({id: record.id}).then(res => {
      this.getUsers()
    })
  }

  render () {
    return (
      <div>
        <Filter searchHandler={this.searchHandler}/>
        <List data={this.state.usersData} deleteHandler={this.deleteHandler}/>   
      </div>
    )
  }
}

export default User