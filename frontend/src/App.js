import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Sign";
import Signout from "./pages/Signout/Signout";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CustomerFavorite from "./Components/CustomerFavorite/CustomerFavorite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Success from "./pages/Success/Success";
import Failure from "./pages/Failure/Failure";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/service"
              element={
                <PrivateRoute>
                  <Service />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signout" element={<Signout />} />
            <Route path="/customerfavorite" element={<CustomerFavorite />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
