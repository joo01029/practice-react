import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import {withStyles} from '@material-ui/core/styles'

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{customer.map(c=>{return(<Customer key={c.id} id={c.id} name={c.name} image={c.image} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
          </TableBody>
        </Table>
      </div>
    );
  }
}
    


export default App;