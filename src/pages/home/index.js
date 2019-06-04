import React from 'react';
import "./home.css";
import AsideMenu from './AsideMenu/index'
import routerLists from '../../routers.js'
import { Route } from 'react-router-dom'
import { Layout, Icon, Button, Row, Col, Menu, Dropdown, Avatar } from 'antd';
import store from '../../reduxs/index';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../../reduxs/action'
const { Header, Sider, Content, Footer } = Layout;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  componentWillMount() {
    // console.log(store.getState())  
    const unsubscribe = store.subscribe(() => console.log(store.getState()))

    // 发起一系列 action
    // store.dispatch(addTodo('Learn about actions'))
    // store.dispatch(addTodo('Learn about reducers'))
    // store.dispatch(addTodo('Learn about store'))
    store.dispatch(toggleTodo(0))
    store.dispatch(toggleTodo(1))
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

    // 停止监听 state 更新
    unsubscribe()
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    var menu = (
      <Menu style={{ width: 100 }}>
        <Menu.Item>
          <Icon type="setting" />
          设置
        </Menu.Item>
        <Menu.Item>
          <Icon type="logout" />
          退出
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="home">
        <section className="layout-sider">
          <Sider className="siders" trigger={null} collapsible collapsed={this.state.collapsed} width='256' style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
            <div className="titleLogo">
              <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
              <h1>happy</h1>
            </div>
            <AsideMenu status={this.state.collapsed}></AsideMenu>
          </Sider>
          <Layout className="layoutClass" style={{ marginLeft: !this.state.collapsed ? 256 : 80 }}>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Row type="flex" justify="space-between" style={{ width: "100%" }}>
                <Col span={3}>
                  <Icon className="trigger" onClick={this.toggleCollapsed} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Col>
                <Col span={3}>
                  <Dropdown overlay={menu} placement="bottomLeft">
                    <div className="userName"><Avatar style={{ backgroundColor: '#87d068', marginRight: '5px' }} icon="user" />admin</div>
                  </Dropdown>
                </Col>
              </Row>
            </Header>
            <Content style={{ margin: '24px 16px', }}>
              {
                routerLists.map((item, index) => {
                  if (!item.children) {
                    if (item.exact) {
                      return <Route exact key={index.toString()} path={item.path} component={item.component}></Route>
                    } else {
                      return <Route key={index} path={item.path} component={item.component}></Route>
                    }
                  } else {
                    return <Route key={index}>
                      {
                        item.children.map((itemChild, nums) => {
                          return <Route key={nums.toString()} path={itemChild.path} component={itemChild.component}></Route>
                        })
                      }
                    </Route>
                  }
                })
              }
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </section>
      </div>
    );
  }
}

export default Home;
