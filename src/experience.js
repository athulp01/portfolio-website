import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';



export default function Experience() {
    return (
        <Card raised={true} style={{backgroundColor:"#15151540", color:"white"}}>
        <CardHeader
            title="Experience"/>
        <CardContent>
            <Stepper orientation="vertical" style={{backgroundColor:"#40404000", color:"white"}}>
            <Step active="true">
                <StepLabel StepIconComponent={WorkIcon}><Typography style={{color:"white"}}>Digital Library Student Administrator</Typography></StepLabel>
                <StepContent>
                    <Typography>National Institute of Technology Calicut</Typography>
                    <Typography variant="caption">August 2019 - Present</Typography>            </StepContent>
            </Step>
            <Step active="true" completed="true">
                <StepLabel style={{color:"white"}}><Typography style={{color:"white"}}>Digital Library Intern</Typography></StepLabel>
                <StepContent>
                    <Typography>National Institute of Technology Calicut</Typography>
                    <Typography variant="caption">June - July 2019</Typography>
                </StepContent>
            </Step>
            </Stepper>
        </CardContent>
    </Card>
    )
}