import {
  Button,
  Divider,
  Drawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Box,
  Typography,
  ListSubheader,
  Hidden,
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircle from '@material-ui/icons/AddCircle';

import { drawerItens, bestContents } from '../../data';

import useStyles from './styles'

export default function DrawerC() {
  const classes = useStyles();

  return (
    <Hidden mdDown>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div style={{ marginTop: 24 }}>
          <List>
            {drawerItens.map((item, index) => (
              <div key={`item-${index}`}>
                {index === 3 ?
                  (<ListItem
                    button
                    classes={{ root: classes.listItem }}
                    style={{ marginTop: 20 }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText
                      }}
                      primary={item.text}
                    />
                  </ListItem>) :
                  (
                    <ListItem
                      button
                      classes={{ root: classes.listItem }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.listItemText
                        }}
                        primary={item.text}
                      />
                    </ListItem>
                  )
                }
                {(index === 2 || index === 4) && <Divider />}
              </div>
            ))}
          </List>
          <Box p={7}>
            <Typography variant='body2'>
              Faça seu login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<AccountCircle />}
              >
                Fazer login
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component='nav'
            aria-labelledby='nested-list-subnheader'
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                className={classes.subheader}
              >
                O melhor do Youtube
              </ListSubheader>
            }
          >
            {bestContents.map((content, index) => (
              <ListItem
                button
                classes={{ root: classes.listItem }}
                key={`content-${index}`}
              >
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={content}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Hidden>
  )
}