import React from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import MapContainer from "./MapContainer";
/*global kakao*/
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    const cafeUrl = axios.get(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/cafe`
    );

    Promise.all([cafeUrl])
      .then(([res]) => {
        this.setState({
          cafe: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleClickMap = (value) => () => {
    localStorage.setItem("mapId", value);
    window.location.replace("/map");
  };

  printCafeList() {
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
      let cafeList = [];
      let cafe = this.state.cafe;
      for (let i = 0; i < cafe.length; i++) {
        cafeList.push(
          <li>
            <a onClick={this.handleClickMap(cafe[i]["name"])}>
              {cafe[i]["name"]}
            </a>
          </li>
        );
      }
      return cafeList;
    }
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
                        <li>
                          <a onClick={this.handleClickMap("all")}>모든카페</a>
                        </li>
                        {this.printCafeList()}
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
