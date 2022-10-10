import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './resume'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Routes>
      <Route path="/" element={<Resume/>}/>
      {/* <Route path="/resume" element={<Resume/>}/> */}
    </Routes>
  </Router>
)