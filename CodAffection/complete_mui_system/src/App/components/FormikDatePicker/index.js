import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const FormikDatePiker = ({ label, name, value, setFieldValue }) => {
  
  return (

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant='inline'
        format='dd/MM/yyyy'
        name={name}
        value={value}
        label={label}
        onChange={value => setFieldValue(name, value)}
        autoOk
      />
    </MuiPickersUtilsProvider>
  )
}

export default FormikDatePiker;



