import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/*global kakao*/
const js_key = process.env.REACT_APP_KAKAOMAP_JAVASCRIPTAPI;
const rest_key = process.env.REACT_APP_KAKAOMAP_RESTAPI;
class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: [],
      lat: '',
      lon: '',
    };
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${js_key}&libraries=LIBRARY?autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      console.log('componentDidMount');
      let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      let mapContainer = document.getElementById('myMap');
      let mapOption = {
        center: new kakao.maps.LatLng(37.5677463677699, 126.9153946742084), //지도의 중심좌표
        level: 3,
      };
      let map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          localStorage.setItem('lat', this.state.lat);
          localStorage.setItem('lon', this.state.lon);
          let locPosition = new kakao.maps.LatLng(this.state.lat, this.state.lon),
            message = '<div style="padding:5px;">내 위치</div>';
          // 마커와 인퍼윈도우를 표시합닌다.

          displayMarker(locPosition, message);
        });
      } else {
        let locPosition = new kakao.maps.LatLng(37.5677463677699, 126.9153946742084),
          message = '위치정보를 사용할 수 없어요..';

        displayMarker(locPosition, message);
      }

      const getlat = localStorage.getItem('lat');
      const getlon = localStorage.getItem('lon');
      console.log(getlat, getlon);
      const config = {
        headers: {
          Authorization: `KakaoAK ${rest_key}`,
        },
      };
      let url = axios.get(`https://dapi.kakao.com/v2/local/search/category.json?category_group_code=CE7&radius=20000&y=${getlat}&x=${getlon}`, config);

      Promise.all([url])
        .then(([res]) => {
          this.setState({
            data: res.data,
            isLoaded: true,
          });
          for (let i = 0; i < this.state.data.documents.length; i++) {
            displayMarker2(this.state.data.documents[i]);
            bounds.extend(new kakao.maps.LatLng(this.state.data.documents[i].y, this.state.data.documents[i].x));
          }
        })
        .catch((err) => {
          console.log(err);
        });
      let bounds = new kakao.maps.LatLngBounds();

      // 지도에 마커를 표시하는 함수
      function displayMarker2(place) {
        // 마커를 생성하고 지도에 표시
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, 'click', function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
        });
      }
      // 지도에 마커와 인포윈도우를 표시하는 함수입니다.
      function displayMarker(locPosition, message) {
        // 마커를 생성합니다.
        let marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
        });

        let iwContent = message,
          iwRemoveable = true;

        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        infowindow.open(map, marker);

        map.setCenter(locPosition);
      }
    };
  }

  render() {
    return (
      <div
        id='myMap'
        style={{
          width: '900px',
          height: '525px',
        }}
      ></div>
    );
  }
}

export default MapContainer;
