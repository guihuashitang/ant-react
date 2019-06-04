import React from 'react';
import { Card, Skeleton, Col, Row } from 'antd';


class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="music">
        <Row gutter={16}>
          <Col xs={32} sm={16} md={24} lg={6} xl={6}>
            <Card title="游戏" bordered={false} >
              <Skeleton loading={loading}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Skeleton>
            </Card>
          </Col>
          <Col xs={32} sm={16} md={24} lg={6} xl={6}>
            <Card title="视频" bordered={false}>
              <Skeleton loading={loading}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Skeleton>
            </Card>
          </Col>
          <Col xs={32} sm={16} md={24} lg={6} xl={6}>
            <Card title="音乐" bordered={false} >
              <Skeleton loading={loading}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Skeleton>
            </Card>
          </Col>
          <Col xs={32} sm={16} md={24} lg={6} xl={6}>
            <Card title="影视" bordered={false} >
              <Skeleton loading={loading}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Skeleton>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeIndex;
