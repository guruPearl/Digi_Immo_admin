import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Auth/Login/Loginpage";
import AdminPanel from "./AdminDashboard/AdminPanel";
import Dashboard from "./AdminDashboard/pages/Dashboard";
import Sidebar from "./AdminDashboard/Sidebar";
import AdminNavbar from "./AdminDashboard/AdminNavbar";

// Import child components
import Manageuser from "./AdminDashboard/pages/Manageuser";
import HelpDesk from "./AdminDashboard/pages/HelpDesk";
import Income from "./AdminDashboard/pages/Income";
import ExpenseTracker from "./AdminDashboard/pages/ExpenseTracker";
import Utility from "./AdminDashboard/pages/Utility";
import General from "./AdminDashboard/pages/General";
import AssetInventory from "./AdminDashboard/pages/AssetInventory";
import Vendor from "./AdminDashboard/pages/Vendor";
import ProjectsMeetings from "./AdminDashboard/pages/ProjectsMeetings";
import Facility from "./AdminDashboard/pages/Facility";
import PrankingManager from "./AdminDashboard/pages/PrankingManager";
import StaffManager from "./AdminDashboard/pages/StaffManager";
import NoticeManager from "./AdminDashboard/pages/NoticeManager";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/adminnavbar" element={<AdminNavbar />} />

        {/* Parent Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* ✅ Use relative paths (no leading "/") */}
          <Route path="manage-user" element={<Manageuser />} />
          <Route path="helpdesk-trackers" element={<HelpDesk />} />
          <Route path="income-tracker" element={<Income />} />
          <Route path="expense-tracker" element={<ExpenseTracker />} />
          <Route path="utility-tracker" element={<Utility />} />
          <Route path="general-ledger" element={<General />} />
          <Route path="asset-inventory" element={<AssetInventory />} />
          <Route path="vendor-master" element={<Vendor />} />
          <Route path="projects-meetings" element={<ProjectsMeetings />} />
          <Route path="facility-activity" element={<Facility />} />
          <Route path="pranking-manager" element={<PrankingManager />} />
          <Route path="staff-manager" element={<StaffManager />} />
          <Route path="notice-manager" element={<NoticeManager />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
