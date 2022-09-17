import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from 'App';
import TestPage from 'pages/TestPage';

const Routing: React.FunctionComponent = () =>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/test" element={<TestPage />} />
  </Routes>;

export default Routing;