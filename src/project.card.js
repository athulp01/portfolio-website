import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

function ProjectCard(props) {
    return (
        <Card raised={true}>
        <CardHeader
        avatar={
            <GitHubIcon/>
        }
        title= {props.title}
        subheader="September 14, 2016"/>
            <CardContent>
                <Typography variant="h5"></Typography>
                <Typography variant="body2">{props.content}</Typography>
            </CardContent>
        </Card>

    )
} 

export default ProjectCard;