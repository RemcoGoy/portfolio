import * as React from "react";

interface ContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactTemplate = ({
  name,
  email,
  message,
}: ContactTemplateProps): React.ReactElement => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#ffffff",
    }}
  >
    <div
      style={{
        textAlign: "center",
        padding: "20px 0",
        backgroundColor: "#f8f9fa",
        marginBottom: "20px",
      }}
    >
      <h1 style={{ color: "#1f2937", margin: "0", fontSize: "24px" }}>
        New Contact Form Submission
      </h1>
    </div>
    <div style={{ padding: "20px" }}>
      <p style={{ fontSize: "16px", color: "#374151", marginBottom: "10px" }}>
        <strong>From:</strong> {name}
      </p>
      <p style={{ fontSize: "16px", color: "#374151", marginBottom: "10px" }}>
        <strong>Email:</strong> {email}
      </p>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
        }}
      >
        <p style={{ fontSize: "16px", color: "#374151", margin: "0" }}>
          <strong>Message:</strong>
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            marginTop: "10px",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </p>
      </div>
    </div>
    <div
      style={{
        borderTop: "1px solid #e5e7eb",
        marginTop: "20px",
        paddingTop: "20px",
        fontSize: "14px",
        color: "#6b7280",
        textAlign: "center",
      }}
    >
      <p>This message was sent from your portfolio contact form.</p>
    </div>
  </div>
);
