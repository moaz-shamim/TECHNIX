import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import Inventory from "../components/Inventory.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function InventorySection() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Inventory Management Section / Main Section */}
      <Inventory />
    </>
  );
}
