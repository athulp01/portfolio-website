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
                <Typography variant="h3" align="center" style={{color:'white', marginBottom:20, marginTop:20}}>Projects</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={4} justify='space-evenly' alignItems="center">
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="Face Authenication" content="Basic face recognition system"/>
                    </Grid>
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="Chrome-dino-automation" content="A GA approach to play the chrome://dino game."/>
                    </Grid>
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="Attendance Manager" content="A Web site to keep track of your attendance"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={4} justify='space-evenly' alignItems="center">
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="Elastic Collision Simulator" content="This program simulates N-body 2D elastic collision."/>
                    </Grid>
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="GDSyncer" content="Keep a folder in sync with Google Drive"/>
                    </Grid>
                    <Grid item xs={10} sm={4} lg={3}>
                        <ProjectCard title="Sudoku Solver" content="Feed in a image of a sudoku and get it solved!"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}