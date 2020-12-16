import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value
    }
  })


  return(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker 
        disableToolbar
        variant='inline'
        inputVariant='outlined'
        format='MMM/dd/yyyy'
        name={name}
        value={value}
        label={label}
        onChange={date => onChange(convertToDefEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  )
}