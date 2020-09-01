import React from 'react';
import { Row, Col, Space } from 'antd';
import { Colors, Typography, Buttons, Lists, ListsOfPost, FormComponents } from './part';

function StyleguideScreen(props) {
  return (
    <Row gutter={[24, 24]}>
      <Col span="12">
        <Colors />
        <br />
        <br />
        <Buttons />
        <br />
        <br />
        <br />
        <FormComponents />
      </Col>
      <Col span="12">
        <Typography />
        <br />
        <Lists />
      </Col>
      <Col span="24">
        <ListsOfPost />
      </Col>
    </Row>
  );
}
export default StyleguideScreen;
