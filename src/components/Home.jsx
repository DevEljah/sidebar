import React from "react";
import { FaBars } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
    </main>
  );
}
