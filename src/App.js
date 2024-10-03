import React from 'react';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './assets/css/main.css';  // assuming you are keeping your custom CSS in assets folder


function App() {
  return (
    <div>
      <Header />
      <Main />
      {/* <PortfolioPage/> */}
      <Footer />
    </div>
  );
}

export default App;
