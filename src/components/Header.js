import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Row, Col, Button } from 'antd';
import { logout } from '../redux/actions/userActions';

const { Header } = Layout;

const CHeader = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <Header className="header">
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
    </Header>
  );
};

export default CHeader;
