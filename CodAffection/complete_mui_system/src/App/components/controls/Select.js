import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core'

export default function Select(props) {
  const { name, label, value, onChange, options } = props;

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <FormControl variant='outlined' style={{maxWidth: 170}}>
      <InputLabel id='open-select-label'>{label}</InputLabel>
      <MuiSelect
        id='open-select-label'
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        <MenuItem value=''>None</MenuItem>
        {options.map( (option, index) => (
            <MenuItem key={`option-${index}`} value={option.id}>{option.title}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}