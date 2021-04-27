import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MapContainer from './MapContainer';
import SearchPlace from './SearchPlace';
/*global kakao*/
const api_key = process.env.REACT_APP_KAKAOMAP_JAVASCRIPTAPI;
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lon: '',
    };
  }
  componentDidMount() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.watchPosition((position) => {
    //     this.setState({
    //       lat: position.coords.latitude,
    //       lon: position.coords.longitude,
    //     });
    //   });
    // }
    // console.log('위도=' + this.state.lat);
    // const script = document.createElement('script');
    // script.async = true;
    // script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${api_key}&libraries=LIBRARY`;
    // document.head.appendChild(script);
    // script.onload = () => {
    //   kakao.maps.load(() => {
    //     let container = document.getElementById('map');
    //     let options = {
    //       center: new kakao.maps.LatLng(this.state.lat, this.state.lon),
    //       level: 7,
    //     };
    //     const map = new window.kakao.maps.Map(container, options);
    //     var markerPosition = new kakao.maps.LatLng(this.state.lat, this.state.lon);
    //     var marker = new kakao.maps.Marker({
    //       position: markerPosition,
    //     });
    //     marker.setMap(map);
    //   });
    // };
  }
  render() {
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
                      <div>{this.state.lat}</div>
                      <span>{this.state.lon}</span>
                      <h6 className='title'>CATEGORY</h6>
                    </a>
                  </header>
                  <div className='filter-content collapse show' id='collapse_1'>
                    <div className='card-body'>
                      <ul className='list-menu'>
                        <li>
                          <a href='/mylike'>모든카페</a>
                        </li>
                        <li>
                          <a href='/myrecent'>메가커피 </a>
                        </li>
                        <li>
                          <a href='/myrecent'>스타벅스 </a>
                        </li>{' '}
                        <li>
                          <a href='/myrecent'>요거프레소 </a>
                        </li>{' '}
                        <li>
                          <a href='/myrecent'>이디야 </a>
                        </li>{' '}
                        <li>
                          <a href='/myrecent'>커피빈 </a>
                        </li>{' '}
                        <li>
                          <a href='/myrecent'>탐앤탐스 </a>
                        </li>{' '}
                        <li>
                          <a href='/myrecent'>투썸플레이스 </a>
                        </li>
                        <li>
                          <a href='/myrecent'>할리스 </a>
                        </li>{' '}
                        <li>
                          <a href='/myrecent'>백다방 </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main className='col-md-9'>
              {/* <Maps id='map'></Maps> */}
              <SearchPlace />
            </main>
          </div>
        </div>
      </section>
    );
  }
}
// const PopUp = styled.div`
//   width: 60vw;
//   height: 75vh;
// `;

// const Head = styled.h1`
// text-align: center;
// `

export default Map;
