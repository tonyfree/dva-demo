import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Login, User} from '../pages'
import { Layout, Button } from 'antd'
import './App.css';

const {Header, Content, Footer, Sider } = Layout

const App = () => (
  <Router>
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
