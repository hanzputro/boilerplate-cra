import React, { useEffect, useState, useMemo } from 'react';
import { List, Skeleton, Avatar } from 'antd';

const Profiles = ({ loading, data, page, setPage, error }) => {
  // loading = for waiting data props
  // loadingSkeleton = for set loading skeleton component
  const [loadingSkeleton, setLoadingSkeleton] = useState(loading);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    loadingSkeleton ? setTimeout(() => setLoadingSkeleton(false), 1000) : setProfiles(data);
  }, [loadingSkeleton, data]);

  // another option to make useMemo
  // const dataMemo = useMemo(() => {
  //   return { loading: loading, loadingSkeleton: loadingSkeleton, profiles: profiles };
  // }, [loading, loadingSkeleton, profiles]);

  // useMemo data must from useState, useMemo can handle undefined and duplicate data
  const profilesMemo = useMemo(() => {
    return (
      // console.log(profiles),
      // loading can handle unrender undefined/[] data from profiles data
      loading ? (
        <Skeleton avatar title={false} loading={loadingSkeleton} row={2} active />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={data?.data}
          renderItem={(item) => (
            <List.Item>
              <Skeleton avatar title={false} loading={loadingSkeleton} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={`${item.first_name} ${item.last_name}`}
                  description={item.email}
                />
              </Skeleton>
            </List.Item>
          )}
          pagination={{
            onChange: (page) => {
              // console.log(page);
              setLoadingSkeleton(true);
              setPage(page);
            },
            defaultCurrent: page,
            total: data?.total,
          }}
        />
      )
    );
  }, [loading, loadingSkeleton, profiles]);

  return profilesMemo;
};

export default Profiles;
