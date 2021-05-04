import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";
/*global kakao*/
const api_key = process.env.REACT_APP_KAKAOMAP_JAVASCRIPTAPI;
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
    };
  }

  componentDidMount() {}
  handleClickMap = (value) => () => {
    localStorage.setItem("mapId", value);
    window.location.replace("/map");
  };
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
                        <li>
                          <a onClick={this.handleClickMap("all")}>모든카페</a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("메가커피")}>
                            메가커피
                          </a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("스타벅스")}>
                            스타벅스{" "}
                          </a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("요거프레소")}>
                            요거프레소{" "}
                          </a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("이디야")}>이디야 </a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("커피빈")}>커피빈 </a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("탐앤탐스")}>
                            탐앤탐스{" "}
                          </a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("투썸플레이스")}>
                            투썸플레이스{" "}
                          </a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("할리스")}>할리스 </a>
                        </li>
                        <li>
                          <a onClick={this.handleClickMap("백다방")}>백다방 </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main className="col-md-9">
              {/* <Maps id='map'></Maps> */}
              <MapContainer />
            </main>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;
