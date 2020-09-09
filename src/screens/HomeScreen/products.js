import React, { useEffect, useState } from 'react';
import { List, Image, Skeleton } from 'antd';

const Products = ({ loading, data, page, setPage, error }) => {
  const [loadingData, setLoadingData] = useState(loading);

  useEffect(() => {
    if (loadingData) setTimeout(() => setLoadingData(false), 1000);
  }, [loadingData]);

  // loading can handle undefined data from products
  return loading ? (
    <Skeleton avatar title={false} loading={loadingData} row={2} active />
  ) : error ? (
    <div>{error}</div>
  ) : (
    (console.log(data),
    (
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
    ))
  );
};

export default Products;
