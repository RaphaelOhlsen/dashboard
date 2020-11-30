import {
  AppBar,
  Button,
  IconButton,
  Switch,
  Toolbar
} from '@material-ui/core';


import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';

import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';


export default function AppBarC({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar color='inherit' className={classes.appBar}>
      <Toolbar>
        <IconButton disableRipple className={classes.menuIcon}>
          <MenuIcon />
        </IconButton>
        <img
          className={classes.logo}
          src={
            theme.palette.type === 'dark'
              ? '/assets/images/branco.png'
              : '/assets/images/preto.png'
          }
          alt='logo'
        />
        <div className={classes.grow} />
        <Switch 
          value={darkMode} 
          onChange={() => setDarkMode(!darkMode)}
          className={classes.icons}
        />
        <IconButton className={classes.icons}>
          <VideoCallIcon />
        </IconButton>
        <IconButton className={classes.icons}>
          <Apps />
        </IconButton>
        <IconButton className={classes.icons}>
          <MoreVertIcon />
        </IconButton>
        <Button
          variant='outlined'
          color='secondary'
          startIcon={<AccountCircleRoundedIcon style={{ fontSize: 30 }} />}
          disableRipple
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  )

}