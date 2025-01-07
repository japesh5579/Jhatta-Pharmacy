import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "'Arial, sans-serif'",
        backgroundColor: "#f4f9f4",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          color: "#004d00",
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
          margin: "20px 0",
        }}
      >
        About Jhatta Pharmacy
      </h1>
      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          color: "#333",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        Welcome to Jhatta Pharmacy – Your Trusted Healthcare Partner in Mandi Gobindgarh! 
        At Jhatta Pharmacy, we are committed to providing the highest quality healthcare 
        products and services to the community of Mandi Gobindgarh and beyond. With years 
        of experience in the pharmaceutical industry, our mission is to make healthcare 
        accessible, reliable, and personalized for every individual.
      </p>
      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          color: "#333",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        <strong>Our Core Values:</strong> We operate with the principles of trust, quality, 
        and care at the forefront of everything we do. From providing a wide range of 
        medicines to ensuring accurate diagnostic services, we strive to be a one-stop 
        destination for all your health and wellness needs.
      </p>
      <div
        style={{
          backgroundColor: "#eaf7ea",
          padding: "20px",
          borderRadius: "10px",
          margin: "20px auto",
          maxWidth: "800px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#004d00",
            marginBottom: "10px",
          }}
        >
          What We Offer
        </h2>
        <ul
          style={{
            textAlign: "left",
            fontSize: "1.2rem",
            color: "#333",
            lineHeight: "1.8",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <li>Allopathic Medicines: A comprehensive range to cater to various health conditions.</li>
          <li>Homeopathic Remedies: Natural and holistic solutions for your wellness journey.</li>
          <li>Medical Equipment: High-quality supplies for patient care at home or in clinics.</li>
          <li>Diagnostic Services: Convenient and reliable blood tests and health screenings.</li>
        </ul>
      </div>
      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          color: "#333",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        <strong>Our Laboratory Collaboration:</strong> To provide precise and reliable 
        diagnostic results, Jhatta Pharmacy proudly collaborates with Accuprobe Diagnostics, 
        a state-of-the-art laboratory equipped with the latest technology. Additionally, 
        we have partnered with Lal Path Labs, a renowned name in diagnostics, to ensure you 
        have access to a wide array of testing services. Whether you need routine health 
        check-ups or advanced diagnostic tests, you can trust us to deliver accurate results promptly.
      </p>
      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          color: "#333",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        <strong>Why Choose Us?</strong> We offer:
        <ul
          style={{
            textAlign: "left",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            margin: "10px auto",
            maxWidth: "750px",
            padding: "0 20px",
          }}
        >
          <li>Expert advice from trained pharmacists.</li>
          <li>Trusted collaborations with leading diagnostic providers.</li>
          <li>Friendly and personalized customer service.</li>
          <li>Convenient location and accessible facilities.</li>
        </ul>
      </p>
      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          color: "#333",
          margin: "20px auto",
          maxWidth: "800px",
        }}
      >
        <strong>Visit Us Today!</strong> We invite you to experience the Jhatta Pharmacy 
        difference. Located in the heart of Mandi Gobindgarh, we are dedicated to enhancing 
        the health and well-being of our community. Your health is our priority. Let us be 
        your partner in your wellness journey!
      </p>
    </div>
  );
};

export default AboutUs;
