import { forwardRef } from "react";
import { Checkbox, FormControlLabel } from '@material-ui/core';

const RhfCheckBox = forwardRef((props, ref) => {
  const { label, name, value, onChange } = props;
  return (
    <FormControlLabel
      value={value}
      control={<Checkbox />}
      label={label}
      name={name}
      inputRef={ref}
      onChange={onChange}
      checked={value}
    />
  )
})

export default RhfCheckBox;