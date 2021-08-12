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

function Students() {
  const classes = useStyles();

  const [studentsList,setStudentsList] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/students').then((allStudents)=>{
      const data = allStudents.data;
      setStudentsList(data);
      console.log(allStudents.data);
      console.log(studentsList);
    }).catch(error => console.log(error));
  },[]);

  return (
    <div className={classes.header}>
    <h3>Student List</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Student Table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Year of Batch</StyledTableCell>
            <StyledTableCell align="right">College ID</StyledTableCell>
            <StyledTableCell align="right">Skills</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
        {studentsList.map((student,key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">{student.name}</StyledTableCell>
              <StyledTableCell align="right">{student.year_of_batch}</StyledTableCell>
              <StyledTableCell align="right">{student.college_id}</StyledTableCell>
              <StyledTableCell align="right">{student.skills}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Students; 