import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Input, Select, Typography } from 'antd';
import { FormItem } from 'components';
import { listProducts } from 'redux/actions/productActions';
import Products from './products';

const { Title } = Typography;
const optionFilter = [
  { label: 'Newest', value: 'newest' },
  { label: 'Lowest', value: 'lowest' },
  { label: 'Highest', value: 'highest' },
];

const HomeScreen = () => {
  const productList = useSelector((state) => state?.productList);
  const { products, loading = true, error } = productList;
  const dispatch = useDispatch();

  // const [searchKeyword, setSearchKeyword] = useState(''); // setSort must have parameter sort from API
  // const [sortOrder, setSortOrder] = useState(''); // setSort must have parameter sort from API
  const [productData, setProductData] = useState(products);
  const [pageNumber, setPageNumber] = useState(1);

  // function usePrevious(value) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });
  //   return ref.current;
  // }

  useEffect(() => {
    dispatch(listProducts(pageNumber));
    // if (productRef.current) return console.log(productRef.current);
  }, [pageNumber]);

  // function checkObj(value) {
  //   if (typeof value == 'object' && value instanceof Object && !(value instanceof Array))
  //     return value;
  // }

  // console.log(checkObj(products));

  return (
    <>
      {<Title level={2}>Status</Title>}
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
      <Products
        loading={loading}
        data={products}
        page={pageNumber}
        setPage={setPageNumber}
        error={error}
      />
    </>
  );
};
export default HomeScreen;
