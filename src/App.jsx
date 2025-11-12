// src/App.jsx
import React from "react";
import { Header } from "./containers"; // assumes src/containers/index.jsx exports Header
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <Header />
      <section style={{ padding: 100, fontFamily: "system-ui, sans-serif" }}>
        
      </section>
    </main>
  );
}

