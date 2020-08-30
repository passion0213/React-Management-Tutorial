import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

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
    return (
      <div>
        {
          customers.map(customer => {
            return(
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
      </div>
    )
  }
}

export default App;
