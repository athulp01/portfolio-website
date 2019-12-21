import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import NavMain from './nav.js'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';


function Home(props) {
  return (
      <Grid container spacing={4} justify="center" alignItems="center">
        <Grid item xs={12} >
          <NavMain/>
        </Grid>
        <Grid item xs={8} sm={10}>
          <Grow in={true} timeout={1000}>
            <Typography style={{color:'white', marginTop:100}} variant="h1" align="center">Hello, I'm Athul P.</Typography>
          </Grow>
        </Grid>
        <Grid item xs={10}>
            <Typography style={{color:'white', marginTop:50}}  variant="h3" align="center">Full Stack Developer | Linux | Machine Learning</Typography>
        </Grid>
        <Grid item xs={12} style={{marginTop:50}}>
          <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
            <Grid item xs={2} sm={1}>
              <GitHubIcon fontSize="large" htmlColor="white"/>
            </Grid>
            <Grid item xs={2} sm={1}>
              <LinkedInIcon fontSize="large" htmlColor="white"/>
            </Grid>
            <Grid item xs={2} sm={1}>
              <TwitterIcon fontSize="large" htmlColor="white"/>
            </Grid>
            <Grid item xs={2} sm={1}>
              <RedditIcon fontSize="large" htmlColor="white"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}
export default Home;
//100:8:20
