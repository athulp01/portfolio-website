import React from 'react';
import ProjectCard from './project.card'
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography'


export default function Projects(props) {
    return (
        <div>
        <Grid container spacing={10} justify='space-evenly' alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h3" align="center" style={{color:'white', marginBottom:50}}>Projects</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={4} justify='space-evenly' alignItems="center">
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="mauris a diam maecenas sed" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam purus."/>
                    </Grid>
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="leo vel fringilla est ullamcorper" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam purus."/>
                    </Grid>
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="sem nulla pharetra diam sit" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam purus."/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={4} justify='space-evenly' alignItems="center">
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="sem et tortor" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam purus."/>
                    </Grid>
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="mi bibendum neque" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam purus."/>
                    </Grid>
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="feugiat in ante" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam purus."/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}