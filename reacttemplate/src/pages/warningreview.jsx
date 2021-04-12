import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class WarningReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            login: localStorage.getItem('isLogin')
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

    warningReview(e) {
        this.setState({
            isLoaded: false
        });
        console.log(e);
        if (this.state.login) {
            localStorage.setItem('reviewId', e);
            const reviewId = localStorage.getItem('reviewId');
            const userId = localStorage.getItem('userId');
            const isMyLike = axios.get(`http://localhost:9090/multicafe/api/user/${userId}/${reviewId}/MyReviewCheck`);
            Promise.all([isMyLike])
            .then(([res]) => {
                this.setState({
                myReviewCheck: res.data,
                });
                console.log(this.state.myReviewCheck);
                if (this.state.myReviewCheck) {
                    alert('본인 리뷰입니다.');
                    this.handleClose();
                    return;
                } else {
                // 1. GET방식으로 사용자가 이미 신고한 리뷰인지 판단 (0일때 신고가능)
                const isWarning = axios.get(`http://localhost:9090/multicafe/api/review/${reviewId}/${userId}/reports`);
                Promise.all([isWarning])
                .then(([res]) => {
                    if (res.data === 0) {  // 신고가능
                    const setWarning = axios.put(`http://localhost:9090/multicafe/api/review/${reviewId}/${userId}/reports`);
                    Promise.all([setWarning])
                    .then((res) => {
                        alert('신고가 완료됐습니다.');
                        this.handleClose();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                    } else {
                        alert('이미 신고한 리뷰입니다.');
                        this.handleClose();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            alert('로그인 후 이용해 주세요');
        }

        this.setState({
            isLoaded: true,
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClickOpen}>
                    🚫
                </button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        경고
                    </DialogTitle>

                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 리뷰를 신고합니다.
                        </Typography>
                    </DialogContent>

                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => this.warningReview(this.props.reviewId)}>신고</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default WarningReview;