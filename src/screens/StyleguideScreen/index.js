import React from 'react';
import { Row, Col, Space } from 'antd';
import { Colors, Typography, Buttons, Lists, ListsOfPost, FormComponents } from './part';

const StyleguideScreen = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span="12">
        <Space direction="vertical" size={24}>
          <Colors />
          <Buttons />
          <FormComponents />
        </Space>
      </Col>
      <Col span="12">
        <Space direction="vertical" size={24}>
          <Typography />
          <Lists />
        </Space>
      </Col>
      <Col span="24">
        <ListsOfPost />
      </Col>
    </Row>
  );
};

export default StyleguideScreen;
