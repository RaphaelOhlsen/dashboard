import Button from '@material-ui/core/Button';

const ReactHookFormButton = (props) => {
  const {
    variant = "contained",
    content,
    ...others
  } = props;

  return (
    <Button
      variant={variant}
      {...others}
    >
      {content}
    </Button>
  )
}

export default ReactHookFormButton;