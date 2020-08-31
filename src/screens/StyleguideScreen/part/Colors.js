import React from 'react';
import { Row, Col, Divider, Button, Typography } from 'antd';

const { Title, Text } = Typography;

function Colors(props) {
  return (
    <>
      <Divider>
        <Title level={3} keyboard>
          COLORS
        </Title>
      </Divider>
      <Row>
        <Col>
          <Button type="primary" shape="circle" style={{ background: 'red' }} />
        </Col>
        <Col>
          <Text>Primary</Text>
        </Col>
      </Row>
    </>
  );
}
export default Colors;
