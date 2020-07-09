import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, FormControl } from '@material-ui/core';
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
}));
const useStylesTypoghraphy = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    color:"Blue",
  },
});

  const classesT = useStylesTypoghraphy();
  const classes = useStyles();

return (
    <div >
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FormControl style={{display: "flex" ,justifyContent:"center",}} style={{width:"70%",backgroundColor:"grey",borderRadius:"30px"}}>
          <NativeSelect defaultValue="" onChange={(e)=>CountryHendler(e.target.value)}>
          <option>&nbsp;&nbsp;Global Data</option>   
          {fcountry.map((country,i)=><option key={i} value={country}>{country}</option>)}
          
          </NativeSelect>
      
      </FormControl>
    
    </div>
  );}
  