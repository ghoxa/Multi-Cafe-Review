import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import ReactStars from 'react-rating-stars-component';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      login: localStorage.getItem('isLogin'),
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => () => {
    // console.log(value);
    localStorage.setItem('menuId', value);
  };

  handleClick2 = (value) => () => {
    // console.log(value);
    localStorage.setItem('categoryId', value);
    localStorage.setItem('keyword', 0);
    window.location.replace('/');
  };

  handleClick3 = (value) => () => {
    // console.log(value);
    localStorage.setItem('conditionId', value);
    window.location.replace('/');
  };

  checkLogid = () => {
    alert('로그인을 해주세요!');
  };
  handleClickSerch = () => {
    localStorage.setItem('keyword', document.getElementById('inputkeyword').value);
    localStorage.setItem('categoryId', 0);
    window.location.replace('/');
  };
  componentDidMount() {
    const cafeId = localStorage.getItem('cafeId');
    const categoryId = localStorage.getItem('categoryId');
    const keyword = localStorage.getItem('keyword');
    const conditionId = localStorage.getItem('conditionId');

    const cateUrl = axios.get(`http://localhost:9090/multicafe/api/category`);
    let menuApi = '';

    if (cafeId == 0) {
      //모든 카페
      if (categoryId == 0 && keyword == 0) {
        // 모든 카테고리
        menuApi = axios.get(`http://localhost:9090/multicafe/api/menu/list/${conditionId}`);
      } else if (categoryId == 0 && keyword != 0) {
        //키워드 검색
        menuApi = axios.get(`http://localhost:9090/multicafe/api/menu/search/${keyword}/${conditionId}`);
      } else if (categoryId != 0) {
        //카테고리 선택
        menuApi = axios.get(`http://localhost:9090/multicafe/api/menu/category/${categoryId}/${conditionId}`);
      }
    } else if (cafeId != 0) {
      // 카페선택
      if (categoryId == 0 && keyword == 0) {
        // 모든 카테고리
        menuApi = axios.get(`http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/${conditionId}`);
      } else if (categoryId == 0 && keyword != 0) {
        //키워드 검색
        menuApi = axios.get(`http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/search/${keyword}/${conditionId}`);
      } else if (categoryId != 0) {
        //카테고리 선택
        menuApi = axios.get(`http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/category/${categoryId}/${conditionId}`);
      }
    } else {
      alert('예외상황!!');
    }
    Promise.all([cateUrl, menuApi])

      .then(([res, res2]) => {
        this.setState({
          cate: res.data,
          Menu: res2.data,
          isLoaded: true,
        });
        // console.log(Menu);
      })
      .catch((err) => {
        console.log(err);
      });

    // window.location.replace("/");
  }

  render() {
    const { isLoaded, login } = this.state;

    if (!isLoaded) {
      return (
        <div id='loader' style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <CircularProgress />
        </div>
      );
    } else {
      let menulist = [];
      let menu = this.state.Menu;
      for (let i = 0; i < menu.length; i++) {
        try {
          menulist.push(
            <Link to='/review'>
              <span className='card card-product-list' onClick={this.handleClick(menu[i]['menuId'])}>
                <div className='row no-gutters'>
                  <img className='card-img-top' src={menu[i]['image']} alt='Card image' />
                  <div className='card-body'>
                    <h6 className='card-title'>{menu[i]['name']}</h6>
                    <p className='text-success'>{menu[i]['cafeName']}</p>
                    <ul className='rating-stars'>
                      총점: <span>{menu[i]['grade']}</span>
                      <ReactStars style={{ display: 'inline-flex' }} edit={false} activeColor='#ffc107' value={menu[i]['grade']} size={15} isHalf={true} />
                    </ul>
                    <div className='price-wrap'>
                      <span className='price h5'>{menu[i]['price']}원</span>
                    </div>
                    <br />
                  </div>
                </div>
              </span>
            </Link>
          );
        } catch (error) {
          console.log(error);
        }
      }
      let cateList = [];
      let category = this.state.cate;

      for (let i = 0; i < category.length; i++) {
        try {
          cateList.push(
            <li>
              <a onClick={this.handleClick2(category[i]['categoryId'])}>{category[i]['name']}</a>
            </li>
          );
        } catch (error) {
          console.log(error);
        }
      }
      return (
        <section className='section-content padding-y'>
          <div className='container'>
            <div className='row'>
              <aside className='col-md-3'>
                <div className='card'>
                  <article className='filter-group'>
                    <header className='card-header'>
                      <a href='#' data-toggle='collapse' data-target='#collapse_1' aria-expanded='true' className=''>
                        <i className='icon-control fa fa-chevron-down'></i>
                        <h6 className='title'>CATEGORY</h6>
                      </a>
                    </header>
                    <div className='filter-content collapse show' id='collapse_1'>
                      <div className='card-body'>
                        <form className='pb-3'>
                          <div className='input-group'>
                            <input type='text' id='inputkeyword' className='form-control' placeholder='Search' />
                            <div className='input-group-append'>
                              <button className='btn btn-light' type='button' onClick={this.handleClickSerch}>
                                <i className='fa fa-search'></i>
                              </button>
                            </div>
                          </div>
                        </form>

                        <ul className='list-menu'>
                          <li>
                            <a onClick={this.handleClick2(0)}>모든카테고리</a>
                          </li>
                          {cateList}
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className='filter-group'>
                    <header className='card-header'>
                      <a href='#' data-toggle='collapse' data-target='#collapse_2' aria-expanded='false' className=''>
                        <i className='icon-control fa fa-chevron-down'></i>
                        <h6 className='title'>마이페이지</h6>
                      </a>
                    </header>
                    <div className='filter-content collapse show' id='collapse_2'>
                      <div className='card-body'>
                        <ul className='list-menu'>
                          <li>{login ? <Link to='/formpage'>개인정보수정</Link> : <a onClick={this.checkLogid}>개인정보수정</a>}</li>
                          <li>
                            <a href='/mylike'>찜 목록 </a>
                          </li>
                          <li>
                            <a href='/myrecent'>최근 본 메뉴 </a>
                          </li>
                          <li>
                            <Link to='/myreview'>내 리뷰 관리</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className='filter-group'>
                    <header className='card-header'>
                      <Link to='/adminpage' data-toggle='collapse' data-target='#collapse_3' aria-expanded='false' className=''>
                        <i className='icon-control fa fa-chevron-down'></i>
                        <h6 className='title'>관리자페이지</h6>
                      </Link>
                    </header>
                    <div className='filter-content collapse show' id='collapse_3'>
                      <div className='card-body'>
                        <ul className='list-menu'>
                          <li>
                            <Link to='/admin_insert'>메뉴 추가</Link>
                          </li>
                          <li>
                            <Link to='/admin_update'>메뉴 수정</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>

              <main className='col-md-9'>
                <header className='border-bottom mb-4 pb-3'>
                  <div className='form-inline'>
                    <span className='mr-md-auto'>{menu.length} Items found </span>
                    <div class='dropdown'>
                      <button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>
                        정렬순서
                      </button>
                      <div class='dropdown-menu'>
                        <a class='dropdown-item' onClick={this.handleClick3('good')}>
                          추천순
                        </a>
                        <a class='dropdown-item' onClick={this.handleClick3('click')}>
                          조회순
                        </a>
                      </div>
                    </div>
                  </div>
                </header>

                {/* {this.createListOfSimilarMenu()} */}
                <div className='card-columns'>{menulist}</div>

                <nav className='mt-4' aria-label='Page navigation sample'>
                  <ul className='pagination justify-content-center'>
                    <li className='page-item disabled'>
                      <a className='page-link' href='#'>
                        Previous
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </main>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Home;
