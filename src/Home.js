import React, { useState, useEffect } from "react";
import logo from "./jha.jpg";
import labImage from "./mi.jpg";

const Home = () => {
  const heroContentList = [
    {
      title: "Allopathic Medicines",
      description: "Providing the best products for diabetic care and health management.",
      imageUrl: "./pmi.png",
    },
    {
      title: "Blood Test",
      description: "Your one-stop shop for all health and wellness needs.",
      imageUrl: "./111.jpg",
    },
    {
      title: "Medical Equipments",
      description: "Quality pharmacy services tailored to your needs.",
      imageUrl: "./333.jpg",
    },
    {
      title: "Homeopathic",
      description: "Enhancing your lifestyle with our wellness products.",
      imageUrl: "./444.jpg",
    },
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText(false);
      setTimeout(() => {
        setCurrentContentIndex((prevIndex) => (prevIndex + 1) % heroContentList.length);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroContentList.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateText(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, [currentContentIndex]);

  const currentContent = heroContentList[currentContentIndex];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#004d00",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${currentContent.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            filter: "brightness(0.6)",
            transition: "all 0.5s ease-in-out",
          }}
        ></div>

        <div
          style={{
            maxWidth: "900px",
            padding: "20px",
            zIndex: 2,
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: animateText ? 1 : 0,
            transform: animateText ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "15px",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            {currentContent.title}
          </h1>
          <p style={{ fontSize: "1.5rem", lineHeight: "1.8" }}>
            {currentContent.description}
          </p>
        </div>
      </div>

      {/* Laboratory Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "50px 20px",
          backgroundColor: "#ffffff",
          alignItems: "center",
          fontFamily: "'Montserrat', sans-serif", // Applying Montserrat font
        }}
      >
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h2
            style={{
              color: "#004d00",
              fontSize: "2rem",
              marginBottom: "20px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#66ff66")}
            onMouseLeave={(e) => (e.target.style.color = "#004d00")}
          >
            Jhatta Laboratory
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            Jhatta Laboratory is a trusted healthcare and pharmaceutical lab offering diagnostic tests, health assessments, and consultations. Equipped with advanced technology, we ensure accurate and reliable results. We proudly collaborate with AccuProbe and Lal Path Labs to provide high-quality diagnostic solutions and comprehensive healthcare services.
          </p>
        </div>
        <div style={{ flex: 1, maxWidth: "400px" }}>
          <img
            src={labImage}
            alt="Laboratory"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
      </div>

      {/* Shop Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "50px 20px",
          backgroundColor: "#ffffff",
        }}
      >
        <h2
          style={{
            width: "100%",
            textAlign: "center",
            color: "#004d00",
            fontSize: "2rem",
            marginBottom: "30px",
          }}
        >
          Photos of Our Shop
        </h2>
        {["255.jpg", "2556.jpg", "mam.jpg", "557.jpg", "5579.jpg", "055.jpg"].map((image, index) => (
          <div key={index} style={{ margin: "10px", width: "30%" }}>
            <img
              src={image}
              alt={`Shop ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>

      {/* Brands Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
            padding: "20px",
            maxWidth: "900px",
          }}
        >
          <h2
            style={{
              color: "#004d00",
              fontSize: "2rem",
              marginBottom: "20px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#66ff66")}
            onMouseLeave={(e) => (e.target.style.color = "#004d00")}
          >
            Brands We Own
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            We proudly own and represent the following renowned pharmaceutical brands:
          </p>
          <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
            {["./555.png", "./222.png", "./888.png", "./999.png"].map((brand, index) => (
              <div key={index} style={{ margin: "20px" }}>
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
