import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from './News';

const NewsRoutes = ({ apiKey, setProgress }) => {
  const pageSize = 8; // You can extract this into a separate constant if it remains the same for all

  return (
    <Routes>
      <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
      <Route exact path="/Home" element={<News apiKey={apiKey} setProgress={setProgress} key="general-home" pageSize={pageSize} country="us" category="general" />} />
      <Route exact path="/Business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
      <Route exact path="/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
      <Route exact path="/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />
      <Route exact path="/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
      <Route exact path="/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
      <Route exact path="/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />
    </Routes>
  );
}

export default NewsRoutes;
