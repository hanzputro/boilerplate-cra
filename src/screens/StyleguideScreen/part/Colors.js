import React from 'react';
import { Row, Col, Divider, Button, Typography, Space } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

function Colors(props) {
  return (
    <>
      <Divider>
        <Title level={3} keyboard>
          COLORS
        </Title>
      </Divider>
      <Row align="start" gutter={[14, 14]}>
        <Col>
          <SButton size="large" style={{ background: 'var(--primary-color)' }}>
            Primary
          </SButton>
        </Col>
        <Col>
          <SButton size="large" style={{ background: 'var(--info-color)' }}>
            Info
          </SButton>
        </Col>
        <Col>
          <SButton size="large" style={{ background: 'var(--success-color)' }}>
            Success
          </SButton>
        </Col>
        <Col>
          <SButton size="large" style={{ background: 'var(--processing-color)' }}>
            Processing
          </SButton>
        </Col>
        <Col>
          <SButton size="large" style={{ background: 'var(--error-color)' }}>
            Error
          </SButton>
        </Col>
        <Col>
          <SButton size="large" style={{ background: 'var(--highlight-color)' }}>
            Highlight
          </SButton>
        </Col>
        <Col>
          <SButton size="large" style={{ background: 'var(--warning-color)' }}>
            Warning
          </SButton>
        </Col>
        <Col>
          <SButton size="large" style={{ background: 'var(--normal-color)' }}>
            Normal
          </SButton>
        </Col>
      </Row>
    </>
  );
}

const SButton = styled(Button)`
  color: white !important;
  border: 0 !important;
  :hover,
  :active,
  :focus {
    border: 0 !important;
    background: transparent;
  }
`;

export default Colors;
