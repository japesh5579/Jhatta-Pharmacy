import React from "react";

const Delivery = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#f8f9fa",
        color: "#004d00",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url('./456.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "600px", // Increased height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          Fast & Reliable Delivery Services
        </h1>
      </div>

      {/* Features Section */}
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#004d00",
          }}
        >
          Why Choose Our Delivery?
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[{
              icon: "fas fa-shipping-fast",
              title: "Fast Delivery",
              description: "Get your medicines and equipment delivered promptly to your doorstep.",
            },
            {
              icon: "fas fa-shield-alt",
              title: "Secure Packaging",
              description: "We ensure your products are safely packaged for maximum protection.",
            },
            {
              icon: "fas fa-smile",
              title: "Customer Support",
              description: "Our team is here to assist you every step of the way.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 300px",
                padding: "20px",
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                backgroundColor: "#f8f9fa",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <i
                className={feature.icon}
                style={{ fontSize: "2.5rem", color: "#66ff66", marginBottom: "10px" }}
              ></i>
              <h3 style={{ fontSize: "1.5rem", margin: "10px 0" }}>{feature.title}</h3>
              <p style={{ fontSize: "1rem", color: "#555" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Delivery;
