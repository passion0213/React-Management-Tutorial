import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing(2),
  }
});


class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
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
              this.state.customers ? this.state.customers.map(customer => {
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
              }) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
