import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles'

const styles= theme => ({
  root:{
    width:"100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table:{
    minWidth:1080,
  }
})

const customers = [
  {
    "id": 1,
    "image": "https://placeimg.com/64/64/1",
    "name": "Smith",
    "birthday": "19920219",
    "gender": "male",
    "job": "student"
  },
  {
    "id": 2,
    "image": "https://placeimg.com/64/64/2",
    "name": "Ana",
    "birthday": "19850219",
    "gender": "female",
    "job": "doctor"
  },
  {
    "id": 3,
    "image": "https://placeimg.com/64/64/3",
    "name": "John",
    "birthday": "20050219",
    "gender": "male",
    "job": "student"
  },
]
class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>PICTURE</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>BIRTHDAY</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell>JOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(customer => {
                return (
                  <Customer
                    key={customer.id}
                    id={customer.id}
                    image={customer.image}
                    name={customer.name}
                    birthday={customer.birthday}
                    job={customer.job}
                    gender={customer.gender}
                  />
                )
              })
            }
          </TableBody>
        </Table>

      </Paper>
    )
  }
}

export default withStyles(styles)(App);
