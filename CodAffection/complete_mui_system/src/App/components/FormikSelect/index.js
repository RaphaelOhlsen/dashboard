/* eslint-disable no-unused-expressions */
import React from 'react';
import { InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core'
import { Field, ErrorMessage } from 'formik';

const MuiSelectField = ({ label, options, handleChange, value, field }) => {
  return (
    <FormControl
      // variant='filled'
      fullWidth
    >
      <InputLabel>
        {label}
      </InputLabel>
      <Select
        onChange={handleChange}
        value={value}
        {...field}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.id}>{option.title}</MenuItem>
        ))}
      </Select>
      <FormHelperText></FormHelperText>
    </FormControl>
  )
}

const FormikSelect = ({ label, options, name, handleChange, value, error }) => {

  return (
    <Field
      name={name}
      component={MuiSelectField}
      label={label}
      options={options}
      handleChange={handleChange}
      value={value}
    >
      {/* <ErrorMessage name={name} /> */}
      {!!error && <div>Teste</div>}
    </Field>
  )
}

export default FormikSelect;