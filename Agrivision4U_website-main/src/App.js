import React from "react";
import Home from "./pages/Home.jsx";
import TestSeries from "./pages/TestSeries.jsx";
import Course from "./pages/Courses.jsx";

import Email from "./components/Email/Email.js";
import Card from "./components/Cards/Card.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/courses" exact component={Course} />
          <Route path="/testseries" exact component={TestSeries} />
        </Routes>
      </div>
    </Router>
  );
}
