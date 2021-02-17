import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import ReactStars from 'react-rating-stars-component';
class MyRecent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myRecent: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    const menuReivewUrl = axios.get(`http://localhost:9090/multicafe/api/user/recent/${userId}`);
    Promise.all([menuReivewUrl])
      .then(([res]) => {
        this.setState({
          myRecent: res.data,

          isLoaded: true,
        });
        console.log(this.state.myRecent);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  handleClick = (value) => () => {
    // console.log(value);
    localStorage.setItem('menuId', value);
  };

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div id='loader' style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <CircularProgress />
        </div>
      );
    } else {
      let menulist = [];
      let myRecent = this.state.myRecent;
      for (let i = 0; i < myRecent.length; i++) {
        try {
          menulist.push(
            <Link to='/review'>
              <div className='card card-product-list' onClick={this.handleClick(myRecent[i]['menuId'])}>
                <div className='row no-gutters'>
                  <img className='card-img-top' src={myRecent[i]['image']} alt='Card image' />
                  <div className='card-body'>
                    <h6 className='card-title'>{myRecent[i]['name']}</h6>
                    <p className='text-success'>{myRecent[i]['cafeName']}</p>
                    <ul className='rating-stars'>
                      평점: <span>{myRecent[i]['grade']}</span>
                      <ReactStars style={{ display: 'inline-flex' }} edit={false} activeColor='#ffc107' value={myRecent[i]['grade']} size={15} isHalf={true} />
                    </ul>
                    <div className='price-wrap'>
                      <span className='price h5'>{myRecent[i]['price']}원</span>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </Link>
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
                      <a href='#' data-toggle='collapse' data-target='#collapse_2' aria-expanded='false' className=''>
                        <i className='icon-control fa fa-chevron-down'></i>
                        <h6 className='title'>마이페이지</h6>
                      </a>
                    </header>
                    <div className='filter-content collapse show' id='collapse_2'>
                      <div className='card-body'>
                        <ul className='list-menu'>
                          <li>
                            <Link to='/formPage'>개인정보수정 </Link>
                          </li>
                          <li>
                            <Link to='/mylike'>찜 목록 </Link>
                          </li>
                          <li>
                            <Link to='/myrecent'>최근 본 메뉴 </Link>
                          </li>
                          <li>
                            <Link to='/myreview'>내 리뷰 관리 </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>

              {/* 이 부분 부터 바뀐다 */}
              <main className='col-md-9'>
                <header className='border-bottom mb-4 pb-3'>
                  <div className='form-inline'>
                    <span className='mr-md-auto'>{myRecent.length} Items found </span>
                  </div>
                </header>

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

export default MyRecent;
