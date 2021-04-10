import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/*global kakao*/
const api_key = process.env.REACT_APP_KAKAOMAP_API;
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
    };
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
    console.log("위도=" + this.state.lat);
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${api_key}&libraries=LIBRARY`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(this.state.lat, this.state.lon),
          level: 7,
        };
        const map = new window.kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(
          this.state.lat,
          this.state.lon
        );
        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }
  render() {
    return (
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <div className="card">
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_1"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">CATEGORY</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_1">
                    <div className="card-body">
                      <ul className="list-menu">
                        <li>모든카테고리</li>
                      </ul>
                    </div>
                  </div>
                </article>
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
                      <h6 className="title">지도</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_2">
                    <div className="card-body">
                      <ul className="list-menu">
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </article>

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
                          <a href="/mylike">찜 목록 </a>
                        </li>
                        <li>
                          <a href="/myrecent">최근 본 메뉴 </a>
                        </li>
                        <li>
                          <Link to="/myreview">내 리뷰 관리</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
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
                  <div className="filter-content collapse show" id="collapse_3">
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
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main className="col-md-9">
              <Maps id="map"></Maps>
            </main>
          </div>
        </div>
      </section>
    );
  }
}
const Maps = styled.div`
  width: 60vw;
  height: 75vh;
`;

// const Head = styled.h1`
// text-align: center;
// `

export default Map;
