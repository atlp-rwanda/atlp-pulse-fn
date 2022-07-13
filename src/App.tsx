import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainRoutes from './containers/Routes';
import DashRoutes from './containers/DashRoutes';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<DashRoutes />} />
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
