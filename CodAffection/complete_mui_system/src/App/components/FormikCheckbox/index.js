import { FormControl, FormControlLabel, Checkbox as MuiCheckBox } from "@material-ui/core";

const FormikCheckbox = ({ value, label, name, handleChange }) => {

  return (
    <FormControl component='fieldset'>
      <FormControlLabel
        control={<MuiCheckBox
          name={name}
          color='primary'
          checked={value}
          onChange={handleChange}
        />}
        label={label}
      />
    </FormControl>
  )
}

export default FormikCheckbox;