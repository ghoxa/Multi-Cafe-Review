import React from 'react';
import './App.css';
import Header from './components/layout/header.jsx';
import Comtent from './components/layout/content.jsx';
import Footer from './components/layout/footer.jsx';
class App extends React.Component {
  /*state = {
    logged: false,
    onLogin: this.onLogin,
    onLogout: this.onLogout
  }

  onLogin = () => {
    this.setState({
      logged: true
    });
  }

  onLogout = () => {
    this.setState({
      logged: false
    });
  }*/
  // Header 안에 logged={this.state.logged} onLogout={this.state.onLogout} 
  render() {
    return (
      <div>
        <Header />
        <Comtent />
        <Footer />
      </div>
    );
  }
}
export default App;
