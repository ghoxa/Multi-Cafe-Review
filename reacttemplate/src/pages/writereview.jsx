import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Css/writeReview.module.css';
import ReactStars from 'react-rating-stars-component';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class WriteReview extends Component {
  state = {
    sweet: '',
    sour: '',
    bitter: '',
    grade: '',
    comment: '',
    login: localStorage.getItem('isLogin'),
    open: false
  };

  handleInputSweet = (rating) => {
    this.setState({
      sweet: rating,
    });
  };

  handleInputSour = (rating) => {
    this.setState({
      sour: rating,
    });
  };

  handleInputBitter = (rating) => {
    this.setState({
      bitter: rating,
    });
  };

  handleInputGrade = (rating) => {
    this.setState({
      grade: rating,
    });
  };

  handleInputComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = () => {
    const { sweet, sour, bitter, grade, comment } = this.state;
    const menuId = parseInt(localStorage.getItem('menuId'));
    console.log(menuId);
    if (sweet === '' || sour === '' || bitter === '' || grade === '' || comment === '') {
      alert('모든 입력을 완료해 주세요');
      return;
    }

    const data = {
      reviewId: '',
      reviewDate: '',
      content: comment,
      good: '',
      grade: grade,
      userId: localStorage.getItem('userId'),
      menuId: menuId,
      sweet: sweet,
      bitter: bitter,
      sour: sour,
    };

    // post 통신으로 데이터베이스에 리뷰데이터 저장
    Promise.all([axios.post('http://localhost:9090/multicafe/api/user/review', data)])
      .then(([res]) => {
        console.log('post 성공');
        alert('입력완료');
        this.props.stateRefresh();
        this.setState({
          sweet: '',
          sour: '',
          bitter: '',
          grade: '',
          comment: '',
          open: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClickOpen = (e) => {
    const menuId = localStorage.getItem('menuId');
    const userId = localStorage.getItem('userId');
    if (this.state.login) {
      const writebanUrl = axios.get(`http://localhost:9090/multicafe/api/user/menu/${menuId}/review/${userId}`);
      Promise.all([writebanUrl])
        .then(([res]) => {
          console.log(res.data);
          if (res.data) {
            this.setState({
              open: true
            });
          }
        })
        .catch((err) => {
          alert('이미 등록한 리뷰입니다.');
          console.log(err);
        });
    } else {
      alert('로그인 후 이용해 주세요');
    }

  }

  handleClose = () => {
      this.setState({
        sweet: '',
        sour: '',
        bitter: '',
        grade: '',
        comment: '',
        open: false
      })
  }

  render() {
    return (
      <>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>리뷰 추가하기</Button>
        
        <Dialog open={this.state.open} onClose={this.handleClose} fullWidth={true}>
          <DialogTitle>Review InputForm</DialogTitle>

          <DialogContent>
            <div className={styles.ratingForm}>
              <RatingSweet onChange={this.handleInputSweet} /> <br/>
              <RatingSour onChange={this.handleInputSour} /> <br/>
              <RatingBitter onChange={this.handleInputBitter} /> <br/>
              <RatingGrade onChange={this.handleInputGrade}></RatingGrade> <br/>
              <InputBox className={styles.inputBox} comment={this.state.comment} onChange={this.handleInputComment} />
            </div>
          </DialogContent>

          <DialogActions>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>추가</Button>
            <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const RatingSweet = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>단맛 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={30} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const RatingSour = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>신맛 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={30} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const RatingBitter = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>쓴맛 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={30} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const RatingGrade = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>평점 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={30} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const InputBox = ({ comment, onChange }) => {
  return (
    <div>
      <Form className={styles.inputbox}>
        <Form.Group>
          <Form.Label className={styles.head}>리뷰를 입력하세요</Form.Label>
          <Form.Control className={styles.content} as='textarea' rows={3} value={comment} onChange={onChange} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default WriteReview;
