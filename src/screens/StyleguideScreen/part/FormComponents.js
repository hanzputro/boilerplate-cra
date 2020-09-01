import React, { useState } from 'react';
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
  message,
} from 'antd';
import * as Yup from 'yup';
import { signin } from '../../../redux/actions/userActions';

const { TextArea } = Input;
const { Title } = Typography;

const optionGroup = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

function FormComponents(props) {
  const [loading, setLoading] = useState(false);
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
          checkboxGroup: ['Apple', 'Pear'],
          radioGroup: 'Orange',
          select: [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }],
          switch: true,
          datepicker: '',
        }}
        // validationSchema={Yup.object({
        //   inputText: Yup.string().required('Required'),
        //   inputPassword: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
        //   checkboxGroup: Yup.bool(),
        // })}
        onSubmit={(values, actions) => {
          setLoading(true);
          console.log(values);
          setTimeout(() => {
            // dispatch(signin(values));
            // actions.setSubmitting(false);
            setLoading(false);
            message.success('Yay! Success');
          }, 2000);
        }}
      >
        {(formikProps) => (
          <Form>
            <Row gutter={[24, 24]}>
              <Col span="12">
                <label>Input Text</label>
                <Input id="inputText" onChange={formikProps.handleChange} />
                {formikProps.errors.inputText ? <div>{formikProps.errors.inputText}</div> : null}
              </Col>
              <Col span="12">
                <label>Input Password</label>
                <Input.Password id="inputPassword" onChange={formikProps.handleChange} />
                {formikProps.errors.inputPassword ? (
                  <div>{formikProps.errors.inputPassword}</div>
                ) : null}
              </Col>
              <Col span="12">
                <TextArea
                  name="textarea"
                  placeholder={formikProps.initialValues.textarea}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  onChange={formikProps.handleChange}
                />
              </Col>
              <Col span="12">
                <Checkbox.Group
                  name="checkboxGroup"
                  options={optionGroup}
                  defaultValue={formikProps.initialValues.checkboxGroup}
                  onChange={(e) => formikProps.setFieldValue('checkboxGroup', e)}
                />
              </Col>
              <Col span="12">
                <Radio.Group
                  name="radioGroup"
                  options={optionGroup}
                  defaultValue={formikProps.initialValues.radioGroup}
                  onChange={(e) => formikProps.setFieldValue('radioGroup', e)}
                />
              </Col>
              <Col span="12">
                <Switch
                  name="switch"
                  checkedChildren="True"
                  unCheckedChildren="False"
                  defaultChecked={formikProps.initialValues.switch}
                  onChange={(e) => formikProps.setFieldValue('switch', e)}
                />
              </Col>
              <Col span="12">
                <Select
                  name="select"
                  defaultValue={['gold']}
                  options={formikProps.initialValues.select}
                  onChange={(e) => formikProps.setFieldValue('select', e)}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col span="12">
                <DatePicker
                  name="datepicker"
                  showTime
                  onOk={(e) => formikProps.setFieldValue('datepicker', e)}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col span="24">
                <Button type="primary" htmlType="submit" loading={loading}>
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
