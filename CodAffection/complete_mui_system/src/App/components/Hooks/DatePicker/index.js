import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Controller } from 'react-hook-form';

const RhfDatePicker = (props) => {
  const { label, name, value, control, ...others } = props;

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          as={KeyboardDatePicker}
          control={control}
          disableToolbar
          inputVariant="outlined"
          variant='inline'
          format='dd/MM/yyyy'
          name={name}
          value={value}
          label={label}
          onChange={([selected]) => selected}
          autoOk
          {...others}
        />
      </MuiPickersUtilsProvider>
    </>
  )
}

export default RhfDatePicker;