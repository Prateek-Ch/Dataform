import {React, useState, useEffect} from 'react';
import axios from 'axios';
import classes from './CollegesGraph.module.css';

import { Pie } from 'react-chartjs-2';
  

function CollegePieChart(){
    const [collegesList, setCollegesList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/colleges').then((allColleges)=>{
      const data = allColleges.data;
      setCollegesList(data);
     }).catch(error => console.log(error));
  },[]);
    
    var obj = {};
    for (var i = 0; i<collegesList.length;i++){
    if (obj[collegesList[i].state]) {
        obj[collegesList[i].state]++;
     }
     else {
        obj[collegesList[i].state] = 1;
     } 
}
var values = Object.keys(obj).map(function (key) { return obj[key]; });

const data = {
    labels: ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Massachusetts","Meghalaya", "Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Tamil Nadu","Telangana","Tripura", "Uttar Pradesh","Uttarakhand", "West Bengal"],
    
    datasets: [
      {
        label: 'Colleges in various Cities',
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
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

    return(
        <div className={classes.graph}>
          <h6>Number of Colleges in Various Cities</h6>
            <Pie data={data}  height = {300} width = {300} options={{ maintainAspectRatio: false, responsive: true }}/>
        </div>
    );
}

export default CollegePieChart;