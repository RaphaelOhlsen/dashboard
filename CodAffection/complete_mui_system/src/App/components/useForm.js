import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues);

  function handleInputChange(ev) {
    const { value, name} = ev.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return {
    values,
    setValues, 
    handleInputChange
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

export function Form({children}) {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete='off'>
      {children}
    </form>
  )
}