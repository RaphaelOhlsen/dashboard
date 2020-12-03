import './App.css';
import SideMenu from '../Components/SideMenu';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: 320,
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
    </>
  );
}

export default App;
