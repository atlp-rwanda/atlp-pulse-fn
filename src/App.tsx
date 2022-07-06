import React from 'react';
import { useQuery, gql } from "@apollo/client";
import Register from './pages/OrgRegister'
import Home from './pages/Home'
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
 
    return (
        <Router>
            <Routes>
            <Route index element={<Home />} />
            <Route path="/orgregister" element={<Register />} />
            </Routes>
        </Router>
    )
}
export default App;
