import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    width: 320,
    height: '100%',
    backgroundColor: '#253053'
  }
}));

export default function SideMenu() {
  const classes = useStyles();
  
  return (
    <div className={classes.sideMenu}>
   
    </div>
  )
}
