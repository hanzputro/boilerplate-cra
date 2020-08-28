import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Row, Col, Button } from 'antd';

const { Footer } = Layout;

const SFooter = () => {
  return <StyledFooter>© All Right Reserved</StyledFooter>;
};

const StyledFooter = styled(Footer)`
  padding: 10px 15px;
  text-align: center;
`;

export default SFooter;
