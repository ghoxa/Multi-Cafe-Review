import React from 'react';
import './App.css';
import Header from './components/layout/header.jsx';
import Content from './components/layout/content.jsx';
import Footer from './components/layout/footer.jsx';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />        
        <Content />
        <Footer />
      </div>
    );
  }
}
export default App;
