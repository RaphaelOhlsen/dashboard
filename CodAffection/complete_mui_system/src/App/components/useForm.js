import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export function useForm(initialFValues, validateOnChange=false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [ errors, setErrors ] = useState({});

  function handleInputChange(ev) {
    const { value, name } = ev.target;
    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange)
      validate({ [name]: value})
  }

  function resetForm() {
    setValues(initialFValues);
    setErrors({});
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}));

export function Form(props) {
  const classes = useStyles();

  const { children, ...other } = props;

  return (
    <form className={classes.root} {...other}>
      {children}
    </form>
  )
}