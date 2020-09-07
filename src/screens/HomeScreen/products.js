import React, { useEffect, useState, memo } from 'react';
import { List, Image, Skeleton } from 'antd';

const Products = memo(({ loading, data, page, setPage, error }) => {
  // const [loadingData, setLoadingData] = useState(loading);

  // useEffect(() => {
  //   if (loadingData) setTimeout(() => setLoadingData(loadingData), 3000);
  // }, [loadingData]);

  // console.log(loading);

  return error ? (
    <div>{error}</div>
  ) : (
    <List
      itemLayout="horizontal"
      loading={loading}
      dataSource={data?.data}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={loading} active>
            <List.Item.Meta
              avatar={
                <Image
                  width={50}
                  src={item.avatar}
                  placeholder={<Skeleton.Avatar size={40} shape="circle" active />}
                />
              }
              title={`${item.first_name} ${item.last_name}`}
              description={item.email}
            />
          </Skeleton>
        </List.Item>
      )}
      pagination={{
        onChange: (page) => {
          console.log(page);
          setPage(page);
        },
        defaultCurrent: page,
        total: data?.total,
      }}
    />
  );
});

export default Products;
