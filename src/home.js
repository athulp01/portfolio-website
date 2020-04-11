import React from 'react';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BookIcon from '@material-ui/icons/Book'
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';


function Home(props) {
  return (
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item xs={10}>
          <Grow in={true} timeout={1000}>
            <Typography style={{color:'white'}} variant="h1" align="center">Hello, I'm Athul P.</Typography>
          </Grow>
        </Grid>
        <Grid item xs={10}>
            <Typography style={{color:'white', marginTop:50}}  variant="h3" align="center">System Programming | Linux | Machine Learning</Typography>
        </Grid>
        <Grid item xs={10} style={{marginTop:50}}>
          <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
          <Grid item xs={2} sm={1}>
              <Link href="https://blog.athulp.tech" target="_blank"><BookIcon fontSize="large" htmlColor="white"/></Link>
            </Grid>
            <Grid item xs={2} sm={1}>
            <Link href="https://github.com/athulpn" target="_blank"><GitHubIcon fontSize="large" htmlColor="white"/></Link>
            </Grid>
            <Grid item xs={2} sm={1}>
            <Link href="https://linkedin.com/in/athulp01" target="_blank"><LinkedInIcon fontSize="large" htmlColor="white"/></Link>
            </Grid>
            <Grid item xs={2} sm={1}>
              <Link href="https://twitter.com/athulp_" target="_blank"><TwitterIcon fontSize="large" htmlColor="white"/></Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}
export default Home;
//100:8:20
