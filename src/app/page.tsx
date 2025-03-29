"use client";
import { useState, useRef } from "react";
import { Tldraw } from "tldraw";
import PdfEditorWrapper from "./components/test";

export default function Home() {
  const [showStripes, setShowStripes] = useState(false);

  return (
    <main style={{ display: "flex", height: "100vh" }}>
      {/* Left Sidebar */}
      <div
        style={{
          width: "48px",
          backgroundColor: "#f0f0f0",
          borderRight: "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
          padding: "8px 0",
          gap: "8px",
        }}
      >
        <button
          onClick={() => setShowStripes(!showStripes)}
          style={{
            width: "40px",
            height: "40px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: showStripes ? "#e0e0e0" : "#f0f0f0",
            transition: "background-color 0.2s",
          }}
          title="Toggle Stripes"
        >
          📝
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <div style={{ height: "100%" }}>
            <PdfEditorWrapper />
          </div>
        </div>
        {showStripes && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(to bottom, transparent 95%, #888 95%)",
              backgroundSize: "100% 24px",
              opacity: 0.2,
            }}
          />
        )}
      </div>
    </main>
  );
}
