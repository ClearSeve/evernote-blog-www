import { Component } from "react";
import { Row, Col } from 'antd'
import SidebarLayout from './sidebar';
import BasicLayout from './basic';

function NormalLayout(props) {
    return (
        <div>
            <BasicLayout>
                <Row gutter={[16, 16]}>
                    <Col span={18} >
                        {props.children}
                    </Col>
                    <Col span={6}>
                        <SidebarLayout />
                    </Col>
                </Row>
            </BasicLayout>
        </div>
    )
}

export default NormalLayout;
