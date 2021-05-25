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
  handleClickPageNo = (No) => () => {
    localStorage.setItem("pageNo", No);
    this.stateRefresh();
  };

  componentDidMount() {
    const userId = localStorage.getItem("userId");
    localStorage.setItem("pageNo", 1);
    const menuReivewUrl = axios.get(
      `http://localhost:9090/multicafe/api/user/review/my/${userId}/1`
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
      let list = [];
      let reviews = this.state.menuReivew.reviewList;
      //console.log(menuId);
      for (let i = 0; i < reviews.length; ++i) {
        list.push(
          <tr style={{ height: "100px" }}>
            <td>{reviews[i].cafeName}</td>
            <td>{reviews[i].menuName}</td>
            <td>{reviews[i].userId}</td>
            <td>{reviews[i].content}</td>
            <td>
              <ReactStars
                edit={false}
                activeColor="#ffc107"
                value={reviews[i].sweet}
                size={20}
                isHalf={true}
              />
            </td>
            <td>
              <ReactStars
                edit={false}
                activeColor="#ffc107"
                value={reviews[i].bitter}
                size={20}
                isHalf={true}
              />
            </td>
            <td>
              <ReactStars
                edit={false}
                activeColor="#ffc107"
                value={reviews[i].sour}
                size={20}
                isHalf={true}
              />
            </td>
            <td style={{ textAlign: "center" }}>{reviews[i].grade}</td>
            <td>
              <ModifyReview
                stateRefresh={this.stateRefresh}
                reviewId={reviews[i].reviewId}
              />
            </td>
            <td>
              <DeleteReview
                stateRefresh={this.stateRefresh}
                reviewId={reviews[i].reviewId}
              />
            </td>
          </tr>
        );
      }
      return list;
    }
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
  };
  // 비동기통신으로 리뷰리스트 받아와서 menuReivew에 저장
  callReviewList = async () => {
    const pageNo = localStorage.getItem("pageNo");
    const userId = localStorage.getItem("userId");

    const res = await axios.get(
      `http://localhost:9090/multicafe/api/user/review/my/${userId}/${pageNo}`
    );

    this.setState({
      menuReivew: res.data,
      isLoaded: true,
    });
    console.log(this.state.menuReivew);
  };

  printPageNav() {
    const { menuReivew } = this.state;
    const pageNo = localStorage.getItem("pageNo");

    let pageList = [];

    if (menuReivew.prev == 0)
      pageList.push(
        <li className="page-item disabled">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
      );
    else {
      pageList.push(
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={this.handleClickPageNo(menuReivew.prev)}
          >
            Previous
          </a>
        </li>
      );
    }

    for (let i = menuReivew.start; i <= menuReivew.end; i++) {
      if (pageNo == i) {
        pageList.push(
          <li className="page-item active">
            <a
              className="page-link"
              href="#"
              onClick={this.handleClickPageNo(i)}
            >
              {i}
            </a>
          </li>
        );
      } else {
        pageList.push(
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={this.handleClickPageNo(i)}
            >
              {i}
            </a>
          </li>
        );
      }
    }

    if (menuReivew.next == 0)
      pageList.push(
        <li className="page-item disabled">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      );
    else {
      pageList.push(
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={this.handleClickPageNo(menuReivew.next)}
          >
            Next
          </a>
        </li>
      );
    }
    return <ul className="pagination justify-content-center">{pageList}</ul>;
  }

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
                    {this.state.menuReivew.count} Items found{" "}
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
                {this.printPageNav()}
              </nav>
            </main>
          </div>
        </section>
      );
    }
  }
}

export default MyReview;
