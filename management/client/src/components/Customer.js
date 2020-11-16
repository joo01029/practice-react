import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends React.Component {
    render(){
        const styles = theme => ({
            image:{
                width:"64px",
                heigth:"64px"
            }
          })
        return (
           <TableRow>
               <TableCell>{this.props.id}</TableCell>
               <TableCell><img src={this.props.image} alt="profile" className={styles.image}/></TableCell>
               <TableCell>{this.props.name}</TableCell>
               <TableCell>{this.props.birthday}</TableCell>
               <TableCell>{this.props.gender}</TableCell>
               <TableCell>{this.props.job}</TableCell>
           </TableRow>
        )
    }
}

export default Customer;