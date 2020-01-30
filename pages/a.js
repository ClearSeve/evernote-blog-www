import { Component } from "react";
import { Form, Select, Row, Col, Typography, Divider } from 'antd'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import NormalLayout from './layouts/normal';

class IndexPage extends Component {
  static async getInitialProps() {
    const res = await fetch('http://47.104.169.179:6800/api/v1/article/list', { method: 'POST' })
    const json = await res.json()
    return { list: json.list }
  }

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <NormalLayout >
          <div>1123</div>
        </NormalLayout>
      </div>
    );
  }
}


export default IndexPage
