import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Input, Select, Typography } from 'antd';
import { FormItem } from 'components';
import { listProfiles } from 'redux/actions/profileActions';
import Profiles from './Profiles';

const { Title } = Typography;
const optionFilter = [
  { label: 'Newest', value: 'newest' },
  { label: 'Lowest', value: 'lowest' },
  { label: 'Highest', value: 'highest' },
];

const HomeScreen = () => {
  const profileList = useSelector((state) => state?.profileList);
  const { profiles, loading = true, error } = profileList;
  const dispatch = useDispatch();

  // const [searchKeyword, setSearchKeyword] = useState(''); // must have parameter search keyword from API
  // const [sortOrder, setSortOrder] = useState(''); // must have parameter sort order from API
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(listProfiles(pageNumber));
  }, [pageNumber]);

  // useRef
  // const profilesRef = useRef();
  // profilesRef.current = profiles;

  // check isArray
  // function isArray(value) {
  //   if (typeof value == 'object' && value instanceof Object && !(value instanceof Array))
  //     return value;
  // }

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
      <Profiles
        loading={loading}
        data={profiles}
        page={pageNumber}
        setPage={setPageNumber}
        error={error}
      />
    </>
  );
};
export default HomeScreen;
