import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import MUIDataTable from 'mui-datatables';
const ratingChanged = (newRating) => {
  console.log(newRating);
};
const columns = [
  {
    name: '이름',
    label: '이름',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: '한줄평',
    label: '한줄평',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: '단맛',
    label: '단맛',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: '쓴맛',
    label: '쓴맛',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: '신맛',
    label: '신맛',
    options: {
      filter: true,
      sort: false,
    },
  },
];
const data = [
  { 이름: 'Joe James', 한줄평: '너무 맛있어요111111', 단맛: '1', 쓴맛: '1', 신맛: '1' },
  { 이름: 'John Walsh', 한줄평: '맛있어요', 단맛: '2', 쓴맛: '1', 신맛: '1' },
  { 이름: 'Bob Herm', 한줄평: '맛있어요', 단맛: '3', 쓴맛: '1', 신맛: '1' },
  { 이름: 'James Houston', 한줄평: '맛있어요', 단맛: '4', 쓴맛: '1', 신맛: '1' },
];

const options = {
  filterType: 'checkbox',
};
class ReviewPage extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Navbar */}
          <nav className='navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar'>
            <div className='container'>
              {/* Brand */}
              <a className='navbar-brand waves-effect' href='https://mdbootstrap.com/docs/jquery/' target='_blank'>
                <strong className='blue-text'>MDB</strong>
              </a>
              {/* Collapse */}
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon' />
              </button>
              {/* Links */}
              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                {/* Left */}
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item active'>
                    <a className='nav-link waves-effect' href='#'>
                      Home
                      <span className='sr-only'>(current)</span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link waves-effect' href='https://mdbootstrap.com/docs/jquery/' target='_blank'>
                      About MDB
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link waves-effect' href='https://mdbootstrap.com/docs/jquery/getting-started/download/' target='_blank'>
                      Free download
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link waves-effect' href='https://mdbootstrap.com/education/bootstrap/' target='_blank'>
                      Free tutorials
                    </a>
                  </li>
                </ul>
                {/* Right */}
                <ul className='navbar-nav nav-flex-icons'>
                  <li className='nav-item'>
                    <a className='nav-link waves-effect'>
                      <span className='badge red z-depth-1 mr-1'> 1 </span>
                      <i className='fas fa-shopping-cart' />
                      <span className='clearfix d-none d-sm-inline-block'> Cart </span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='https://www.facebook.com/mdbootstrap' className='nav-link waves-effect' target='_blank'>
                      <i className='fab fa-facebook-f' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='https://twitter.com/MDBootstrap' className='nav-link waves-effect' target='_blank'>
                      <i className='fab fa-twitter' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='https://github.com/mdbootstrap/bootstrap-material-design' className='nav-link border border-light rounded waves-effect' target='_blank'>
                      <i className='fab fa-github mr-2' />
                      MDB GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Navbar */}
          {/*Main layout*/}

          <main className='mt-5 pt-4'>
            <div className='container dark-grey-text mt-5'>
              {/*Grid row*/}
              <div className='row wow fadeIn'>
                {/*Grid column*/}
                <span className='col-md-6 mb-4'>
                  <div className='rating-wrap mb-3'>
                    총점: &nbsp;
                    <ul className='rating-stars'>
                      <li className='stars-active w-80'>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                    <div className='label-rating'>7/10</div>
                  </div>
                  <img src='https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[94]_20150813222021797.jpg' className='img-fluid' alt />
                </span>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className='col-md-6 mb-4'>
                  {/*Content*/}
                  <div className='p-4'>
                    <div className='mb-3'>
                      <a href>
                        <span className='badge purple mr-1'>Category 2</span>
                      </a>
                      <a href>
                        <span className='badge blue mr-1'>New</span>
                      </a>
                      <a href>
                        <span className='badge red mr-1'>Bestseller</span>
                      </a>
                    </div>

                    <p className='lead font-weight-bold'>카페 아메리카노 </p>
                    <p className='lead font-weight-bold'>
                      <span>4100원</span>
                    </p>
                    <p>강렬한 에스프레소 샷에 뜨거운 물의 조화</p>
                    <form className='d-flex justify-content-center'>
                      {/* Default input */}
                      <input type='number' defaultValue={1} aria-label='Search' className='form-control' style={{ width: 100 }} />
                      <button className='btn btn-primary btn-md my-0 p' type='submit'>
                        Add to cart
                        <i className='fas fa-shopping-cart ml-1' />
                      </button>
                    </form>
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
                <div className='col-md-6 text-center'>
                  <div className='rating-wrap mb-3'>
                    단맛: &nbsp;
                    <ul className='rating-stars'>
                      <li className='stars-active w-80'>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                    <div className='label-rating'>7/10</div>
                  </div>
                  <div className='rating-wrap mb-3'>
                    신맛: &nbsp;
                    <ul className='rating-stars'>
                      <li className='stars-active w-80'>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                    <div className='label-rating'>7/10</div>
                  </div>
                  <div className='rating-wrap mb-3'>
                    쓴맛: &nbsp;
                    <ul className='rating-stars'>
                      <li className='stars-active w-80'>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </li>
                      <li>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </li>
                    </ul>
                    <div className='label-rating'>7/10</div>
                  </div>
                  ,<h4 className='my-4 h4'>고객별 리뷰</h4>
                </div>

                {/*Grid column*/}
              </div>
              <MUIDataTable title={'고객 리뷰'} data={data} columns={columns} options={options} />
              {/*Grid row*/}
              {/*Grid row*/}
              <div className='row wow fadeIn' style={{ overflowX: 'scroll', height: '300px' }}>
                {/*Grid column*/}
                <div className='col-lg-4 col-md-12 mb-4'>
                  <img src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg' className='img-fluid' alt />
                </div>
                <div className='col-lg-4 col-md-12 mb-4'>
                  <img src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg' className='img-fluid' alt />
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className='col-lg-4 col-md-6 mb-4'>
                  <img src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg' className='img-fluid' alt />
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className='col-lg-4 col-md-6 mb-4'>
                  <img src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg' className='img-fluid' alt />
                </div>
                {/*Grid column*/}
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
