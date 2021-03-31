import React from "react";
import styled from "styled-components";

/*global kakao*/
const api_key = process.env.REACT_APP_KAKAOMAP_API;
class Map extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${api_key}&libraries=LIBRARY`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    };
  }
  render() {
    return (
      <>
        <Maps id="map"></Maps>
      </>
    );
  }
}
const Maps = styled.div`
  width: 100vw;
  height: 100vh;
`;

// const Head = styled.h1`
// text-align: center;
// `

export default Map;
