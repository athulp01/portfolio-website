import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

function ProjectCard(props) {
    return (
        <Card raised={true} style={{ backgroundColor: "#15151540", color: "white" }}>
            <CardHeader
                avatar={
                    <GitHubIcon htmlColor="white" />
                }
                title={props.title} />
            <CardContent>
                <Typography variant="h5"></Typography>
                <Typography variant="body2">{props.content}</Typography>
            </CardContent>
        </Card>

    )
}

export default ProjectCard;