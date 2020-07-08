import React, { useState } from 'react';
import {fetchDailyData} from "../../Api/index";
import { useEffect } from "react";
import {Line,Bar} from 'react-chartjs-2';

function Charts({data:{confirmed,recovered,deaths},country}){
    const [DailyData,setDailyData] = useState([]);
    
    useEffect(()=>{
         const fetchApi = async()=>
        {
        setDailyData(await fetchDailyData());
        console.log("My Daily Data is = ",DailyData);
        }
        fetchApi();},[setDailyData])

const lineChart=(
    DailyData.length ?
    (<Line
        data={{
    labels: DailyData.map(({date})=>date) ,
    datasets:[{
        data:DailyData.map(({confirmed})=>confirmed),
    label:"Infected",
    borderColor:"rgb(23,44,44)",
    fill:true
    },{
            data:DailyData.map(({deaths})=>deaths),
            label:"Deaths",
            borderColor:"red",
            backgroundColor:"rgba(255,0,0,0.5)",
            fill:true
    }],
        }}
        />) :
     <p>Loading Table</p>
)

const BarChart = (
    (confirmed) ?
    <Bar
    data={{
        labels:['Infected',"recovered","deaths"],
        datasets:[{
            label:'people',
            backgroundColor : [
                'orange','green','red'
            ],
            data:[confirmed.value,recovered.value,deaths.value]

        }   
        ]
    }}
    options={{
        legend : {display : false},
        title:{display : true,text : `Showing data of ${country}`}

    }}
    />:<p>Loading...</p>)

    
return(
<div>{(country) ? BarChart:lineChart}</div>
)
}
export default Charts;