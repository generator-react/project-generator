import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useLocation,
    Navigate
} from "react-router-dom";
import Generator from '../pages/generator';
import Home from '../pages/home';

export default function MyRoute() {
    return (
        <Router>
            <div>
                <Routes>
                        <Route path="/" element={<Home name="dashboard" />} />
                        <Route path="generator" element={<Home name="Generator" />} />
                </Routes>
            </div>
        </Router>
    );
};