import React from 'react';
import './App.css';
import {Cards,Charts,CountryData} from './components';
import './App.module.css';
import {fetchData} from './Api/index';
import Header from "./components/Header/header";

class App extends React.Component{
  state={data:{},country:'',};
async componentDidMount(){
const FetchedData = await fetchData();
this.setState({data:FetchedData});
  }
CountryHendler = async(country)=>{
  const FetchedData = await fetchData(country);
this.setState({data:FetchedData,country:country});
}

  render()
  { const {data} =this.state;
  const {country}= this.state;
  console.log('My data before fetch in App')
return(<><Header/>
<div className="container">
  
  <Cards data={data}/>
  <Charts data={data} country={country}/>
  <CountryData CountryHendler={this.CountryHendler}/>
</div></>
  );
}}
export default App;//Here App is a Component name.
