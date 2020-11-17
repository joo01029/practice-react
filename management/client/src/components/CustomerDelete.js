import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Type from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class CustomerDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

    }

    deleteCustomer(id) {
        const  url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        })
        this.props.stateRefresh();
    }

    handleClickOpen = () => {
        this.setState({
           open: true 
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>
                    삭제 경고
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        정말로 삭제하시겠습니까?
                    </Typography> 
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={(e)=>{this.deleteCustomer(this.props.id)}}>삭제</Button>
                </DialogActions>
            </Dialog>
            </div> 
        )
    }
}

export default CustomerDelete;