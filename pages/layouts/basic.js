import { Layout, Row, Col } from 'antd';

import HeaderLayout from './header';
import FooterLayout from './footer';


function BasicLayout(props) {
  return (
    <div>
      <Layout className="layout">
        <HeaderLayout />
        <Layout.Content
          style={{ paddingTop: '30px', paddingBottom: '40px', backgroundColor: "#fff" }}
        >
          <Row justify="center" type="flex">
            <Col xxl={20} md={22} xs={23}>
              {props.children}
            </Col>
          </Row>
        </Layout.Content>
        <FooterLayout />
      </Layout>
    </div>
  );
}

export default BasicLayout;
