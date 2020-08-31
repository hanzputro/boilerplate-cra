import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { logout } from '../redux/actions/userActions';

const { Header } = Layout;

const SHeader = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <Row justify="space-between">
        <Col>
          <h1>Boilerplate</h1>
        </Col>
        {userInfo?.token && (
          <Col>
            <Button onClick={handleLogout}>Logout</Button>
          </Col>
        )}
      </Row>
    </StyledHeader>
  );
};

const StyledHeader = styled(Header)`
  background: blue;
  h1 {
    color: white;
  }
  .auth {
    float: right;
  }
`;

export default SHeader;
