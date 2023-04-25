import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page3 } from './Page3';
import { Page4 } from './Page4';
import { Page5 } from './Page5';
import { Page6 } from './Page6';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Page1 />} />
        <Route exact path="/about" element = {<Page2 />} />
        <Route exact path="/memoirs" element = {<Page3 />} />
        <Route exact path="/weather" element = {<Page4 />} />
        <Route exact path="/login" element = {<Page5 />} />
        <Route exact path="/signup" element = {<Page6 />} />
      </Routes>
    </Router>
  );
}

export default App;
