import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import { Table } from 'react-bootstrap';
import { CircularProgress } from '@material-ui/core';
import DeleteReview from './deletereview';

class Admin_Warning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warnReview: [],
      reviewLike: [],
      isLoaded: false,
    };
  }
  handleClick = (value) => () => {
    // console.log(value);
    localStorage.setItem('reviewId', value);
  };
  componentDidMount() {
    const warnReviewUrl = axios.get(`http://localhost:9090/multicafe/api/admin/review/reports`);
    Promise.all([warnReviewUrl])
      .then(([res]) => {
        this.setState({
          warnReview: res.data,
          isLoaded: true,
        });
        console.log(this.state.warnReview);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  createListOfReview() {
    let list = [];

    //console.log(menuId);
    for (let i = 0; i < this.state.warnReview.length; ++i) {
      list.push(
        <tr style={{ height: '100px' }}>
          <td>{this.state.warnReview[i].cafeName}</td>
          <td>{this.state.warnReview[i].menuName}</td>
          <td>{this.state.warnReview[i].userId}</td>
          <td>{this.state.warnReview[i].content}</td>
          <td>
            <ReactStars edit={false} activeColor='#ffc107' value={this.state.warnReview[i].sweet} size={20} isHalf={true} />
          </td>
          <td>
            <ReactStars edit={false} activeColor='#ffc107' value={this.state.warnReview[i].bitter} size={20} isHalf={true} />
          </td>
          <td>
            <ReactStars edit={false} activeColor='#ffc107' value={this.state.warnReview[i].sour} size={20} isHalf={true} />
          </td>
          <td>
            {/* value={this.state.menuReivew[i].acidity} */}
            <ReactStars edit={false} activeColor='#ffc107' value={this.state.warnReview[i].sour} size={20} isHalf={true} />
          </td>
          <td style={{ textAlign: 'center' }}>{this.state.warnReview[i].grade}</td>
          <td>
            <DeleteReview stateRefresh={this.stateRefresh} reviewId={this.state.warnReview[i].reviewId} />
          </td>
        </tr>
      );
    }
    return list;
  }
  // 리뷰목록만 새로고침
  stateRefresh = () => {
    this.setState({
      menuReivew: [],
      isLoaded: false
    });
    console.log("stateRefresh함수 실행");
    this.callReviewList();
    this.createListOfReview();

    this.setState({
      isLoaded: true
    });
  }
  // 비동기통신으로 리뷰리스트 받아와서 menuReivew에 저장
  callReviewList = async () => {
    const res = await axios.get(`http://localhost:9090/multicafe/api/admin/review/reports`);
    this.setState({
      warnReview: res.data
    });
    console.log("callReviewList함수 실행");
  }

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div id='loader' style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <CircularProgress />
        </div>
      );
    } else {
      return (
        <section className='section-content padding-y'>
          <div className='row'>
            <aside className='col-md-2' style={{ marginLeft: '100px', paddingRight: '100px' }}>
              <div className='card'>
                <article className="filter-group">
                    <header className="card-header">
                      <Link
                        to="/adminpage"
                        data-toggle="collapse"
                        data-target="#collapse_3"
                        aria-expanded="false"
                        className=""
                      >
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">관리자페이지</h6>
                      </Link>
                    </header>
                    <div
                      className="filter-content collapse show"
                      id="collapse_3"
                    >
                      <div className="card-body">
                        <ul className="list-menu">
                          <li>
                            <Link to="/admin_insert">메뉴 추가</Link>
                          </li>
                          <li>
                            <Link to="/admin_update">메뉴 수정</Link>
                          </li>
                          <li>
                            <Link to="/admin_cafe">카페 관리</Link>
                          </li>
                          <li>
                            <Link to="/admin_warning">리뷰 신고 관리</Link>
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
                  <span className='mr-md-auto'>{this.state.warnReview.length} Items found </span>
                </div>
              </header>

              {/* myReview */}
              <div className='cardmypage'></div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>카페</th>
                    <th>메뉴</th>
                    <th>이름</th>
                    <th>리뷰내용</th>
                    <th>단맛</th>
                    <th>쓴맛</th>
                    <th>신맛</th>
                    <th>산미</th>
                    <th>평점</th>
                    <th style={{ textAlign: 'center' }}>삭제</th>
                  </tr>
                </thead>
                <tbody>{this.createListOfReview()}</tbody>
              </Table>
              {/* myReview */}

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
        </section>
      );
    }
  }
}

export default Admin_Warning;