import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff', 
  },
  searchInput: {
    opacity: 0.6,
    padding: '5px 8px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: 8
    },
  },
  // btnRoot: {
  //   '&:hover':{
  //     cursor: 'pointer',
  //     '& .MuiSvgIcon-root': {
  //       color: theme.palette.error.main
  //     }
  //   }
  // },
}))

export default function Header() {
  const classes = useStyles();
 
  return (
    <div>
      <AppBar className={classes.root} position='static'>
        <Toolbar>
          <Grid container justify='flex-end'>
            <Grid item>
              <InputBase
                placeholder='Search topics'
                startAdornment={<SearchIcon fontSize='small' />}
                className={classes.searchInput}
              />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              {/* Exemplo de utilização de classes Atributes */}
              <IconButton classes={{root: classes.btnRoot, label: classes.btnLabel}} >
                <Badge badgeContent={4} color='secondary'>
                  <NotificationsNoneIcon fontSize='small' />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color='primary'>
                  <ChatBubbleOutlineIcon fontSize='small' />
                </Badge>
              </IconButton>
              <IconButton classes={{root: classes.btnRoot, label: classes.btnLabel}}>
                <PowerSettingsNewIcon fontSize='small' />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
