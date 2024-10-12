import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsRoutes from './Components/NewsRoutes';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  
  // Ideally, the API key should be stored in an environment variable for security reasons
  const apiKey = process.env.REACT_APP_NEWS_API_KEY || "6e27551ebe77426ea653a2c2469641ce";

  return (
    <>
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress} />
          <NewsRoutes apiKey={apiKey} setProgress={setProgress} />
        </Router>
      </div>
    </>
  );
}

export default App;
