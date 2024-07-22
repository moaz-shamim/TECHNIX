import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {
  DashboardSection,
  InventorySection,
  AccountingSection,
  HelpAndSupport,
  PurhasesSection,
  ReportsSection,
  SalesSection,
  SettingsSection,
} from "./Pages";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <div className="w-full z-20 ">
          {/* Header */}
          <Header onClick={toggleSidebar} />
        </div>
        <div className="flex flex-1  overflow-hidden">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/inventory" replace />} />
              <Route path="/dashboard" element={<DashboardSection />} />
              <Route path="/accounting" element={<AccountingSection />} />
              <Route path="/inventory" element={<InventorySection />} />
              <Route path="/sales" element={<SalesSection />} />
              <Route path="/purchases" element={<PurhasesSection />} />
              <Route path="/reports" element={<ReportsSection />} />
              <Route path="/settings" element={<SettingsSection />} />
              <Route path="/helps-support" element={<HelpAndSupport />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
