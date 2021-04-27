import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { kakao } = window;

const api_key = process.env.REACT_APP_KAKAOMAP_RESTAPI;
const MapContainer = ({ searchPlace }) => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('카페');

  useEffect(() => {
    let completed = false; //초기에는 실행해야 되기때문에 false flag 변수
    let lat = '';
    let lon = '';
    //query를 리턴하는 함수를 result에 할당
    async function get() {
      const result = await axios.get(`https://dapi.kakao.com/v2/local/search/category.json?category_group_code=CE7&radius=20000&x=37.514322572335935&y=127.06283102249932`, {
        headers: {
          Authorization: `KakaoAK ${api_key}`,
        },
      });
      if (!completed) setData(result.data);

      console.log(result.data);
      console.log(api_key);
    }
    get();
    let bounds = new kakao.maps.LatLngBounds();
    for (let i = 0; i < data.length; i++) {
      displayMarker(data[i]);
      bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        this.options.cn;
        let locPosition = new kakao.maps.LatLng(lat, lon),
          message = '<div style="padding:5px;">여기에 계신가요?!</div>';

        // 마커와 인퍼윈도우를 표시합닌다.
        displayMarker(locPosition, message);
      });
    }

    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수
    function displayMarker(place) {
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
  }, [searchPlace]);

  return (
    <div
      id='myMap'
      style={{
        width: '900px',
        height: '525px',
      }}
    ></div>
  );
};

export default MapContainer;
