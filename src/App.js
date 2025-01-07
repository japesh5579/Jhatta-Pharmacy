import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Delivery from "./Delivery";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        {/* Navbar */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px",
            backgroundColor: "#ffffff",
            color: "#333",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Logo and Brand Name */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./jh.jpg"
              alt="Jhatta Pharmacy"
              style={{
                height: "50px",
                marginRight: "15px",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              }}
            />
            <h1
              style={{
                fontSize: "1.8rem",
                margin: 0,
                fontWeight: "bold",
                letterSpacing: "1px",
                color: "#004d00",
              }}
            >
              JHATTA PHARMACY
            </h1>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/AboutUs" },
                { name: "Services", path: "/Services" },
                { name: "Delivery", path: "/Delivery" },
                { name: "Contact Us", path: "/ContactUs" },
              ].map((item) => (
                <li
                  key={item.name}
                  style={{
                    margin: "0 15px",
                    fontWeight: "bold",
                  }}
                >
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color: "#333",
                      padding: "5px 10px",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f0f0f0"; // Subtle off-white
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>

        {/* Footer Section */}
        <footer
  style={{
    backgroundColor: "#004d00",
    color: "white",
    textAlign: "center",
    padding: "30px 15px",
    marginTop: "auto",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  }}
>
  {/* Logo and Description */}
  <div style={{ textAlign: "center", maxWidth: "600px" }}>
    <img
      src="./jhattta.jpg"
      alt="Jhatta Logo"
      style={{
        width: "80px",
        height: "80px",
        marginBottom: "10px",
        borderRadius: "50%",
        border: "2px solid #66ff66",
      }}
    />
    <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: "0" }}>
      Jhatta Laboratory & Pharmacy - Your trusted healthcare partner for high-quality medicines,
      diagnostics, and medical equipment.
    </p>
  </div>

  {/* Links */}
  <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
    <a
      href="#"
      style={{
        color: "#66ff66",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1rem",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.color = "white")}
      onMouseLeave={(e) => (e.target.style.color = "#66ff66")}
    >
      Privacy Policy
    </a>
    <a
      href="#"
      style={{
        color: "#66ff66",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1rem",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.color = "white")}
      onMouseLeave={(e) => (e.target.style.color = "#66ff66")}
    >
      Contact Us
    </a>
    <a
      href="#"
      style={{
        color: "#66ff66",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1rem",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.color = "white")}
      onMouseLeave={(e) => (e.target.style.color = "#66ff66")}
    >
      Terms of Service
    </a>
  </div>

  {/* Social Media Links */}
  <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
    <a
      href="#"
      style={{ color: "white", fontSize: "1.5rem", transition: "transform 0.3s ease" }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      <i className="fab fa-facebook"></i>
    </a>
    <a
      href="#"
      style={{ color: "white", fontSize: "1.5rem", transition: "transform 0.3s ease" }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href="#"
      style={{ color: "white", fontSize: "1.5rem", transition: "transform 0.3s ease" }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      <i className="fab fa-twitter"></i>
    </a>
  </div>

  {/* Copyright */}
  <div>
    <p style={{ margin: "0", fontSize: "0.9rem" }}>© 2025 Jhatta Pharmacy. All rights reserved.</p>
    <p style={{ margin: "0", fontSize: "0.9rem" }}>Ph. No: 9914850758</p>
  </div>
</footer>

      </div>
    </Router>
  );
};

export default App;
