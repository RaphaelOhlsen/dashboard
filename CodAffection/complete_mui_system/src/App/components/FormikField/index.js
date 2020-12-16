import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

const inputProps = {
  autoComplete: 'new-password',
  form: {
    autoComplete: 'off'
  }
}

const FormikField = ({name, label, type='text', required=false, ...others}) => {
  // const classes = useStyles();

  return (
    <div>
      <Field
        as={TextField}
        name={name}
        label={label}
        type={type}
        required={required}
        // variant='filled'
        helperText={<ErrorMessage name={name} />}
        inputProps={inputProps}
        {...others}
      />
    </div>
  )
}

export default FormikField;