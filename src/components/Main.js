import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Routes, PrivateRoutes } from '../routes';

const { Content } = Layout;

const SMain = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const PrivateRoute = ({ isLoggedIn }) =>
    isLoggedIn ? (
      PrivateRoutes?.map((route, idx) => {
        return (
          <Route
            key={idx}
            path={route.path}
            component={route.component}
            exact={!!route.exact && true}
          />
        );
      })
    ) : (
      <Redirect to="/signin" />
    );

  return (
    <StyledMain>
      <Switch>
        {Routes?.map((route, idx) => {
          return (
            <Route
              key={idx}
              path={route.path}
              component={route.component}
              exact={!!route.exact && true}
            />
          );
        })}
        <PrivateRoute isLoggedIn={!!userInfo} />
      </Switch>
    </StyledMain>
  );
};

const StyledMain = styled(Content)`
  background: white;
  padding: 20px;
`;

export default SMain;
