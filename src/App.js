import React from 'react'
import './App.css';
import './index.css';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import User from './User';

const useStyles = makeStyles(theme => ({
  buttonFilter: {
    float: "right",
    marginRight: "20px",
    fontWeight: "bold",
    background: "transparent",
    color: "rgb(81, 49, 185)",
    marginTop: "30px"
  },
  clientsTitle: {
    fontSize: "25px",
    fontWeight: "bold",
    letterSpacing: "0.02em",
    marginTop: "1px",
    marginBottom: "1px"
  },
  buttonNew: {
    float: "right",
    backgroundColor: "rgb(81, 49, 185)",
    color: "white",
    marginRight: "5%",
    marginTop: "30px"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Grid className="container" container direction="column" >
      <p>MANAGEMENT</p>
      <form>
        <p className={classes.clientsTitle}>Clients</p>
        <Link to="/NewClient">
          <Button className={classes.buttonNew} variant="contained" startIcon={<AddIcon />}>New Client</Button>
        </Link>
        <Button className={classes.buttonFilter} variant="contained" startIcon={<FilterListIcon />}>Show Filter</Button>
        <User />
      </form>
    </Grid >
  );
}

export default App;
