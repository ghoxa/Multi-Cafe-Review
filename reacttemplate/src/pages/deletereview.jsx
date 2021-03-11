import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class DeleteReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            open: false
        }
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

    deleteReview(e) {
        localStorage.setItem('deleteId', e);
        const deleteId = localStorage.getItem('deleteId');
        const reviewDeleteUrl = axios.delete(`http://localhost:9090/multicafe/api/user/review/${deleteId}`);
        Promise.all([reviewDeleteUrl])
        .then(([res]) => {
            this.setState({
                isLoaded: true,
            });
            alert('삭제완료');
            this.props.stateRefresh();
        })
        .catch((err) => {
            console.log(err.response);
        });
    }

    render() {
        return(
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
                    삭제
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        삭제 경고
                    </DialogTitle>

                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 리뷰가 삭제됩니다.
                        </Typography>
                    </DialogContent>

                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => this.deleteReview(this.props.reviewId)}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default DeleteReview;