import React, { Component } from "react";
import { Layout, Menu } from 'antd';
import Link from 'next/link'
import stylesheet from './header.css';

class HeaderLayout extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Layout.Header className={'Header'}>
          < Menu theme="light"
            mode="horizontal"
            defaultSelectedKeys={['index']}
            className={'Menu'}
          >
            <Menu.Item key="index" ><Link href="/"><a>首页</a></Link></Menu.Item>
            <Menu.Item key="gallery" disabled="true" ><Link href="/gallery"><a>画廊</a></Link></Menu.Item>
            <Menu.Item key="archiv" disabled="true" ><Link href="/archiv"><a>归档</a></Link></Menu.Item>
            <Menu.Item key="about" disabled="true"><Link href="/about"><a>关于</a></Link></Menu.Item>
          </Menu>
        </Layout.Header>
      </div>);
  }
}

export default HeaderLayout;