import { Component } from "react";
import { Col, Typography, Divider } from 'antd'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import NormalLayout from './layouts/normal'
import Head from './layouts/head'
import "./myconfig"

class IndexPage extends Component {
  static async getInitialProps() {
    const res = await fetch(myconfig.api.url + myconfig.api.articleList, { method: 'POST' })
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
        <Head />
        <NormalLayout >
          {list}
        </NormalLayout>
      </div>
    );
  }
}


export default IndexPage
