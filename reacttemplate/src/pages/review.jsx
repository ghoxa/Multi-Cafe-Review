import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Table } from 'react-bootstrap';

const options = {
  filterType: 'checkbox',
};
class ReviewPage extends Component {
  // createListOfFiles() {
  //   let listOfFiles = [];
  //   for (let i = 0; i < this.files.length; ++i) {
  //     listOfFiles.push(<p key={i}>{this.files[i].name}</p>);
  //   }
  //   return listOfFiles;
  // }
  constructor(props) {
    super(props);
    this.state = {
      myLike: false,
      menuReivew: [],
      selectMenu: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const menuId = localStorage.getItem('menuId');
    const menuReivewUrl = axios.get(`/api/review/${menuId}`);
    const selectMenuUrl = axios.get(`/api/menu/${menuId}`);
    Promise.all([menuReivewUrl, selectMenuUrl])
      .then(([res, res2]) => {
        this.setState({
          menuReivew: res.data,
          selectMenu: res2.data,
        });

        console.log(this.state.menuReivew[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  createListOfSimilarMenu() {
    let list = [];
    list.push(
      <SwiperSlide>
        <div className='col-lg-4 col-md-12 mb-4'>
          <img
            src='data:image/png;base64,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'
            className='cafeImg'
            alt='...'
          />
        </div>
      </SwiperSlide>
    );
    return list;
  }
  createListOfFiles() {
    let listOfFiles = [];
    for (let i = 0; i < this.files.length; ++i) {
      listOfFiles.push(<p key={i}>{this.files[i].name}</p>);
    }
    return listOfFiles;
  }
  createListOfReview() {
    let list = [];
    for (let i = 0; i < this.state.menuReivew.length; ++i) {
      list.push(
        <tr>
          <td>{this.state.menuReivew[i].userId}</td>
          <td>{this.state.menuReivew[i].content}</td>
          <td>
            <ReactStars edit={false} activeColor='#ffc107' value={this.state.menuReivew[i].sweet} size={20} isHalf={true} />
          </td>
          <td>
            <ReactStars edit={false} activeColor='#ffc107' value={this.state.menuReivew[i].bitter} size={20} isHalf={true} />
          </td>
          <td>
            <ReactStars edit={false} activeColor='#ffc107' value={this.state.menuReivew[i].sour} size={20} isHalf={true} />
          </td>
        </tr>
      );
    }
    return list;
  }
  render() {
    const { menuReivew, selectMenu } = this.state;
    return (
      <div>
        <div>
          {/*Main layout*/}

          <main className='mt-5 pt-4'>
            <div className='container dark-grey-text mt-5'>
              {/*Grid row*/}
              <div className='row wow fadeIn'>
                {/*Grid column*/}
                <span className='col-md-6 mb-4'>
                  총점:
                  <ReactStars style={{ display: 'inline-flex' }} edit={false} activeColor='#ffc107' value={3} size={35} isHalf={true} />
                  <img src={selectMenu.image} className='img-fluid' style={{ width: '80%', height: '80%' }} alt />
                </span>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className='col-md-6 mb-4'>
                  {/*Content*/}
                  <div className='p-4'>
                    <span className='lead font-weight-bold'>{selectMenu.name} </span>
                    <a className='btn' onClick={() => this.setState({ myLike: !this.state.myLike })}>
                      <i style={{ color: 'red' }} className={this.state.myLike ? 'fa fa-heart' : 'far fa-heart'}></i>
                    </a>
                    <p className='lead font-weight-bold'>
                      <span>{selectMenu.price}원 </span>
                    </p>
                    <p>{selectMenu.description}</p>
                    <form className='d-flex justify-content-left'>{/* Default input */}</form>
                  </div>
                  {/*Content*/}
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              <hr />
              {/*Grid row*/}
              <div className='row d-flex justify-content-center wow fadeIn'>
                {/*Grid column*/}
                <div className='col-md-6 text-left'>
                  <div className='rating-wrap mb-3'>
                    단맛: &nbsp;
                    <ul className='rating-stars'>
                      <ReactStars edit={false} activeColor='#ffc107' value={3} size={25} isHalf={true} />
                    </ul>
                  </div>
                  <div className='rating-wrap mb-3'>
                    쓴맛: &nbsp;
                    <ul className='rating-stars'>
                      <ReactStars edit={false} activeColor='#ffc107' value={3} size={25} isHalf={true} />
                    </ul>
                  </div>
                  <div className='rating-wrap mb-3'>
                    신맛: &nbsp;
                    <ul className='rating-stars'>
                      <ReactStars edit={false} activeColor='#ffc107' value={3} size={25} isHalf={true} />
                    </ul>
                  </div>
                </div>
                <Link to='/writereview'>
                  <button className='btn btn-primary btn-md my-0 p' type='submit' style={{ height: '70px' }}>
                    리뷰 작성
                  </button>
                </Link>

                {/*Grid column*/}
              </div>
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>이름</th>
                    <th>리뷰내용</th>
                    <th>단맛</th>
                    <th>쓴맛</th>
                    <th>신맛</th>
                  </tr>
                </thead>
                <tbody>{this.createListOfReview()}</tbody>
              </Table>

              {/*Grid row*/}
              {/*Grid row*/}
              <div className='row wow fadeIn'>
                <Swiper spaceBetween={0} slidesPerView={4} onSlideChange={() => console.log('slide change')} on Swiper={(swiper) => console.log('swiper')}>
                  {/*Grid column*/}
                  {this.createListOfSimilarMenu()}
                  {this.createListOfSimilarMenu()}
                  {this.createListOfSimilarMenu()}
                  {this.createListOfSimilarMenu()}
                  {this.createListOfSimilarMenu()}
                  {this.createListOfSimilarMenu()}
                  {this.createListOfSimilarMenu()}

                  {/*Grid column*/}
                </Swiper>
              </div>

              {/*Grid row*/}
            </div>
          </main>
          {/*Main layout*/}
          {/*Footer*/}
          <footer className='page-footer text-center font-small mt-4 wow fadeIn'>
            {/*Call to action*/}
            <div className='pt-4'>
              <a className='btn btn-outline-white' href='https://mdbootstrap.com/docs/jquery/getting-started/download/' target='_blank' role='button'>
                Download MDB
                <i className='fas fa-download ml-2' />
              </a>
              <a className='btn btn-outline-white' href='https://mdbootstrap.com/education/bootstrap/' target='_blank' role='button'>
                Start free tutorial
                <i className='fas fa-graduation-cap ml-2' />
              </a>
            </div>
            {/*/.Call to action*/}
            <hr className='my-4' />
            {/* Social icons */}
            <div className='pb-4'>
              <a href='https://www.facebook.com/mdbootstrap' target='_blank'>
                <i className='fab fa-facebook-f mr-3' />
              </a>
              <a href='https://twitter.com/MDBootstrap' target='_blank'>
                <i className='fab fa-twitter mr-3' />
              </a>
              <a href='https://www.youtube.com/watch?v=7MUISDJ5ZZ4' target='_blank'>
                <i className='fab fa-youtube mr-3' />
              </a>
              <a href='https://plus.google.com/u/0/b/107863090883699620484' target='_blank'>
                <i className='fab fa-google-plus-g mr-3' />
              </a>
              <a href='https://dribbble.com/mdbootstrap' target='_blank'>
                <i className='fab fa-dribbble mr-3' />
              </a>
              <a href='https://pinterest.com/mdbootstrap' target='_blank'>
                <i className='fab fa-pinterest mr-3' />
              </a>
              <a href='https://github.com/mdbootstrap/bootstrap-material-design' target='_blank'>
                <i className='fab fa-github mr-3' />
              </a>
              <a href='http://codepen.io/mdbootstrap/' target='_blank'>
                <i className='fab fa-codepen mr-3' />
              </a>
            </div>
            {/* Social icons */}
            {/*Copyright*/}
            <div className='footer-copyright py-3'>
              © 2019 Copyright:
              <a href='https://mdbootstrap.com/education/bootstrap/' target='_blank'>
                {' '}
                MDBootstrap.com{' '}
              </a>
            </div>
            {/*/.Copyright*/}
          </footer>
        </div>
      </div>
    );
  }
}

export default ReviewPage;
