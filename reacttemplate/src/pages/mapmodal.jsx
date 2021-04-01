import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

class MapModal extends Component {
    state = {
        open: false
    };

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
        <>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>marker click</Button>
            
            <Dialog open={this.state.open} onClose={this.handleClose} fullWidth={true}>
                <DialogTitle>OO 카페 정보 보기</DialogTitle>

                <DialogContent>
                    {/* 카페 정보 표시 : 주소, 전화번호, ... */}
                </DialogContent>

                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </>
        );
    }
}

export default MapModal;