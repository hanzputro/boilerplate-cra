import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Text, Link, Paragraph } = Typography;

function Typographys(props) {
  return (
    <>
      <Divider>
        <Title level={3} keyboard>
          TYPOGRAPHY
        </Title>
      </Divider>
      <Title>Header 1</Title>
      <Title level={2}>Header 2</Title>
      <Title level={3}>Header 3</Title>
      <Title level={4}>Header 4</Title>
      <Title level={5}>Header 5</Title>
      <Text>
        This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
        rhoncus magna, id sollicitudin elit pulvinar non. Mauris commodo felis sapien, a tempor arcu
        molestie sed. Vestibulum sagittis nibh tempus libero maximus, porttitor efficitur lorem
        egestas. Aliquam at sodales ante. Vivamus rhoncus feugiat porttitor.
      </Text>
      <br />
      <Link href="https://ant.design" target="_blank">
        Ant Design
      </Link>
      <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod rhoncus magna, id
        sollicitudin elit pulvinar non. Mauris commodo felis sapien, a tempor arcu molestie sed.
        Vestibulum sagittis nibh tempus libero maximus, porttitor efficitur lorem egestas. Aliquam
        at sodales ante. Vivamus rhoncus feugiat porttitor. Suspendisse potenti. Nullam dignissim
        blandit nisi, ac lacinia purus. Nulla non gravida ligula. Nulla quis tempus felis. Etiam
        fringilla sem luctus eros efficitur luctus. Nulla sit amet rhoncus risus, at aliquet ipsum.
        Nulla semper nisi mauris, non finibus dui lacinia ut. Proin laoreet magna sed cursus
        finibus. Nam venenatis sem orci, eu gravida mauris dictum vel. Vivamus euismod a est vel
        aliquam. Praesent vitae eleifend justo. Duis nec urna sit amet ex tincidunt vestibulum sed
        nec arcu. Donec non sem vel velit molestie facilisis quis et orci. Sed placerat, odio non
        efficitur luctus, nulla sem posuere lorem, consectetur consequat tortor nisi non enim.
        Aliquam rutrum odio a orci sodales interdum id non arcu. Donec porttitor venenatis
        sollicitudin. Duis imperdiet aliquet lacus, a mollis risus.
      </Paragraph>
    </>
  );
}
export default Typographys;
