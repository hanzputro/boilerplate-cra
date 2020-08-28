import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { SHeader, SMain, SFooter } from './components';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SHeader />
        <SMain />
        <SFooter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
