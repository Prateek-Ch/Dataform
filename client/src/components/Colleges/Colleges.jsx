import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header:{
    marginTop: 100,
  }
});

function Colleges() {
  const classes = useStyles();

  const [collegesList,setCollegesList] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/colleges').then((allColleges)=>{
      const data = allColleges.data;
      setCollegesList(data);
      console.log(allColleges.data);
      console.log(collegesList);
    }).catch(error => console.log(error));
  },[]);

  return (
    <div className={classes.header}>
    <h3>Colleges List</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Student Table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Year Founded</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">State</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
            <StyledTableCell align="right">No. Of Students</StyledTableCell>
            <StyledTableCell align="right">Courses</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
        {collegesList.map((college,key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">{college.name}</StyledTableCell>
              <StyledTableCell align="right">{college.year_founded}</StyledTableCell>
              <StyledTableCell align="right">{college.city}</StyledTableCell>
              <StyledTableCell align="right">{college.state}</StyledTableCell>
              <StyledTableCell align="right">{college.country}</StyledTableCell>
              <StyledTableCell align="right">{college.no_of_students}</StyledTableCell>
              <StyledTableCell align="right">{college.courses}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Colleges; 