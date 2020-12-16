import { useState } from 'react';

import { Radio, Grid, FormControl, FormControlLabel, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useForm } from 'react-hook-form';

import RhfSelect from '../../components/Hooks/Select';
import RhfInput from '../../components/Hooks/Input';
import RhfRadioGroup from '../../components/Hooks/RadioGroup';
import RhfButton from '../../components/Hooks/Button';
import RhfDatePicker from '../../components/Hooks/DatePicker';
import RfhCheckBox from '../../components/Hooks/CheckBox';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import * as employeeService from '../../services/employeeService';

const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .matches(regexMail, "Should be a valid email"),
  departmentId: yup
    .string()
    .required("You need to select an option"),
  mobile: yup
    .string()
    .required("Mobile is a required field"),
  city: yup
    .string()
    .required("City is a required field")
})

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  },
  formControl: {
    marginBottom: 6,
  }
}));

const defaultValues = {
  // isPermanent: false,
  hireDate: new Date(),

}

const options = ["Male", "Female"];
const profesionalPositon = employeeService.getDepartmentCollection();


export default function EmployeeForm() {
  const classes = useStyles();

  const { register, handleSubmit, control, errors } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const [value, setValue] = useState("Male");

  const [isPermanent, setIsPermanent] = useState(false);

  const handleChange = (ev) => setValue(ev.target.value);

  const handleCheckBox = () => {
    setIsPermanent(!isPermanent);
  }

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
    >
      <Grid container>
        <Grid item xs={6}>
          <RhfInput
            ref={register}
            name="fullName"
            label='Full Name'
            error={!!errors.fullName}
            helperText={errors?.fullName?.message}
          />
          <RhfInput
            ref={register}
            name='email'
            label='Email'
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <RhfInput
            ref={register}
            name='mobile'
            label='Moblie'
            placeholder="(DD) NNNNN-NNNN"
            mask
            error={!!errors.mobile}
            helperText={errors?.mobile?.message}
          />
          <RhfInput 
            ref={register} 
            name='city' 
            label='City' 
            error={!!errors.city}
            helperText={errors?.city?.message}
          />

        </Grid>
        <Grid item xs={6}>
          <FormControl
            className={classes.formControl}
            component="fieldset"
          >
            <RhfRadioGroup
              control={control}
              value={value}
              name="gender"
              label="Gender"
              row
              onChange={handleChange}
            >
              {options.map((option, index) => (
                <FormControlLabel
                  key={`option-${index}`}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RhfRadioGroup>

          </FormControl>
          <RhfSelect
            variant="outlined"
            name="departmentId"
            label="Department"
            control={control}
            defaultValue=""
            error={!!errors.departmentId}
            selectError={!!errors.departmentId}

            helperText={errors?.departmentId?.message}
          >
            {profesionalPositon.map((option, index) => (
              <MenuItem key={index} value={option.id}>{option.title}</MenuItem>
            ))}
          </RhfSelect>
          <RhfDatePicker
            name='hireDate'
            label='Hire Date'
            value={new Date()}
            control={control}
          />
          <RfhCheckBox
            name="isPermanent"
            label="Permanent Employee"
            control={control}
            value={isPermanent}
            onChange={handleCheckBox}
            ref={register}
          />
          <div>
            <RhfButton type="submit" color="primary" content="Submit" />
          </div>
        </Grid>
      </Grid>
    </form>
  )
}
