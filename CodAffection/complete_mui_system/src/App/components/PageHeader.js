import { Paper, Card, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyeles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  pageHeader: {
    display: 'flex',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    // display: 'inline-block',
    padding: theme.spacing(2),
    color: '#3c44b1'
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6', 
    }
  }
}));

export default function PageHeader({ title, subtitle, icon }) {
  const classes = useStyeles();

  return (
    <Paper 
      className={classes.root} 
      elevation={0} 
      square 
    >
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>
          {icon}
        </Card>
        <div className={classes.pageTitle}>
          <Typography
            variant='h6'
            component='div'
          >
            {title}
          </Typography>
          <Typography
            variant='subtitle2'
            component='div'
          >
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}