import { TextField } from "@material-ui/core";
import { forwardRef } from "react";

const normalizeMobile = (value) => {

  if (value.length < 14) {
   return value.replace(/\D/g, "")
      .replace(/^0/, "")
      .replace(/(\d)/, "($1")
      .replace(/(\d{2})/, "$1)")
      .replace(/(\d{4})/, "$1-")
      
  }

  if (value.length >= 14) {
    return value.replace(/\D$/, "")
      .replace(/-/g, "")
      .replace(/(\d{5})/, "$1-")
      .substr(0, 14);
  }

}

const ReactHookFormInput = forwardRef((props, ref) => {
  const {
    variant = "outlined",
    type = "text",
    mask,
    ...others
  } = props;
  if (mask) {
    return (
      <TextField
        variant={variant}
        type={type}
        inputRef={ref}
        onChange={(ev) => {
          const { value } = ev.target;
          ev.target.value = normalizeMobile(value);
        }}
        {...others}
      />
    )
  }
  return (
    <TextField
      variant={variant}
      type={type}
      inputRef={ref}
      {...others}
    />
  )
})

export default ReactHookFormInput;