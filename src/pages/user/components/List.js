import React from 'react'
import { Table } from 'antd'
import styles from './List.less'
import { connect } from 'react-redux'


const List = ({dispatch, users}) => {

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: text => <img alt="avatar" width={24} src={text} />,
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      render: (text, record) => <a >{text}</a>
    }, {
      title: 'NickName',
      dataIndex: 'nickName',
      key: 'nickName',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Gender',
      dataIndex: 'isMale',
      key: 'isMale',
      render: text => (<span>{text
        ? 'Male'
        : 'Female'}</span>),
    }, {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'CreateTime',
      dataIndex: 'createTime',
      key: 'createTime',
    }, {
      title: 'Operation',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        // return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: 'Update' }, { key: '2', name: 'Delete' }]} />
        return <button onClick={e => dispatch({type:'DELETE_USER', id: record.id})}>Delete</button>
      },
    },
  ]

  return (
    <Table columns={columns} dataSource={users} />
  )
}

export default connect(({users}) => ({users}))(List)