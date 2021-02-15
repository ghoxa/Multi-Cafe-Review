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

  handleInputComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = () => {
    const { sweet, sour, bitter, comment } = this.state;

    if (sweet === '' || sour === '' || bitter === '' || comment === '') {
      alert('모든 입력을 완료해 주세요');
      return;
    }
    const data = {
      menuId: '',
      name: 'dd',
      price: '',
      description: comment,
      grade: '',
      keyword: '',
      image: '',
      good: '',
      click: '',
      hot: '',
      ice: '',
      categoryId: 3003,
      cafeId: 2007,
      sweet: sweet,
      bitter: bitter,
      sour: sour,
    };

    Promise.all([axios.post('/api/menu', data)])
      .then(([res]) => {
        console.log('post 성공');
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(sweet);
    console.log(sour);
    console.log(bitter);
    console.log(comment);

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
