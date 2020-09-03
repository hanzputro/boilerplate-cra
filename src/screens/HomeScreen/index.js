import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Input, Select, List, Image, Skeleton, Space, Typography } from 'antd';
import { FormItem } from 'components';
import { listProducts } from 'redux/actions/productActions';

const { Title } = Typography;
const optionFilter = [
  { label: 'Newest', value: 'newest' },
  { label: 'Lowest', value: 'lowest' },
  { label: 'Highest', value: 'highest' },
];

const HomeScreen = () => {
  const [searchKeyword, setSearchKeyword] = useState(''); // setSort must have parameter sort from API
  const [sortOrder, setSortOrder] = useState(''); // setSort must have parameter sort from API
  const [pageNumber, setPageNumber] = useState(1);

  const productList = useSelector((state) => state?.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(pageNumber));
  }, [pageNumber]);

  return (
    <>
      {<h2>Status</h2>}
      <Formik
        initialValues={{
          searchKeyword: '',
          sortOrder: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 2000);
        }}
      >
        {(formikProps) => (
          <Form>
            <label>Filter</label>
            <Row gutter={[24, 24]}>
              <FormItem name="searchKeyword" span="18">
                <Input
                  name="searchKeyword"
                  placeholder="Search by name"
                  onChange={formikProps.handleChange}
                />
              </FormItem>
              <FormItem name="sortOrder" span="6">
                <Select
                  name="sortOrder"
                  defaultValue={['Newest']}
                  options={optionFilter}
                  onChange={(e) => formikProps.setFieldValue('sortOrder', e)}
                  style={{ width: '100%' }}
                />
              </FormItem>
            </Row>
          </Form>
        )}
      </Formik>
      {loading ? (
        <Space align="start" size={14} style={{ height: 400 }}>
          <Skeleton.Avatar size={40} shape="circle" active />
          <Space direction="vertical" size={14}>
            <Skeleton.Input active style={{ width: 500 }} />
            <Skeleton.Input active style={{ width: 500 }} />
          </Space>
        </Space>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <List
          itemLayout="horizontal"
          loading={loading}
          dataSource={products?.data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Image
                    width={50}
                    src={item.avatar}
                    placeholder={<Skeleton.Avatar size={40} shape="circle" active />}
                  />
                }
                title={<Title level={2}>{`${item.first_name} ${item.last_name}`.concat()}</Title>}
                description={item.email}
              />
            </List.Item>
          )}
          pagination={{
            onChange: (page) => {
              console.log(page);
              setPageNumber(page);
            },
            defaultCurrent: pageNumber,
            total: products?.total,
          }}
        />
      )}
    </>
  );
};
export default HomeScreen;
