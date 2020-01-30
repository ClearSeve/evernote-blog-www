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
    let list = this.props.list.map((item, i) => (
      <Col md={24} key={i}>
        <div>
          <Link href={"/article/[aid]"} as={"/article/" + item.aid} >
            <a><Typography.Title level={2}>{item.title}</Typography.Title></a>
          </Link>

          <div dangerouslySetInnerHTML={{ __html: item.content }} />
          <div>
            发布时间：{item.createDate}
            <Divider type="vertical" />
            更新时间：{item.updateDate}
            <Divider type="vertical" />
            分类：{item.classify.name}
          </div>
          <Divider />

        </div>
      </Col>
    ));

    return (
      <div>
        <NormalLayout >
          {list}
        </NormalLayout>
      </div>
    );
  }
}


export default IndexPage
