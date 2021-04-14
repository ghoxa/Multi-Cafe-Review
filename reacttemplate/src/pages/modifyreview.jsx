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

class ModifyReview extends Component {
  state = {
    sweet: "",
    sour: "",
    bitter: "",
    grade: "",
    comment: "",
    open: false,
  };

  handleInputSweet = (rating) => {
    this.setState({ sweet: rating });
  };
  handleInputSour = (rating) => {
    this.setState({ sour: rating });
  };
  handleInputBitter = (rating) => {
    this.setState({ bitter: rating });
  };
  handleInputGrade = (rating) => {
    this.setState({ grade: rating });
  };
  handleInputComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit(e) {
    localStorage.setItem("reviewId", e);
    const { sweet, sour, bitter, grade, comment } = this.state;
    const menuId = parseInt(localStorage.getItem("menuId"));
    const reviewId = localStorage.getItem("reviewId");
    console.log(menuId);
    if (
      sweet === "" ||
      sour === "" ||
      bitter === "" ||
      grade === "" ||
      comment === ""
    ) {
      alert("모든 입력을 완료해 주세요");
      return;
    }

    const data = {
      reviewId: reviewId,
      reviewDate: "",
      content: comment,
      good: "",
      grade: grade,
      userId: localStorage.getItem("userId"),
      menuId: "",
      sweet: sweet,
      bitter: bitter,
      sour: sour,
    };

    console.log(data);
    Promise.all([
      axios.put("http://localhost:9090/multicafe/api/user/review", data),
    ])
      .then(([res]) => {
        console.log(res.data);
        console.log("put 성공");
        alert("입력완료");
        this.props.stateRefresh();
        this.setState({
          sweet: "",
          sour: "",
          bitter: "",
          grade: "",
          comment: "",
          open: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClickOpen = (e) => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      sweet: "",
      sour: "",
      bitter: "",
      grade: "",
      comment: "",
      open: false,
    });
  };

  render() {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          수정
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth={true}
        >
          <DialogTitle>Review ModifyForm</DialogTitle>

          <DialogContent>
            <div className={styles.ratingForm}>
              <RatingSweet onChange={this.handleInputSweet} /> <br />
              <RatingSour onChange={this.handleInputSour} /> <br />
              <RatingBitter onChange={this.handleInputBitter} /> <br />
              <RatingGrade onChange={this.handleInputGrade}></RatingGrade>{" "}
              <br />
              <InputBox
                className={styles.inputBox}
                comment={this.state.comment}
                onChange={this.handleInputComment}
              />
            </div>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => this.handleSubmit(this.props.reviewId)}
            >
              수정
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              닫기
            </Button>
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
        <ReactStars activeColor='#ffc107' size={35} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const RatingSour = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>신맛 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={35} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const RatingBitter = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>쓴맛 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={35} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const RatingGrade = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>평점 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={35} isHalf={true} onChange={onChange} />
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

export default ModifyReview;
