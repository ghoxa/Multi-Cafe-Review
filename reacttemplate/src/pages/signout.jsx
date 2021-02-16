import React from 'react';
import axios from 'axios';
class SignOut extends React.Component {
  componentDidMount() {
    Promise.all([axios.get('/api/login')])
      .then(([res]) => {
        console.log(res);
        console.log('get성공');
        alert('로그아웃');
        localStorage.setItem('isLogin', false);
        window.location.replace('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <></>;
  }
}

export default SignOut;
