import { TextField } from "@material-ui/core";

const inputProps = {
  autoComplete: 'new-password',
  form: {
    autoComplete: 'off'
  }
}

export default function Input({ name, label, value, error=null, onChange, ...other }) {

  return (
    <TextField
      variant='outlined'
      label={label}
      name={name}
      value={value}
      onChange={onChange}   
      inputProps={inputProps}
      {...other}
      {...(error && {error: true,helperText:error})}
    />
  );
}