import React from 'react'
import { Button } from 'antd'

class Filter extends React.Component {

  constructor (props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
   this.props.searchHandler(this.textInput)
  }

  render () {
    return (
      <p>
        <input
          placeholder="input search text"
          value={this.props.name}
          ref={(input) => { this.textInput = input }}
          style={{ width: 200 }}
        />
        <Button type="primary" onClick={this.clickHandler}>查询</Button>
      </p>
    )
  }
}

export default Filter