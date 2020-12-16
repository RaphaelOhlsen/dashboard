import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { FormHelperText, Select } from "@material-ui/core";
import { Controller } from "react-hook-form";

const ReactHookFormSelect = ({
  name,
  label,
  children,
  selectError,
  helperText,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <>
      <FormControl {...props}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Controller
          as={
            <Select labelId={labelId} label={label}>
              {children}
            </Select>
          }
          name={name}
          {...props}
        />
        {selectError && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
      
    </>
  );
};


export default ReactHookFormSelect;