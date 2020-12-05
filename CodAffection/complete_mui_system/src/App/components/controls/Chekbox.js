import { FormControl, FormControlLabel, FormGroup, Checkbox as MuiCheckBox} from "@material-ui/core";

export default function CheckBox(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value)  => ({
    target: {
      name, value
    }
  });

  return (
    <FormControl component='fieldset'>
      <FormControlLabel 
        control={<MuiCheckBox
          name={name}
          color='primary'
          checked={value}
          onChange={
            ev => onChange(convertToDefEventPara(name, ev.target.checked))
          } 
        />}
        label={label}
      />
      <FormGroup>

      </FormGroup>
    </FormControl>

  )
}