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

import SearchBar from '../Utils/SearchBar';

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

  const [searchTerm,recievedSearchTerm] = useState("");

  useEffect(()=>{
    axios.get('http://localhost:5000/colleges').then((allColleges)=>{
      const data = allColleges.data;
      setCollegesList(data);
      console.log(allColleges.data);
      console.log(collegesList);
    }).catch(error => console.log(error));
  },[]);

  const handleCallback = (childData)=>{
    recievedSearchTerm(childData);
  }

  return (
    <div className={classes.header}>
    
    <SearchBar parentCallback = {handleCallback}/>

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
        {collegesList.filter(val=>{
          if(searchTerm===""){
            return val;
          }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.no_of_students>=searchTerm ||
            val.courses[0].toLowerCase().includes(searchTerm.toLowerCase())
          ){
              return val;
          }
        }).map((college,key) => (
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