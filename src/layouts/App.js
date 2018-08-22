import React from 'react';
import { Link } from 'react-router-dom'
import { Router, Route } from 'dva/router'
import { Login, User } from '~pages'
import { MyLayout } from '~components'
import { Layout, Button } from 'antd'
import './app.less';

const { Content, Footer, Sider } = Layout
const { Header } = MyLayout

const App = ({history}) => (
  <Router history={history}>
    <Layout>
      <Sider>
        Sider
        <Button type="primary">Primary</Button>
      </Sider>
      <Layout>
        <Header>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
        </Header>
        <Content>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/user" component={User}/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>  
  </Router>
)

export default App;
