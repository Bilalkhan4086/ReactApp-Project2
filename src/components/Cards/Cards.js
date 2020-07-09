import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import CountUp from 'react-countup';
const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontWeight: "bold",
  },
});

export default function Cards({data:{confirmed,recovered,lastUpdate,deaths}}) {
  
  const classes = useStyles();
console.log('My data in cards After Fetching = ',{confirmed,recovered,lastUpdate,deaths})
if(!confirmed){
  return <div>Loading...</div>
}
  return (<>
    {/* //Infected People */}
    <Grid container spacing={0} style={{margin:"50px 0",justifyContent:"center"}}>
    <Grid item component={Card} xs={3} variant="outlined" gutterBottom style={{margin:"0 2%"}} style={{borderBottom:"4px solid orange"}}>
      <CardContent>
      <Typography className={classes.title} color="textPrimary">
          Infected
        </Typography>
        <Typography className={classes.title} variant="h5" color="textPrimary">
        <CountUp start={0} end={confirmed.value} separator=',' duration={2.5}/>
        </Typography>
        <Typography variant="Body1" component="p">
         Updated on = {new Date(lastUpdate).toDateString()}
        </Typography>
      </CardContent>
    </Grid>
{/* //recoverd People */}
<Grid item component={Card} xs={3} gutterBottom variant="outlined" style={{borderBottom:"4px solid green"}}>
      <CardContent>
      <Typography className={classes.title} color="textPrimary">
          Recovered
        </Typography>
        <Typography className={classes.title} variant="h5" color="textPrimary">
        <CountUp start={0} end={recovered.value} separator=',' duration={2.5}/>
        </Typography>
        <Typography variant="Body1" component="p">
         Updated on = {new Date(lastUpdate).toDateString()}
        </Typography>
      </CardContent>
    </Grid>
{/* //deaths */}
<Grid item component={Card} xs={3} variant="outlined" style={{borderBottom:"4px solid red"}} md={3} gutterBottom>
      <CardContent>
      <Typography className={classes.title} color="textPrimary">
          Deaths
        </Typography>
        <Typography className={classes.title} variant="h5" color="textPrimary">
        <CountUp start={0} end={deaths.value} separator=',' duration={2.5}/>
        </Typography>
        <Typography variant="Body1" component="p">
         Updated on = {new Date(lastUpdate).toDateString()}
        </Typography>
      </CardContent>
    </Grid></Grid>
 </> );
}