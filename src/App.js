import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainContent from './components/home/MainContent';

function App() {
  return (
    <Router>
      <Route path="/home" component={MainContent} />
    </Router>
  );
}

export default App;
