
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure AOS styles are imported

// Initialize AOS
AOS.init();

ReactDOM.render(<App />, document.getElementById('root'));
