import React from 'react';
import classes from './Dashboard.module.css';
import {Grid, Container} from '@material-ui/core';

import CollegePieChart from '../Colleges/CollegePieChart';
import CollegeBarChart from '../Colleges/CollegeBarChart';
  

function Dashboard(){
      return(
        <div className={classes.header}>
            <h4 style={{marginBottom: 30}}>Visualise</h4>
            <Container>
                <Grid container justify="space-between" alignItems="stretch">
                    <Grid item xs={12} sm = {12} md={5}> 
                        <CollegePieChart />
                    </Grid>
                    <Grid item xs={12} sm = {12} md={5}>
                        <CollegeBarChart />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Dashboard;