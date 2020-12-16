import { Formik, Form } from 'formik';
import FormikField from '../../components/FormikField';
import FormikRadioGroup from '../../components/FormikRadioGroup';
import FormikDatePiker from '../../components/FormikDatePicker';
import FormikSelect from "../../components/FormikSelect";
import FormikCheckbox from "../../components/FormikCheckbox"
import FormikButton from '../../components/FormikButton';

import { Grid, makeStyles } from '@material-ui/core';

import * as Yup from 'yup';
import * as employeeService from '../../services/employeeService';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    },
    '& .MuiFormHelperText-root': {
      color: theme.palette.error.dark,
    }
  }
}));

const initialValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  options: '',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
}

const profesionalPositon = employeeService.getDepartmentCollection();

const options = ["Male", "Female"];

export default function EmployeeForm2() {
  const classes = useStyles();

  const validate = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short')
      .required('Required'),
    mobile: Yup.string()
      .min(8, 'Too Small')
      .required('Required'),
    email: Yup.string()
      .email('Enter valid email')
      .required('Required'),
    city: Yup.string()
      .required('Required'),
    options: Yup.string().required('Required'),
    hireDate: Yup.string().required('Required rerer'),
    departmentId: Yup.string().required('Required')
  })

  // const {
  //   values,
  //   resetForm
  // } = useForm(initialValues, true, validate);

  function handleSubmit(values, { resetForm }) {
    alert(JSON.stringify(values));
    if (validate())
      employeeService.insertEmployee(values);
    resetForm();
  }



  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validate}
    >
      {({ dirty, isValid, setFieldValue, values, handleChange, errors, resetForm }) => {

        return (
          <Form className={classes.root} >
            <Grid container>
              <Grid item xs={6}>
                <FormikField name="fullName" label="Name" />
                <FormikField name="mobile" label="Mobile" />
                <FormikField name="email" label="Email" />
                <FormikField name="city" label="City" />
              </Grid>
              <Grid item xs={6}>
                <FormikRadioGroup
                  row
                  name="options"
                  label="Gender"
                  options={options}
                />
                <FormikSelect
                  name='departmentId'
                  label='Department'
                  options={profesionalPositon}
                  handleChange={handleChange}
                  value={values.departmentId}
                  error={errors.departmentId}
                />
                <FormikDatePiker
                  setFieldValue={setFieldValue}
                  name="hireDate"
                  label="Hire Date"
                  value={values.hireDate}
                />
                <FormikCheckbox
                  name='isPermanent'
                  label='Permanent Employee'
                  value={values.isPermanent}
                  handleChange={handleChange}
                />
                <div>
                  <FormikButton
                    key="but-1"
                    type='submit'
                    text='Submit'
                    disabled={!dirty || !isValid}
                  />
                </div>
              </Grid>
            </Grid>

          </Form>
        )
      }}
    </Formik>
  )
}
