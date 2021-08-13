import React from 'react';
import classes from './Dashboard.module.css';
import {Grid, Container} from '@material-ui/core';

import CollegesGraph from '../Colleges/CollegesGraph';
  

function Dashboard(){
      return(
        <div className={classes.header}>
            <h3>Dashboard</h3>
            <Container>
                <Grid container justify="space-between" alignItems="stretch">
                    <Grid item xs={12} sm = {12} md={5}> 
                        <CollegesGraph />
                    </Grid>
                    <Grid item xs={12} sm = {12} md={5}>
                        <CollegesGraph />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Dashboard;