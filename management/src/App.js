import React, { Component } from 'react';
import './App.css';
 import Customer from './components/Customer';

const customer = [{
  'id':1,
  'image':'http://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'040404',
  'gender':'남자',
  'job':'백수쉑'
},{
  'id':2,
  'image':'http://placeimg.com/64/64/any',
  'name':'바보',
  'birthday':'040404',
  'gender':'여자',
  'job':'백수쉑'
},{
  'id':1,
  'image':'http://placeimg.com/64/64/any',
  'name':'멍청이',
  'birthday':'040404',
  'gender':'남자',
  'job':'백수쉑'
}]

class App extends Component {
  render(){
    return ( 
      <div>
        {
          customer.map(c=>{
            return (
              <Customer
              key={c.id}
                id={c.id}
                image={c.image}
                name = {c.name}
                birthday= {c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
      
    );
  }
}
    


export default App;