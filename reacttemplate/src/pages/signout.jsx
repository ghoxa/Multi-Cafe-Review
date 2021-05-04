// 로그아웃 할 경우

import React from 'react';
import axios from 'axios';
class SignOut extends React.Component {
  componentDidMount() {
    Promise.all([axios.get('http://localhost:9090/multicafe/api/login')])
      .then(([res]) => {
        alert('로그아웃');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('admin');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userId');
        window.location.replace('/');
      }) // 로그인시 저장했던 로컬스토리지 모두 삭제
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <></>;
  }
}

export default SignOut;
