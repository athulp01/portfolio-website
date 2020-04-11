import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CodeIcon from '@material-ui/icons/Code';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import Experience from './experience';

const about = {
    "Languages": ["Python", "C++", "C", "Javascript"],
    "Technologies": ["ReactJS", "NodeJS", "TensorFlow", "MongoDB"],
    "Courses": ["Data Structures", "Artificial Intelligence", "Compiler Laboratory", "Microprocessor and Microcontrollers"]
}

function LangCard(props) {
    return (
        <Card raised={true} style={{ backgroundColor: "#15151540", color: "white" }}>
            <CardHeader
                avatar={
                    <CodeIcon htmlColor="white" fontSize="large" />
                }
                title="Programming Lanuguages" />
            <CardContent>
                <Chip label="Python" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="C++" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="C" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="JavaScript" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
            </CardContent>
        </Card>
    )
}

function LibCard() {
    return (
        <Card raised={true} style={{ backgroundColor: "#15151540", color: "white" }}>
            <CardHeader
                avatar={
                    <ComputerIcon htmlColor="white" fontSize="large" />
                }
                title="Technologies" />
            <CardContent>
                <Chip label="ReactJS" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="NodeJS" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="TensorFlow" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="MongoDB" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
            </CardContent>
        </Card>
    )
}

function CourseCard() {
    return (
        <Card raised={true} style={{ backgroundColor: "#15151540", color: "white" }}>
            <CardHeader
                avatar={
                    <SchoolIcon htmlColor="white" fontSize="large" />
                }
                title="Major Courses" />
            <CardContent>
                <Chip label="Data Structures" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="Artificial Intelligence" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="Compiler Laboratory" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
                <Chip label="Microprocessor and Microcontrollers" style={{ backgroundColor: "white", color: "black", marginRight: 4, marginBottom: 8 }}></Chip>
            </CardContent>
        </Card>
    )
}

function Info() {
    return (
        <Card raised={true} style={{ backgroundColor: "#15151540", color: "white" }}>
            <CardHeader
                avatar={
                    <PersonIcon htmlColor="white" fontSize="large" />
                }
                title="A little about me" />
            <CardContent>
                <Typography variant="body2" align='center'>I am currently Third year student pursuing B Tech degree from National Institute of Technology Calicut. I am deeply passionated all about computers.</Typography>
            </CardContent>
        </Card>
    )
}

export default function About() {
    return (
        <div>
            <Grid container spacing={0} justify='space-evenly' alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h3" align="center" style={{ color: 'white', marginBottom: 20, marginTop: 20 }}>About Me</Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={0} justify='space-evenly' alignItems="center">
                        <Grid item xs={10} sm={6} lg={6}>
                            <Info />
                        </Grid>
                        <Grid item xs={10} sm={6} lg={6}>
                            <Experience />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing={0} justify='space-evenly' alignItems="center">
                        <Grid item xs={10} sm={4} lg={4}>
                            <LangCard />
                        </Grid>
                        <Grid item xs={10} sm={4} lg={4}>
                            <LibCard />
                        </Grid>
                        <Grid item xs={10} sm={4} lg={4}>
                            <CourseCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}