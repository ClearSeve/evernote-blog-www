
import React, { Component } from "react";
import { Row, Col, Typography, Divider } from 'antd';
import NormalLayout from '../layouts/normal';
import fetch from 'isomorphic-unfetch'
import Head from '../layouts/head';
import "../myconfig"

const { Paragraph, Title } = Typography;


class ArticlePage extends Component {
  static async getInitialProps({ req, query }) {
    console.log(query)
    var param = {
      aid: query.aid
    }
    const res = await fetch(myconfig.api.url + myconfig.api.articleContent, { method: 'POST', body: JSON.stringify(param), })
    const json = await res.json()
    return { info: json }
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Head title={this.props.info.title} />
        <NormalLayout >
          <Typography.Title level={2}>{this.props.info.title}</Typography.Title>
          <div dangerouslySetInnerHTML={{ __html: this.props.info.content }} />
        </NormalLayout>
      </div>

    );
  }
}

export default ArticlePage;

