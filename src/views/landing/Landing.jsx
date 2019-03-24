import React from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
class Landing extends React.Component {

    render() {

        return (
            <Grid container>
                <Grid item xs>
                    <Paper>
                        <Typography >Welcome To DMS</Typography>
                        <Button component={Link} to="/home"> Enter</Button>
                    </Paper>
                </Grid>
            </Grid>
        )

    }
}

export default Landing;
