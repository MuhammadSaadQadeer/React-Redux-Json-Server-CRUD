import React from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
class Landing extends React.Component {

    render() {

        return (
            <Grid container>
                <Grid item xs>
                    <div style={{ textAlign: "center", margin: '10rem' }}>
                        <Typography variant="title" >Welcome To DMS</Typography>
                        <Button component={Link} color="primary" to="/home"> Enter</Button>
                    </div>
                </Grid>
            </Grid>
        )

    }
}

export default Landing;
