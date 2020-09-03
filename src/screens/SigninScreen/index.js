import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Row, Col, Input, Button, Checkbox, Space } from 'antd';
import * as Yup from 'yup';
import { signin } from 'redux/actions/userActions';

function SigninScreen(props) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const redirect = userInfo?.token ? '/' : '/signin';

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo]);

  return (
    <Row>
      <Col span={20} offset={2}>
        <Formik
          initialValues={{
            username: 'eve.holt@reqres.in',
            password: '',
            remember: false,
          }}
          validationSchema={Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
            remember: Yup.bool(),
          })}
          onSubmit={(values, actions) => {
            // console.log(values);
            setTimeout(() => {
              dispatch(signin(values));
              actions.setSubmitting(false);
            }, 400);
          }}
        >
          {(formikProps) => (
            <Form>
              <Space direction="vertical" size={10} style={{ width: '100%' }}>
                <Col span="24">
                  <label>Username</label>
                  <Input id="username" name="username" {...formikProps.getFieldProps('username')} />
                  {formikProps.errors.username ? <div>{formikProps.errors.username}</div> : null}
                </Col>
                <Col span="24">
                  <label>Password</label>
                  <Input.Password
                    id="password"
                    name="password"
                    {...formikProps.getFieldProps('password')}
                  />
                  {formikProps.errors.password ? <div>{formikProps.errors.password}</div> : null}
                </Col>
                <Col span="24">
                  <Checkbox
                    id="remember"
                    name="remember"
                    defaultChecked={formikProps.initialValues.remember}
                    {...formikProps.getFieldProps('remember')}
                  >
                    Remember me
                  </Checkbox>
                </Col>
                <Col span="24">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Col>
              </Space>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
}
export default SigninScreen;
