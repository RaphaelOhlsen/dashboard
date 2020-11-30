import { Box, Grid, Typography } from '@material-ui/core'
import { videos } from '../../data';

export default function Content() {
  return (
    <Box p={8} style={{ marginTop: 64 }}>
      <Typography
        variant='h5'
        color='textPrimary'
        style={{ fontWeight: 600 }}
      >
        Recomendamos
      </Typography>
      <Grid container spacing={4} style={{marginTop: 12}}>
        {videos.map((video, index) => (
          <Grid 
            item lg={3} md={4} sm={6} xs={12}
            key={`video-${index}`}
          >
            <Box>
              <img
                style={{ width: '100%' }}
                alt={video.title}
                src={video.thumb}
              />
              <Box>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant='body1'
                  color='textPrimary'
                >
                  {video.title}
                </Typography>
                <Typography
                  display='block'
                  variant='body2'
                  color='textSecondary'
                >
                  {video.channel}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {`${video.views} • ${video.date}`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}