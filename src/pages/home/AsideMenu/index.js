
import React from 'react';
import { Menu, Icon } from 'antd';
import routerLists from '../../../routers.js'
import {Link} from 'react-router-dom'
import "./layout.css";
const SubMenu = Menu.SubMenu;



class AsideMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {iscollapsed: false};
}

  componentDidMount() {
    console.log(this.props.status)
    // this.setState({
    //   iscollapsed: this.props.status,
    // });
  }

  render() {
    return (
      <div className="layout-app">
        <Menu
          defaultSelectedKeys={routerLists[0].children?[routerLists[0].children[0].key]:[routerLists[0].key]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.iscollapsed}
        >
          {
          routerLists.map((item,index)=>{
            if(!item.children){
              return (<Menu.Item key={item.key}>
                <Link to={item.path}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
                </Link>
              </Menu.Item>)
            }else{
              return (<SubMenu key={item.key} title={
                <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
              }>
                {
                  item.children.map((ele,nums)=>{
                    return  (<Menu.Item key={ele.key}>
                      <Link to={ele.path}>
                      <Icon type={ele.icon} />
                      <span>{ele.title}</span>
                      </Link>
                    </Menu.Item>)
                  })
                }
              </SubMenu>)
            }
          })
        }
        </Menu>
      </div>
    )
  }
}

export default AsideMenu;