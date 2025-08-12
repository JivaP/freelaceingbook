import React from "react";

export default function BrandConsultancy() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "40px",
        background: "#f8f8f8",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <img
        src="/brand/brand.jpeg"
        alt="Brand Endorsement"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      />
      <h2
        style={{
          marginTop: "20px",
          fontSize: "2rem",
          color: "#222",
          fontWeight: "600",
        }}
      >
        Brand Endorsement
      </h2>
      <p
        style={{
          maxWidth: "600px",
          margin: "10px auto",
          fontSize: "1.1rem",
          color: "#555",
          lineHeight: "1.6",
        }}
      >
        Partner with us to amplify your brand’s presence through impactful endorsements,
        creative campaigns, and strategic collaborations with leading personalities.
        Your story deserves to be seen — let’s make it unforgettable.
      </p>
    </section>
  );
}
