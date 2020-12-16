import { RadioGroup, FormLabel } from "@material-ui/core";
import { Controller } from "react-hook-form";

const ReactHookFormRadioGroup = props => {
  const {
    name,
    label,
    control,
    children,
    value,
    handleChange,
    ...others
  } = props

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        rules={{ required: true }}
        control={control}
        defaultValue={value}
        name={name}
        as={
          <RadioGroup
            {...others}
            value={value}
            onChange={handleChange}
          >
            {children}
          </RadioGroup>
        }
      />
    </>
  );
};


export default ReactHookFormRadioGroup;