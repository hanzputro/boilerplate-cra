import React, { useState } from 'react';
import { Divider, Button, Radio, Space, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Buttons = (props) => {
  const [sizeButton, setSizeButton] = useState('default');

  return (
    <>
      <Divider>
        <Title level={3} keyboard>
          BUTTONS
        </Title>
      </Divider>
      <Radio.Group value={sizeButton} onChange={(e) => setSizeButton(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Space size={12}>
        <Button type="primary" size={sizeButton}>
          Primary
        </Button>
        <Button size={sizeButton}>Default</Button>
        <Button type="dashed" size={sizeButton}>
          Dashed
        </Button>
        <Button type="link" size={sizeButton}>
          Link
        </Button>
      </Space>
      <br />
      <br />
      <Space size={12}>
        <Button type="primary" icon={<DownloadOutlined />} size={sizeButton} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={sizeButton} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={sizeButton} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={sizeButton}>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={sizeButton}>
          Download
        </Button>
      </Space>
    </>
  );
};

export default Buttons;
