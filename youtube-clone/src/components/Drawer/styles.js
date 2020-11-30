import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  listItem: {
    paddingTop: 4,
    paddingBotton: 4
  },
  listItemText: {
    fontSize: 14
  },
  subheader: {
    textTransform: 'uppercase'
  }
}));

export default useStyles;