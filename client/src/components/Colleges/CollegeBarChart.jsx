import {React, useState, useEffect} from 'react';
import axios from 'axios';
import classes from './CollegesGraph.module.css';

import { Bar } from 'react-chartjs-2';
  

function CollegeBarChart(){
    const [collegesList, setCollegesList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/colleges').then((allColleges)=>{
      const data = allColleges.data;
      setCollegesList(data);
     }).catch(error => console.log(error));
  },[]);
    
    var obj = [];
    for (var i = 0; i<collegesList.length;i++){
        obj[i] = collegesList[i].no_of_students;
    }
    var values = [0,0,0,0,0];
    for (var i = 0; i<collegesList.length;i++){
        if(obj[i]<500) values[0]+=1;
        else if(500<=obj[i] && obj[i]<1000) values[1]+=1;
        else if(1000<=obj[i] && obj[i]<5000) values[2]+=1;
        else if(5000<=obj[i] && obj[i]<10000) values[3]+=1;
        else values[4]+=1;
    }

  const data = {
    labels: ["Less than 500","500-1000","1000-5000","5000-10000","Greater than 10000"],
    
    datasets: [
      {
        label: 'Colleges vs Number of Students',
        data: values,
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

    return(
        <div className={classes.graph}>
            <Bar data={data}  height = {300} width = {300} options={{options}}/>
        </div>
    );
}

export default CollegeBarChart;