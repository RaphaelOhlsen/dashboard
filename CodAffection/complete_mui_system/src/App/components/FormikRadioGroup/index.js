import Radio from "@material-ui/core/Radio";
import { RadioGroup as MuiRadioGroup, FormControlLabel, FormHelperText } from "@material-ui/core";
import { FormControl, FormLabel } from "@material-ui/core";
import {Field} from  'formik';

const RadioGroup = ({
  field,
  form: { touched, errors },
  name,
  label,
  options,
  children,
  ...props
}) => {

  const fieldName = name || field.name;

  return (
    <FormControl style={{marginBottom: 2}}>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup {...field} {...props} name={fieldName}>
        {options.map((option, index) => (
          <FormControlLabel
            key={`option-${index}`}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </MuiRadioGroup>

      {touched[fieldName] && errors[fieldName] && (
        <FormHelperText>{errors[fieldName]}</FormHelperText>
      )}
    </FormControl>
  );
};

const FormikRadioGroup = ({ name, label, options }) => {
  return (
    <Field
      row
      name={name}
      label={label}
      options={options}
      component={RadioGroup}
    />
  );
}



export default FormikRadioGroup;