import React, {useState}from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Card from '../ui/Card';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },

    button:{
        marginLeft:50,
        marginTop: 20,
        marginBottom: 20,
    }
  }));
  

function CreateStudent(){
    const classes = useStyles();

      const createStudent = ()=>{
          console.log(values);
          axios.post('http://localhost:5000/students/add',values);
          console.log('Succefully Added to the Database!');
      }

      const [values, setValues] = useState({
        name: '',
        year_of_batch: '',
        college_id: '',
        skills:''
      });
    
    return(
        <Card>
        <div className={classes.header}>
            <h5 style={{paddingTop: 20}}>Add Student</h5>
            <TextField id="filled-basic" label="Name" variant="filled" onChange={(e)=>{
                setValues({...values,name:e.target.value})} }/> <br/><br/>
            <TextField id="filled-basic" label="Year of Batch" variant="filled" onChange={(e)=>{
                setValues({...values,year_of_batch:e.target.value})} }/> <br/><br/>
            <TextField id="filled-basic" label="College Id" variant="filled" onChange={(e)=>{
                setValues({...values,college_id:e.target.value})} }/> <br/><br/>
            <TextField id="filled-basic" label="Skills" variant="filled" onChange={(e)=>{
                setValues({...values,skills:e.target.value})} }/> <br/><br/>
    
            <Button variant="outlined" className={classes.button} onClick={createStudent}>Submit</Button>
        </div>
        </Card>
    );
    }

export default CreateStudent; 