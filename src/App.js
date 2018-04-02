import React, { Component } from 'react';
import './App.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import { Dropdown, Button, Icon, message } from 'antd';
import { Spin } from 'antd';
const { Header, Content, Footer } = Layout;



function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">USD</Menu.Item>
    <Menu.Item key="2">EUR</Menu.Item>
    <Menu.Item key="3">GBP</Menu.Item>
  </Menu>
);

class App extends Component {
  state = {
    USD: null
  };
  async componentDidMount() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await response.json();
    this.setState({ USD: data.bpi.USD });
  }
 
  render() {
    return (
      <div>

       <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px', float:'right' }}
      >
        <Menu.Item key="1">New Recipe</Menu.Item>
        <Menu.Item key="2">Home</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
        <Menu.Item key="3">Contact US</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
      <p style={{fontSize: '40px', color:'black', textAlign:'center'}}>Online Bitcoin Checker</p>
      
      <div style={{fontSize:'30px',color:'green' ,textAlign:'center'}}>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      USD
    </Dropdown.Button>
      <div style={{paddingTop:10}}>Rate is Today : {this.state.USD ? this.state.USD.rate : 'loading...'} USD</div>
      </div>
      
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>



      </div>
    );
  }
}

export default App;
