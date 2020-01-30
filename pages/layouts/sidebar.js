import { Row, Col, Card, Input, Typography, Calendar, Select, Radio, Tag, Link, Divider } from 'antd';
const { Paragraph, Title } = Typography;

function SidebarLayout(props) {
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card title="搜索" >
                        <Input.Search
                            placeholder="搜索内容..."
                            enterButton="搜索"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </Card>
                </Col>

                <Col span={24}>
                    <Card title="近期文章" >
                        <Paragraph>
                            <ul>
                                <li>
                                    <a href="#">Principles</a>
                                </li>
                                <li>
                                    <a href="#">Patterns</a>
                                </li>
                                <li>
                                    <a href="#">Resource Download</a>
                                </li>
                            </ul>
                        </Paragraph>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="文章归档" bodyStyle={{ padding: 0 }} >
                        <Calendar
                            fullscreen={false}
                        />
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="分类分类" >
                        <Paragraph>
                            <ul>
                                <li>
                                    <a href="#">Principles</a>
                                </li>
                                <li>
                                    <a href="#">Patterns</a>
                                </li>
                                <li>
                                    <a href="#">Resource Download</a>
                                </li>
                            </ul>
                        </Paragraph>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="文章标签" >
                        <Tag>
                            <a href="#">Link</a>
                        </Tag>
                        <Tag>
                            <a href="#">Link</a>
                        </Tag>
                        <Tag>
                            <a href="#">Link</a>
                        </Tag>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="友情链接" >
                        <Paragraph>
                            <ul>
                                <li>
                                    <a href="http://clearseve.com">ClearSeve' Blog</a>
                                </li>
                            </ul>
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default SidebarLayout;
