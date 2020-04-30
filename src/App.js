import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Layouts/Content';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
