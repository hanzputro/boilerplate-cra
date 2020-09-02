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
import { FormItem } from '../../../components';
// import { signin } from '../../../redux/actions/userActions';

const { TextArea } = Input;
const { Title, Text } = Typography;

const optionGroup = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const optionsSelect = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function FormComponents(props) {
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();

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
          inputTextarea: '',
          checkboxGroup: [],
          radioGroup: 'Orange',
          select: [],
          switch: true,
          datepicker: '',
        }}
        validationSchema={Yup.object({
          inputText: Yup.string().required('Required'),
          inputPassword: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
          inputTextarea: Yup.string().required('Fill your description'),
          checkboxGroup: Yup.string().required('Required'),
          radioGroup: Yup.string(),
          select: Yup.string().required('Choose the selection'),
          switch: Yup.bool(),
          datepicker: Yup.date().required('Required'),
        })}
        onSubmit={(values, actions) => {
          setLoading(true);
          console.log(values);
          setTimeout(() => {
            // dispatch(signin(values));
            actions.setSubmitting(false);
            setLoading(false);
            message.success('Yay! Success');
          }, 2000);
        }}
      >
        {(formikProps) => (
          <Form>
            <Row gutter={[24, 24]}>
              {/* <Col span="12">
                <label>Input Text</label>
                <Input
                  id="inputText"
                  defaultValue={formikProps.initialValues.inputText}
                  onChange={formikProps.handleChange}
                />
                {formikProps.errors.inputText ? (
                  <Text type="danger" style={{ fontSize: '12px' }}>
                    {formikProps.errors.inputText}
                  </Text>
                ) : null}
              </Col> */}
              <FormItem label="Input Text" name="inputText" span={12} required>
                <Input
                  name="inputText"
                  defaultValue={formikProps.initialValues.inputText}
                  onChange={formikProps.handleChange}
                />
              </FormItem>

              <FormItem label="Input Password" name="inputPassword" span={12} required>
                <Input.Password
                  name="inputPassword"
                  defaultValue={formikProps.initialValues.inputPassword}
                  onChange={formikProps.handleChange}
                />
              </FormItem>

              <FormItem label="Textarea" name="inputTextarea" span={12} required>
                <TextArea
                  name="inputTextarea"
                  placeholder={formikProps.initialValues.inputTextarea}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  onChange={formikProps.handleChange}
                />
              </FormItem>

              <FormItem name="checkboxGroup" span={12} required>
                <Checkbox.Group
                  name="checkboxGroup"
                  options={optionGroup}
                  defaultValue={formikProps.initialValues.checkboxGroup}
                  onChange={(e) => formikProps.setFieldValue('checkboxGroup', e)}
                />
              </FormItem>

              <FormItem name="checkboxGroup" span={12}>
                <Radio.Group
                  name="radioGroup"
                  options={optionGroup}
                  defaultValue={formikProps.initialValues.radioGroup}
                  onChange={(e) => formikProps.setFieldValue('radioGroup', e)}
                />
              </FormItem>

              <FormItem name="switch" span={12}>
                <Switch
                  name="switch"
                  checkedChildren="True"
                  unCheckedChildren="False"
                  defaultChecked={formikProps.initialValues.switch}
                  onChange={(e) => formikProps.setFieldValue('switch', e)}
                />
              </FormItem>

              <FormItem label="Select" name="select" span={12} required>
                <Select
                  name="select"
                  defaultValue={formikProps.initialValues.select}
                  options={optionsSelect}
                  onChange={(e) => formikProps.setFieldValue('select', e)}
                  style={{ width: '100%' }}
                />
              </FormItem>

              <FormItem label="Datepicker" name="datepicker" span={12} required>
                <DatePicker
                  name="datepicker"
                  showTime
                  onOk={(e) => formikProps.setFieldValue('datepicker', e)}
                  style={{ width: '100%' }}
                />
              </FormItem>

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
