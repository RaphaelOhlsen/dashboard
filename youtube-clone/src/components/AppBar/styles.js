import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },
  menuIcon: {
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(6),
  },
  logo: {
    height: 25
  },
  grow: {
    flexGrow: '1'
  },
  icons: {
    marginRight: theme.spacing(4),
  }
}));

export default useStyles;