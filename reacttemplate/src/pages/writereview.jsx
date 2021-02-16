import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Css/writeReview.module.css';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';

class WriteReview extends Component {
  state = {
    sweet: '',
    sour: '',
    bitter: '',
    grade: '',
    comment: '',
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
    const menuId = localStorage.getItem('menuId');
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
      userId: 'sunga',
      menuId: menuId,
      sweet: sweet,
      bitter: bitter,
      sour: sour,
    };

    Promise.all([axios.post('/api/user/review', data)])
      .then(([res]) => {
        console.log('post 성공');
      })
      .catch((err) => {
        console.log(err);
      });

    alert('입력완료');
    // window.location.replace('/review');
  };

  render() {
    return (
      <>
        <h2> Review InputForm </h2>

        <div className={styles.ratingForm}>
          <RatingSweet onChange={this.handleInputSweet} />
          <br></br>
          <RatingSour onChange={this.handleInputSour} />
          <br></br>
          <RatingBitter onChange={this.handleInputBitter} />
          <br></br>
          <RatingGrade onChange={this.handleInputGrade}></RatingGrade>
        </div>

        <InputBox comment={this.state.comment} onChange={this.handleInputComment} />

        <div className={styles.btn}>
          <Button variant='primary' type='submit' onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
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

export default WriteReview;
