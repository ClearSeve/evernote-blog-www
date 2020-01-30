import React, { Component } from "react";
import { Layout } from 'antd';

class FooterLayout extends Component {
  render() {
    return (
      <div>
        <Layout.Footer style={{ textAlign: 'center' }}>Copyright 2018-2020 SOFTOG. All Rights Reserved.</Layout.Footer>
      </div>
    );
  }
}

export default FooterLayout;