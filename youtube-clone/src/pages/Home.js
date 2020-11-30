import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import Content from '../components/Content';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark
  }
}))

export default function Home({darkMode, setDarkMode}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box display='flex'>
        <Drawer />
        <Content />
      </Box>
    </div>
  )
}