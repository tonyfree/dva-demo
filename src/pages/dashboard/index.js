import React from 'react'
import { connect } from 'dva'

const Dashboard = ({ dashboard }) => (
  <div>
    <p>温度：{dashboard.temperature}</p>
    <p>湿度：{dashboard.humidity}</p>
  </div>
)

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)