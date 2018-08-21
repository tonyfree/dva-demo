import React from 'react'
import { Input, Button } from 'antd'

const Search = Input.Search

const Filter = (props) => {
  return (
    <Search
      placeholder="input search text"
      onSearch={value => props.searchHandler(value)}
      style={{ width: 200 }}
    />
  )
}

export default Filter