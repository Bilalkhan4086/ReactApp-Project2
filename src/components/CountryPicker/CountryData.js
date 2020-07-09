import React, { useEffect,useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import { FormControl } from '@material-ui/core';
import {Country} from "../../Api/index"
import NativeSelect from "@material-ui/core/NativeSelect";



export default function CountryData({CountryHendler}) {
const [fcountry,setfcountry] = useState([])
useEffect(()=>{
const CountryPicker= async()=>{
  setfcountry(await Country());
}
CountryPicker();},[setfcountry])
console.log('My Data in CountryDataa is = ',fcountry)


 

return (
    <div >
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FormControl style={{display: "flex" ,justifyContent:"center",width:"70%",backgroundColor:"grey",borderRadius:"30px",margin:"0px auto"}}>
          <NativeSelect defaultValue="" onChange={(e)=>CountryHendler(e.target.value)}>
          <option>&nbsp;&nbsp;Global Data</option>   
          {fcountry.map((country,i)=><option key={i} value={country}>{country}</option>)}
          
          </NativeSelect>
      
      </FormControl>
    
    </div>
  );}
  