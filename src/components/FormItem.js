import React from 'react';
import { Field, useField } from 'formik';
import { Col, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const FormItem = (props) => {
  const [field, meta] = useField(props);

  return (
    <Col span={!!props.span && props.span}>
      {!!props.label && <SLabel>{props.label}</SLabel>}
      {props.children}
      {!!props.required && meta.error ? (
        <SText type="danger" style={{ fontSize: '12px' }}>
          {meta.error}
        </SText>
      ) : null}
    </Col>
  );
};

const SLabel = styled.label`
  display: inline-block;
  margin: 0 0 8px 0;
`;

const SText = styled(Text)`
  font-size: 12px;
`;

export default FormItem;
