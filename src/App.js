import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { Header, Main, Footer } from './components';
import './styles/index.less';

const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100%' }}>
        <Header />
        <Main className="main" />
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
