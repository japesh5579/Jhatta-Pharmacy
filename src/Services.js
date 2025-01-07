import React from "react";

const Services = () => {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "'Arial, sans-serif'",
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#004d00",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          marginBottom: "20px",
        }}
      >
        Our Services
      </h1>
      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        At Jhatta Pharmacy, we offer a wide range of services to meet the healthcare 
        needs of our community. From providing medicines to diagnostic services, our 
        goal is to be your trusted partner in health and wellness.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          margin: "40px 0",
        }}
      >
        <div
          style={{
            backgroundColor: "#eaf7ea",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#004d00", marginBottom: "10px" }}>
            Allopathic Medicines
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            A wide range of allopathic medicines to cater to various health conditions. 
            Trusted and certified products to ensure your safety and well-being.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#eaf7ea",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#004d00", marginBottom: "10px" }}>
            Homeopathic Remedies
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            Natural and holistic solutions for your wellness journey. Safe, effective, 
            and tailored to support your unique health needs.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#eaf7ea",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#004d00", marginBottom: "10px" }}>
            Medical Equipment
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            High-quality medical supplies to support patient care at home or in clinics. 
            From thermometers to blood pressure monitors, we’ve got you covered.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#eaf7ea",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#004d00", marginBottom: "10px" }}>
            Diagnostic Services
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            Convenient and reliable blood tests and health screenings in collaboration 
            with leading labs like Accuprobe and Lal Path Labs. Accurate results, fast service.
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        Visit Jhatta Pharmacy today to explore our comprehensive services and discover 
        how we can support your health and wellness journey!
      </p>
    </div>
  );
};

export default Services;
