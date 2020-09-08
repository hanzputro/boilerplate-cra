import React, { useEffect, useState } from 'react';
import { List, Image, Skeleton } from 'antd';

const Products = ({ loading, data, page, setPage, error }) => {
  const [loadingData, setLoadingData] = useState(loading);
  // const [productData, setProductData] = useState(data);

  useEffect(() => {
    if (loadingData) setTimeout(() => setLoadingData(false), 1000);
    // setProductData(data);
  }, [loadingData]);

  // console.log(productData);

  return error ? (
    <div>{error}</div>
  ) : (
    <List
      itemLayout="horizontal"
      // loading={loading}
      dataSource={data?.data}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={loadingData} active>
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
          setLoadingData(true);
          setPage(page);
        },
        defaultCurrent: page,
        total: data?.total,
      }}
    />
  );
};

export default Products;
