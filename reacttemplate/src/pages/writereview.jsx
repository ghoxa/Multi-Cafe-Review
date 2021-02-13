import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Css/writeReview.module.css';
import ReactStars from 'react-rating-stars-component';

class WriteReview extends Component {
  state = {
    sweet: '',
    sour: '',
    bitter: '',
    comment: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  /* 
    handleSubmit = e => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            comment:''
        });
    }
    */
  render() {
    return (
      <>
        <h2> Review InputForm </h2>

        <Rating></Rating>
        <InputBox></InputBox>
      </>
    );
  }
}

class ParentEvent extends Component {
  handleCreate = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <WriteReview onCreate={this.handleCreate} />
      </div>
    );
  }
}

class Rating extends Component {
  render() {
    const ratingChanged = (rating) => {
      console.log(rating);
    };
    return (
      <div className={styles.ratingForm}>
        <div className={styles.taste}>
          <span class={styles.font}>단맛 </span>
          <span class={styles.rating}>
            <ReactStars activeColor='#ffc107' size={35} isHalf={true} onChange={ratingChanged} />
          </span>
        </div>
        <br></br>

        <div className={styles.taste}>
          <span class={styles.font}>신맛 </span>
          <span class={styles.rating}>
            <ReactStars activeColor='#ffc107' size={35} isHalf={true} onChange={ratingChanged} />
          </span>
        </div>
        <br></br>

        <div className={styles.taste}>
          <span class={styles.font}>쓴맛 </span>
          <span class={styles.rating}>
            <ReactStars activeColor='#ffc107' size={35} isHalf={true} onChange={ratingChanged} />
          </span>
        </div>
        <br></br>
      </div>
    );
  }
}

class InputBox extends Component {
  render() {
    return (
      <div>
        <Form className={styles.inputbox}>
          <Form.Group>
            <Form.Label className={styles.head}>리뷰를 입력하세요</Form.Label>
            <Form.Control className={styles.content} as='textarea' rows={3} />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default WriteReview;
