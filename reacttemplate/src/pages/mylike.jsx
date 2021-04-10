import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import ReactStars from 'react-rating-stars-component';
class Mylike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLike: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    const userId = localStorage.getItem('userId');
    const myLikeUrl = axios.get(`http://localhost:9090/multicafe/api/user/${userId}/menu/like`);
    Promise.all([myLikeUrl])
      .then(([res]) => {
        this.setState({
          myLike: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  handleClickMenu = (value) => () => {
    // console.log(value);
    localStorage.setItem("menuId", value);
    window.location.replace("/review");
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
      let myLike = this.state.myLike;
      for (let i = 0; i < myLike.length; i++) {
        try {
          menulist.push(
            <div
              className="card col-md-4"
              onClick={this.handleClickMenu(myLike[i]["menuId"])}
            >
              <div className="row no-gutters">
                <img
                  style={{ height: 250 }}
                  className="card-img-top"
                  src={myLike[i]["image"]}
                  alt="Card image"
                />
                <div className="card-body">
                  <h6 className="card-title">{myLike[i]["name"]}</h6>
                  <p className="text-success">{myLike[i]["cafeName"]}</p>
                  <ul className="rating-stars">
                    <span>평점: {myLike[i]["grade"]}&nbsp;</span>
                    <span style={{ color: "gray", fontSize: 10 }}>
                      &nbsp;조회수: {myLike[i]["click"]}
                    </span>
                    <span style={{ color: "gray", fontSize: 10 }}>
                      &nbsp;좋아요수: {myLike[i]["good"]}
                    </span>
                    <ReactStars
                      style={{ display: "inline-flex" }}
                      edit={false}
                      activeColor="#ffc107"
                      value={myLike[i]["grade"]}
                      size={15}
                      isHalf={true}
                    />
                  </ul>
                  <div className="price-wrap">
                    <span className="price h5">{myLike[i]["price"]}원</span>
                  </div>
                  <br />
                </div>
              </div>
            </div>
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
                    <span className='mr-md-auto'>{myLike.length} Items found </span>
                  </div>
                </header>

                <div className="row">{menulist}</div>
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

export default Mylike;
