import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { Table } from "react-bootstrap";
import { CircularProgress } from "@material-ui/core";
import WriteReview from "./writereview";
import WarningReview from "./warningreview";
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
      menuReivew: [],
      selectMenuCheck: [],
      selectMenu: [],
      similarMenuByKeyWord: [],
      isLoaded: false,
      login: localStorage.getItem("isLogin"),
      admin: localStorage.getItem("admin"),
    };
    this.onlikeChanged.bind(this);
    this.reviewlikeChanged.bind(this);
  }

  onlikeChanged = (e) => {
    const menuId = localStorage.getItem("menuId");
    const userId = localStorage.getItem("userId");
    let likeCheckUrl = "";
    let changeLikeUrl = "";
    if (this.state.login) {
      changeLikeUrl = axios.get(
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/menu/${menuId}/like`
      );
      likeCheckUrl = axios.get(
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/${menuId}/likecheck`
      );

      Promise.all([changeLikeUrl, likeCheckUrl])
        .then(([res1, res2]) => {
          console.log(res1.data);
          console.log(res2.data);
          this.setState({
            myLike: !res2.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("로그인 후 이용해 주세요");
    }
  };
  reviewlikeChanged = (e) => {
    this.setState({
      isLoaded: false,
    });

    const menuId = localStorage.getItem("menuId");
    if (this.state.login) {
      Promise.all([
        axios.get(
          `https://multicafe-server.xyz/Multi-Cafe-Review/api/review/${menuId}`
        ),
      ]).then(([res]) => {
        console.log(res[0]);
        localStorage.setItem("reviewId", res.data[e].reviewId);
        console.log(localStorage.getItem("reviewId"));
        const reviewId = localStorage.getItem("reviewId");
        console.log(reviewId);
        console.log(this.state.review);
        const userId = localStorage.getItem("userId");
        const isMyLike = axios.get(
          `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/${reviewId}/MyReviewCheck`
        );
        Promise.all([isMyLike])
          .then(([res]) => {
            this.setState({
              myReviewCheck: res.data,
            });
            console.log(this.state.myReviewCheck);
            if (this.state.myReviewCheck) {
              alert("본인 리뷰입니다.");
              return;
            } else {
              console.log(userId);
              const changeReviewLikeUrl = axios.get(
                `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/review/${reviewId}/like`
              );
              const ReviewgoodCheckUrl = axios.get(
                `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/${reviewId}/ReviewLikecheckIn`
              );
              Promise.all([ReviewgoodCheckUrl])
                .then(([res2]) => {
                  this.setState({
                    reviewgood: res2.data,
                  });
                  localStorage.setItem("reviewgood", this.state.reviewgood);
                  console.log(
                    document.getElementsByClassName("goood")[e].innerHTML
                  );
                  // if (this.state.reviewgood) {
                  //   this.state.reviewLike[e] = 0;
                  //   this.state.menuReivew[e].good-=1;
                  //   document.querySelectorAll('i')[e+3].className='far fa-heart';
                  // } else {
                  //   this.state.reviewLike[e] = 1;
                  //   this.state.menuReivew[e].good+=1;
                  //   document.querySelectorAll('i')[e+3].className='fa fa-heart';
                  // }
                })

                .catch((err) => {
                  console.log(err);
                });
              Promise.all([changeReviewLikeUrl])
                .then(([res1]) => {
                  console.log(res1);
                  if (
                    document.querySelectorAll("i")[e + 3].className ==
                    "far fa-heart"
                  ) {
                    document.getElementsByClassName("goood")[e].innerHTML =
                      parseInt(
                        document.getElementsByClassName("goood")[e].innerHTML
                      ) + 1;
                    document.querySelectorAll("i")[e + 3].className =
                      "fa fa-heart";
                  } else {
                    document.getElementsByClassName("goood")[e].innerHTML =
                      parseInt(
                        document.getElementsByClassName("goood")[e].innerHTML
                      ) - 1;
                    document.querySelectorAll("i")[e + 3].className =
                      "far fa-heart";
                  }
                })

                .catch((err) => {
                  console.log(err);
                });
            }
          })
          .catch((err) => {
            console.log(err);
          });
        setTimeout(() => {
          // window.location.replace('/review');
        }, 500); //ㅡ,ㅡ 과유불급
      });
    } else {
      alert("로그인 후 이용해 주세요");
    }
    this.setState({
      isLoaded: true,
    });
  };
  componentDidMount() {
    localStorage.setItem("pageNo", 1);
    localStorage.setItem("reviewConditionId", 0);

    const menuId = localStorage.getItem("menuId");
    const userId = localStorage.getItem("userId");
    let selectMenuCheckUrl = "";
    let likeCheckUrl = "";
    let ReviewLikeCheckUrl = "";
    let menuReivewUrl = "";

    if (this.state.login) {
      if (this.state.admin) {
        selectMenuCheckUrl = axios.get(
          `https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/${menuId}`
        );
      } else {
        selectMenuCheckUrl = axios.get(
          `https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/check/${menuId}/${userId}`
        );
      }
    } else {
      selectMenuCheckUrl = axios.get(
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/${menuId}`
      );
    }

    menuReivewUrl = axios.get(
      // 리뷰 list
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/review/${menuId}/list/1`
    );

    if (this.state.login) {
      //로그인 되어 있을 때
      likeCheckUrl = axios.get(
        // 메뉴 좋아요 눌렀는지 check
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/${menuId}/likecheck`
      );
      ReviewLikeCheckUrl = axios.get(
        // 리뷰 좋아요 눌렀는지 check
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/${menuId}/ReviewLikecheck`
      );
    }

    const similarMenuByKeyWordUrl = axios.get(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/${menuId}/recommend/keyword`
    );
    const similarMenuByTasteUrl = axios.get(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/${menuId}/recommend/taste`
    );

    Promise.all([
      menuReivewUrl,
      selectMenuCheckUrl,
      similarMenuByKeyWordUrl,
      similarMenuByTasteUrl,
      likeCheckUrl,
      ReviewLikeCheckUrl,
    ])
      .then(([res, res2, res3, res4, res5, res6]) => {
        this.setState({
          menuReivew: res.data,
          selectMenuCheck: res2.data,
          similarMenuByKeyWord: res3.data,
          similarMenuByTaste: res4.data,
          myLike: res5.data,
          // selectMenu: res6.data,
          reviewLike: res6.data,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // window.location.replace('/review');
  }
  //   componentDidUpdate(prevProps) {
  //     아주 위험한 방법 무한루프 돌면 요금 과금 될수도 있다.
  //     const menuId = localStorage.getItem('menuId');
  //     const userId = localStorage.getItem('userId');
  //     let selectMenuCheckUrl = '';
  //     this.state.login
  //       ? (selectMenuCheckUrl = axios.get(`https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/check/${menuId}/${userId}`))
  //       : (selectMenuCheckUrl = axios.get(`https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/${menuId}`));
  //       Promise.all([ selectMenuCheckUrl])
  //       .then(([res]) => {
  //         this.setState({
  //           selectMenuCheck: res.data,
  //         });
  //       })

  //  }
  handleClickCondition = (value) => () => {
    localStorage.setItem("reviewConditionId", value);
    this.stateRefresh();
  };

  handleClick = (value) => () => {
    localStorage.setItem("menuId", value);
    window.location.replace("/review");
  };

  handleClickPageNo = (No) => () => {
    localStorage.setItem("pageNo", No);
    this.stateRefresh();
  };

  similarcreateListOfsimilarMenuByKeyword() {
    let list = [];
    for (let i = 0; i < this.state.similarMenuByKeyWord.length; ++i) {
      list.push(
        <SwiperSlide>
          <a
            onClick={this.handleClick(
              this.state.similarMenuByKeyWord[i].menuId
            )}
            style={{ textAlign: "center" }}
          >
            <img
              src={this.state.similarMenuByKeyWord[i].image}
              alt="..."
              style={{ width: 200, height: 200 }}
            />
            <div>{this.state.similarMenuByKeyWord[i].cafeName}</div>
            <div className="lead font-weight-bold" style={{ fontSize: 15 }}>
              {this.state.similarMenuByKeyWord[i].name}
            </div>
          </a>
        </SwiperSlide>
      );
    }
    return list;
  }
  similarcreateListOfsimilarMenuByTaste() {
    let list = [];
    for (let i = 0; i < this.state.similarMenuByTaste.length; ++i) {
      list.push(
        <SwiperSlide>
          <a
            onClick={this.handleClick(this.state.similarMenuByTaste[i].menuId)}
            style={{ textAlign: "center" }}
          >
            <img
              src={this.state.similarMenuByTaste[i].image}
              className="cafeImg"
              alt="..."
              style={{ width: 200, height: 200 }}
            />
            <div>{this.state.similarMenuByTaste[i].cafeName}</div>
            <div className="lead font-weight-bold" style={{ fontSize: 15 }}>
              {this.state.similarMenuByTaste[i].name}
            </div>
          </a>
        </SwiperSlide>
      );
    }
    return list;
  }

  createListOfReview() {
    let list = [];
    if (!this.state.login) {
      this.state.reviewLike = [0 * this.state.menuReivew.length];
    }
    if (this.state.isLoaded) {
      let reviweList = this.state.menuReivew.reviewList;
      for (let i = 0; i < reviweList.length; ++i) {
        list.push(
          <tr>
            <td>{reviweList[i].userId}</td>
            <td>{reviweList[i].content}</td>
            <td>
              <ReactStars
                edit={false}
                activeColor="#ffc107"
                value={reviweList[i].sweet}
                size={20}
                isHalf={true}
              />
            </td>
            <td>
              <ReactStars
                edit={false}
                activeColor="#ffc107"
                value={reviweList[i].bitter}
                size={20}
                isHalf={true}
              />
            </td>
            <td>
              <ReactStars
                edit={false}
                activeColor="#ffc107"
                value={reviweList[i].sour}
                size={20}
                isHalf={true}
              />
            </td>
            <td style={{ textAlign: "center" }}>{reviweList[i].grade}</td>
            <td>
              <span className="goood">{reviweList[i].good}</span>&nbsp;
              <a className="btn" onClick={() => this.reviewlikeChanged(i)}>
                <i
                  style={{ color: "red" }}
                  className={
                    this.state.reviewLike[i] == 1
                      ? "fa fa-heart"
                      : "far fa-heart"
                  }
                ></i>
              </a>
            </td>
            <td>
              <WarningReview reviewId={reviweList[i].reviewId} />
            </td>
          </tr>
        );
      }
      return list;
    }
  }

  showMenuInfo() {
    let info = [];
    const { selectMenuCheck } = this.state;
    info.push(
      <div className="row wow fadeIn">
        {/*Grid column*/}
        <span className="col-md-6 mb-4">
          <div>
            <div style={{ fontSize: 30 }}>
              평점 &nbsp;{selectMenuCheck.grade}
            </div>
            <ReactStars
              edit={false}
              activeColor="#ffc107"
              value={selectMenuCheck.grade}
              size={35}
              isHalf={true}
            />
          </div>

          <img
            src={selectMenuCheck.image}
            className="img-fluid"
            style={{ width: "80%", height: "80%" }}
            alt
          />
        </span>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-md-6 mb-4" st>
          {/*Content*/}

          <div className="p-4" style={{ fontSize: 20 }}>
            <div className="lead font-weight-bold">
              {selectMenuCheck.cafeName}
            </div>
            <br />
            <span className="lead font-weight-bold" style={{ fontSize: 25 }}>
              {selectMenuCheck.name}{" "}
            </span>

            <a className="btn" onClick={() => this.onlikeChanged()}>
              <i
                style={{ color: "red" }}
                className={this.state.myLike ? "fa fa-heart" : "far fa-heart"}
              ></i>
            </a>

            <p className="lead font-weight-bold">
              <span>{selectMenuCheck.price}원 </span>
            </p>
            <p>{selectMenuCheck.description}</p>
            <br />
            <br />
            <br />
            <br />
            <div className="col-md-6 text-right">
              <div className="rating-wrap mb-3">
                단맛: &nbsp;
                <ul className="rating-stars">
                  <ReactStars
                    edit={false}
                    activeColor="#ffc107"
                    value={selectMenuCheck.sweet}
                    size={25}
                    isHalf={true}
                  />
                </ul>
              </div>
              <div className="rating-wrap mb-3">
                쓴맛: &nbsp;
                <ul className="rating-stars">
                  <ReactStars
                    edit={false}
                    activeColor="#ffc107"
                    value={selectMenuCheck.bitter}
                    size={25}
                    isHalf={true}
                  />
                </ul>
              </div>
              <div className="rating-wrap mb-3">
                {selectMenuCheck.categoryId == 3000 ? "산미" : "신맛"}: &nbsp;
                <ul className="rating-stars">
                  <ReactStars
                    edit={false}
                    activeColor="#ffc107"
                    value={selectMenuCheck.sour}
                    size={25}
                    isHalf={true}
                  />
                </ul>
              </div>
            </div>
            <form className="d-flex justify-content-left">
              {/* Default input */}
            </form>
          </div>
          {/*Content*/}
        </div>
        {/*Grid column*/}
      </div>
    );
    return info;
  }
  // 리뷰목록만 새로고침
  stateRefresh = () => {
    this.setState({
      menuReivew: [],
      isLoaded: false,
    });
    // this.calMenuInfo();
    this.callReviewList();
    // this.showMenuInfo(); //나중에 해결
    this.createListOfReview();
    //window.location.replace('/review');
  };
  // 비동기통신으로 리뷰리스트 받아와서 menuReivew에 저장
  callReviewList = async () => {
    const userId = localStorage.getItem("userId");
    const reviewConditionId = localStorage.getItem("reviewConditionId");
    const menuId = localStorage.getItem("menuId");
    const pageno = localStorage.getItem("pageNo");

    const res = await axios.get(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/review/${menuId}/list/${userId}/${reviewConditionId}/${pageno}`
    );
    console.log(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/review/${menuId}/list/${userId}/${reviewConditionId}/${pageno}`
    );
    console.log(res.data);
    this.setState({
      menuReivew: res.data,
      isLoaded: true,
    });
  };
  calMenuInfo = async () => {
    const menuId = localStorage.getItem("menuId");
    const userId = localStorage.getItem("userId");
    let selectMenuCheckUrl = "";
    this.state.login
      ? (selectMenuCheckUrl = axios.get(
          `https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/check/${menuId}/${userId}`
        ))
      : (selectMenuCheckUrl = axios.get(
          `https://multicafe-server.xyz/Multi-Cafe-Review/api/menu/${menuId}`
        ));
    const res = await selectMenuCheckUrl;
    this.setState({
      selectMenuCheck: res.data,
      isLoaded: true,
    });
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

  sortList() {
    const reviewConditionId = localStorage.getItem("reviewConditionId");

    if (reviewConditionId == 0) return "최신 순";
    else if (reviewConditionId == 2) return "좋아요 순";
    else if (reviewConditionId == 1) return "내 취향순";
    else return "정렬순서";
  }
  // writeban = (e) => {
  //   const menuId = localStorage.getItem('menuId');
  //   const userId = localStorage.getItem('userId');
  //   if (this.state.login) {
  //     const writebanUrl = axios.get(`https://multicafe-server.xyz/Multi-Cafe-Review/api/user/menu/${menuId}/review/${userId}`);
  //     Promise.all([writebanUrl])
  //       .then(([res]) => {
  //         console.log(res.data);
  //         if (res.data) {
  //           window.location.replace('/writereview');
  //         }
  //       })
  //       .catch((err) => {
  //         alert('이미 등록한 리뷰입니다.');
  //         console.log(err);
  //       });
  //   } else {
  //     alert('로그인 후 이용해 주세요');
  //   }
  // };

  render() {
    const { selectMenuCheck, isLoaded } = this.state;
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
      let showsimimenukeyword = this.state.similarMenuByKeyWord.length;
      if (showsimimenukeyword > 5) {
        showsimimenukeyword = 5;
      }
      let showsimimenutaste = this.state.similarMenuByTaste.length;
      if (showsimimenutaste > 5) {
        showsimimenutaste = 5;
      }

      return (
        <div>
          <div>
            {/*Main layout*/}

            <main className="mt-5 pt-4">
              <div className="container dark-grey-text mt-5">
                {/*Grid row*/}
                {this.showMenuInfo()}
                {/*Grid row*/}
                <hr />
                {/*Grid row*/}
                <div className="row d-flex justify-content-center wow fadeIn">
                  {/*Grid column*/}

                  <Link to="/home">
                    <button
                      className="btn btn-primary btn-md my-0 p"
                      type="submit"
                      style={{ height: "70px" }}
                    >
                      목록 보기
                    </button>
                  </Link>

                  {/* 리뷰 추가하기 */}
                  <WriteReview stateRefresh={this.stateRefresh} />

                  {/*Grid column*/}
                </div>
                <br />
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {this.sortList()}
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      onClick={this.handleClickCondition(0)}
                    >
                      최신순
                    </a>
                    <a
                      class="dropdown-item"
                      onClick={this.handleClickCondition(2)}
                    >
                      좋아요순
                    </a>
                    <a
                      class="dropdown-item"
                      onClick={this.handleClickCondition(1)}
                    >
                      내 취향순
                    </a>
                  </div>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>이름</th>
                      <th>리뷰내용</th>
                      <th>단맛</th>
                      <th>쓴맛</th>
                      <th>신맛</th>
                      <th>평점</th>
                      <th>좋아요</th>
                      <th>신고</th>
                    </tr>
                  </thead>
                  <tbody>{this.createListOfReview()}</tbody>
                </Table>

                <nav className="mt-4" aria-label="Page navigation sample">
                  {this.printPageNav()}
                </nav>

                {/* <BootstrapTable keyField='id' data={products} columns={this.state.columns} /> */}
                {/*Grid row*/}
                {/*Grid row*/}
                <br />
                <div className="lead font-weight-bold" style={{ fontSize: 20 }}>
                  키워드 기반 메뉴 추천
                </div>
                <br />
                <div className="row wow fadeIn">
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={showsimimenukeyword}
                    onSlideChange={() => console.log("slide change")}
                    on
                    Swiper={(swiper) => console.log("swiper")}
                  >
                    {/*Grid column*/}
                    {this.similarcreateListOfsimilarMenuByKeyword()}

                    {/*Grid column*/}
                  </Swiper>
                </div>
                <br />

                <div className="lead font-weight-bold" style={{ fontSize: 20 }}>
                  맛 기반 메뉴 추천
                </div>
                <br />
                <div className="row wow fadeIn">
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={showsimimenutaste}
                    onSlideChange={() => console.log("slide change")}
                    on
                    Swiper={(swiper) => console.log("swiper")}
                  >
                    {/*Grid column*/}
                    {this.similarcreateListOfsimilarMenuByTaste()}

                    {/*Grid column*/}
                  </Swiper>
                </div>
                {/*Grid row*/}
              </div>
            </main>
            {/*Main layout*/}
            {/*Footer*/}
            <footer className="page-footer text-center font-small mt-4 wow fadeIn">
              {/*Call to action*/}

              {/*/.Call to action*/}
              <hr className="my-4" />
              {/* Social icons */}
              <div className="pb-4">
                <a href="https://www.facebook.com/mdbootstrap" target="_blank">
                  <i className="fab fa-facebook-f mr-3" />
                </a>
                <a href="https://twitter.com/MDBootstrap" target="_blank">
                  <i className="fab fa-twitter mr-3" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4"
                  target="_blank"
                >
                  <i className="fab fa-youtube mr-3" />
                </a>
                <a
                  href="https://plus.google.com/u/0/b/107863090883699620484"
                  target="_blank"
                >
                  <i className="fab fa-google-plus-g mr-3" />
                </a>
                <a href="https://dribbble.com/mdbootstrap" target="_blank">
                  <i className="fab fa-dribbble mr-3" />
                </a>
                <a href="https://pinterest.com/mdbootstrap" target="_blank">
                  <i className="fab fa-pinterest mr-3" />
                </a>
                <a
                  href="https://github.com/mdbootstrap/bootstrap-material-design"
                  target="_blank"
                >
                  <i className="fab fa-github mr-3" />
                </a>
                <a href="http://codepen.io/mdbootstrap/" target="_blank">
                  <i className="fab fa-codepen mr-3" />
                </a>
              </div>
              {/* Social icons */}
              {/*Copyright*/}
              <div className="footer-copyright py-3">
                © 2021 Copyright: Oh!Cafe{" "}
              </div>
              {/*/.Copyright*/}
            </footer>
          </div>
        </div>
      );
    }
  }
}
export default ReviewPage;
