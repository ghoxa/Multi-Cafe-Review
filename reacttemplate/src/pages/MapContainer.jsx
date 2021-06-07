import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/*global kakao*/
const js_key = process.env.REACT_APP_KAKAOMAP_JAVASCRIPTAPI;
const rest_key = process.env.REACT_APP_KAKAOMAP_RESTAPI;
class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: [],
      lat: "",
      lon: "",
    };
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${js_key}&libraries=LIBRARY?autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      console.log("componentDidMount");
      let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      let mapContainer = document.getElementById("myMap");
      let mapOption = {
        center: new kakao.maps.LatLng(37.5677463677699, 126.9153946742084), //지도의 중심좌표
        level: 6,
      };
      let map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          localStorage.setItem("lat", this.state.lat);
          localStorage.setItem("lon", this.state.lon);
          let locPosition = new kakao.maps.LatLng(
              this.state.lat,
              this.state.lon
            ),
            message = '<div style="padding:5px;">내 위치</div>';
          // 마커와 인퍼윈도우를 표시합닌다.

          displayMarker(locPosition, message);
        });
      } else {
        let locPosition = new kakao.maps.LatLng(
            37.5677463677699,
            126.9153946742084
          ),
          message = "위치정보를 사용할 수 없어요..";

        displayMarker(locPosition, message);
      }
      let mapUrl = "";
      const mapId = localStorage.getItem("mapId");
      const getlat = localStorage.getItem("lat");
      const getlon = localStorage.getItem("lon");
      console.log(getlat, getlon);
      const config = {
        headers: {
          Authorization: `KakaoAK ${rest_key}`,
        },
      };
      if (mapId == "all") {
        mapUrl = axios.get(
          `https://dapi.kakao.com/v2/local/search/category.json?category_group_code=CE7&radius=20000&y=${getlat}&x=${getlon}`,
          config
        );
      } else {
        mapUrl = axios.get(
          `https://dapi.kakao.com/v2/local/search/keyword.json?query=${mapId}&radius=20000&y=${getlat}&x=${getlon}`,
          config
        );
      }
      const cafeUrl = axios.get(
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/cafe`
      );

      Promise.all([mapUrl, cafeUrl])
        .then(([res, res2]) => {
          this.setState({
            data: res.data,
            cafe: res2.data,
            isLoaded: true,
          });
          console.log(this.state.data);
          console.log(this.state.cafe);
          for (let i = 0; i < this.state.data.documents.length; i++) {
            displayMarker2(this.state.data.documents[i]);
            bounds.extend(
              new kakao.maps.LatLng(
                this.state.data.documents[i].y,
                this.state.data.documents[i].x
              )
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
      let bounds = new kakao.maps.LatLngBounds();

      // 지도에 마커를 표시하는 함수
      function displayMarker2(place) {
        // 마커를 생성하고 지도에 표시
        var imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(44, 49), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new kakao.maps.LatLng(place.y, place.x); // 마커가 표시될 위치입니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          // image: markerImage, // 마커이미지 설정
        });

        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출

          infowindow.setContent(
            '<div style="padding-top:10px;padding-left:20px;font-size:12px;width:200px;height:30px">' +
              place.place_name +
              '</div><div style="padding-top:3px;padding-left:20px;font-size:12px;width:200px;height:30px">' +
              place.phone +
              '</div><div style="padding-left:20px;font-size:12px;width:200px;height:30px">' +
              place.address_name +
              "</div>"
          );
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

        // infowindow.open(map, marker);

        map.setCenter(locPosition);
      }
    };
  }

  render() {
    return (
      <div
        id="myMap"
        style={{
          width: "900px",
          height: "525px",
        }}
      ></div>
    );
  }
}

export default MapContainer;
