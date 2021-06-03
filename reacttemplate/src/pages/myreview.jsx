import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { Table } from "react-bootstrap";
import { CircularProgress } from "@material-ui/core";
import DeleteReview from "./deletereview";
import ModifyReview from "./modifyreview";
class MyReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuReivew: [],
      reviewLike: [],
      isLoaded: false,
    };
  }
  handleClick = (value) => () => {
    // console.log(value);
    localStorage.setItem("reviewId", value);
  };
  componentDidMount() {
    const userId = localStorage.getItem("userId");
    console.log(typeof userId);
    const menuReivewUrl = axios.get(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/review/my/${userId}`
    );
    Promise.all([menuReivewUrl])
      .then(([res1]) => {
        this.setState({
          menuReivew: res1.data,
          isLoaded: true,
        });
        console.log(this.state.menuReivew);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  createListOfReview() {
    let list = [];

    //console.log(menuId);
    for (let i = 0; i < this.state.menuReivew.length; ++i) {
      list.push(
        <tr style={{ height: "100px" }}>
          <td>{this.state.menuReivew[i].cafeName}</td>
          <td>{this.state.menuReivew[i].menuName}</td>
          <td>{this.state.menuReivew[i].userId}</td>
          <td>{this.state.menuReivew[i].content}</td>
          <td>
            <ReactStars
              edit={false}
              activeColor="#ffc107"
              value={this.state.menuReivew[i].sweet}
              size={20}
              isHalf={true}
            />
          </td>
          <td>
            <ReactStars
              edit={false}
              activeColor="#ffc107"
              value={this.state.menuReivew[i].bitter}
              size={20}
              isHalf={true}
            />
          </td>
          <td>
            <ReactStars
              edit={false}
              activeColor="#ffc107"
              value={this.state.menuReivew[i].sour}
              size={20}
              isHalf={true}
            />
          </td>
          <td style={{ textAlign: "center" }}>
            {this.state.menuReivew[i].grade}
          </td>
          <td>
            <ModifyReview
              stateRefresh={this.stateRefresh}
              reviewId={this.state.menuReivew[i].reviewId}
            />
          </td>
          <td>
            <DeleteReview
              stateRefresh={this.stateRefresh}
              reviewId={this.state.menuReivew[i].reviewId}
            />
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
      isLoaded: false,
    });
    console.log("stateRefresh함수 실행");
    this.callReviewList();
    this.createListOfReview();

    this.setState({
      isLoaded: true,
    });
  };
  // 비동기통신으로 리뷰리스트 받아와서 menuReivew에 저장
  callReviewList = async () => {
    const userId = localStorage.getItem("userId");
    const res = await axios.get(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/review/my/${userId}`
    );
    this.setState({
      menuReivew: res.data,
    });
    console.log("callReviewList함수 실행");
  };

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div
          id="loader"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          <CircularProgress />
        </div>
      );
    } else {
      return (
        <section className="section-content padding-y">
          <div className="row">
            <aside
              className="col-md-2"
              style={{ marginLeft: "100px", paddingRight: "100px" }}
            >
              <div className="card">
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_2"
                      aria-expanded="false"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">마이페이지</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_2">
                    <div className="card-body">
                      <ul className="list-menu">
                        <li>
                          <Link to="/formPage">개인정보수정 </Link>
                        </li>
                        <li>
                          <Link to="/mylike">찜 목록 </Link>
                        </li>
                        <li>
                          <Link to="/myrecent">최근 본 메뉴 </Link>
                        </li>
                        <li>
                          <Link to="/myreview">내 리뷰 관리 </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </aside>

            {/* 이 부분 부터 바뀐다 */}
            <main className="col-md-9">
              <header className="border-bottom mb-4 pb-3">
                <div className="form-inline">
                  <span className="mr-md-auto">
                    {this.state.menuReivew.length} Items found{" "}
                  </span>
                </div>
              </header>

              {/* myReview */}
              <div className="cardmypage"></div>
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
                    <th>평점</th>
                    <th style={{ textAlign: "center" }}>수정</th>
                    <th style={{ textAlign: "center" }}>삭제</th>
                  </tr>
                </thead>
                <tbody>{this.createListOfReview()}</tbody>
              </Table>
              {/* myReview */}

              <nav className="mt-4" aria-label="Page navigation sample">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
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

export default MyReview;
