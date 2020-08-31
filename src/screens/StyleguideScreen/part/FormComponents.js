import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  Divider,
  Row,
  Col,
  Input,
  Button,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  Typography,
} from 'antd';
import * as Yup from 'yup';
import { signin } from '../../../redux/actions/userActions';

const { TextArea } = Input;
const { Title } = Typography;

function FormComponents(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Divider>
        <Title level={3} keyboard>
          FORM COMPONENTS
        </Title>
      </Divider>
      <Formik
        initialValues={{
          inputText: 'eve.holt@reqres.in',
          inputPassword: '',
          textarea: 'Fill your description',
          checkboxGroup: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
          ],
          radioGroup: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
          ],
          select: [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }],
          cascader: [],
          switch: true,
          datepicker: '',
        }}
        // validationSchema={Yup.object({
        //   inputText: Yup.string().required('Required'),
        //   inputPassword: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
        //   checkboxGroup: Yup.bool(),
        // })}
        onSubmit={(values, actions) => {
          console.log(values);
          // setTimeout(() => {
          //   dispatch(signin(values));
          //   actions.setSubmitting(false);
          // }, 400);
        }}
      >
        {(formikProps) => (
          <Form>
            <Row gutter={[24, 24]}>
              <Col span="12">
                <label>Input Text</label>
                <Input
                  id="inputText"
                  name="inputText"
                  {...formikProps.getFieldProps('inputText')}
                />
                {formikProps.errors.inputText ? <div>{formikProps.errors.inputText}</div> : null}
              </Col>
              <Col span="12">
                <label>Input Password</label>
                <Input.Password
                  id="inputPassword"
                  name="inputPassword"
                  {...formikProps.getFieldProps('inputPassword')}
                />
                {formikProps.errors.inputPassword ? (
                  <div>{formikProps.errors.inputPassword}</div>
                ) : null}
              </Col>
              <Col span="12">
                <TextArea
                  name="textarea"
                  placeholder={formikProps.initialValues.textarea}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  {...formikProps.getFieldProps('textarea')}
                />
              </Col>
              <Col span="12">
                <Checkbox.Group
                  name="checkboxGroup"
                  options={formikProps.initialValues.checkboxGroup}
                  defaultValue={['Apple']}
                  // {...formikProps.getFieldProps('checkboxGroup')}
                />
              </Col>
              <Col span="12">
                <Radio.Group
                  name="radioGroup"
                  options={formikProps.initialValues.radioGroup}
                  defaultValue={'Pear'}
                  // {...formikProps.getFieldProps('radioGroup')}
                />
              </Col>
              <Col span="12">
                <Select
                  name="select"
                  defaultValue={['gold']}
                  style={{ width: '100%' }}
                  options={formikProps.initialValues.select}
                  // {...formikProps.getFieldProps('select')}
                />
              </Col>
              <Col span="12">
                {/* {...formikProps.getFieldProps('switch')} */}
                <Switch defaultChecked />
              </Col>
              <Col span="12">
                {/* {...formikProps.getFieldProps('datepicker')} */}
                <DatePicker showTime />
              </Col>
              <Col span="24">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default FormComponents;
