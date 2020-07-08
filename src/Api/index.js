import React from 'react';
import axios from 'axios';


const URL = "https://covid19.mathdro.id/api";

export const fetchData= async(country)=>{
    let ChangeableUrl = URL;
    if(country){
    ChangeableUrl = `${URL}/countries/${country}`;
    }
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(ChangeableUrl);
     return{confirmed , recovered , deaths , lastUpdate};   
    } catch (error) {
        console.log("Sorry here is an error of",error)
    }
}
 
export const fetchDailyData = async()=>{
    try {
        const {data} = await axios.get(`${URL}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed : dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date:dailyData.reportDate,
        }))
        return modifiedData;
    } catch (error) {
        
    }
}

export const Country = async()=>{
    try {
        const {data:{countries}} = await axios.get(`${URL}/countries`);
        return countries.map((item)=>item.name);
        // console.log('Country data = = =  = ',(countries.map((item)=>item.name)))
    } catch (error) {
        
    }
}
