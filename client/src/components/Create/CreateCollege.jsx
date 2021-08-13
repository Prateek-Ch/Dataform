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
        marginLeft:55,
        marginTop: 20,
        marginBottom: 20,
    }
  }));
  

function CreateCollege(){
    const classes = useStyles();

      const createCollege = ()=>{
          console.log(values);
          axios.post('http://localhost:5000/colleges/add',values);
          console.log('Succefully Added to the Database!');
      }

      const [values, setValues] = useState({
        name: '',
        year_founded: '',
        city: '',
        state:'',
        country:'',
        no_of_students:'',
        courses:''
      });
    
    return(
        <Card>
        <div className={classes.header}>
            <h5 style={{paddingTop: 20}}>Add College</h5>
            <TextField id="standard-basic" label="Name" onChange={(e)=>{
                setValues({...values,name:e.target.value})} }/> <br/><br/>
            <TextField id="standard-basic" label="Year Founded" onChange={(e)=>{
                setValues({...values,year_founded:e.target.value})} }/> <br/><br/>
            <TextField id="standard-basic" label="City" onChange={(e)=>{
                setValues({...values,city:e.target.value})} }/> <br/><br/>
            <TextField id="standard-basic" label="State" onChange={(e)=>{
                setValues({...values,state:e.target.value})} }/> <br/><br/>
            <TextField id="standard-basic" label="Country" onChange={(e)=>{
                setValues({...values,country:e.target.value})} }/> <br/><br/>
            <TextField id="standard-basic" label="No. of Students" onChange={(e)=>{
                setValues({...values,no_of_students:e.target.value})} }/> <br/><br/>
            <TextField id="standard-basic" label="Courses" onChange={(e)=>{
                setValues({...values,courses:e.target.value})} }/> <br/><br/>
    
            <Button variant="outlined" color="secondary" className={classes.button} onClick={createCollege}>Submit</Button>
        </div>
        </Card>
    );
    }

export default CreateCollege; 