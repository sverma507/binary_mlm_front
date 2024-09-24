import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/homepage/home";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import CryptoNews from "./components/CryptoNews/CryptoNews";
import SignUp from "./components/SignUp/SignUp.js";
import Login from "./pages/login/login.js";
import Verification from "./pages/verification/verification.js";
import Bull from "./components/Bull/Bull.js";
import UserDashboard from "./components/UserDahboard/UserDashboard.js";
import UserTree from "./pages/myTeam/myTeam.js";
import PrivateRoute from "./routes/privateRoutes.js";
import Salary from "./components/Salary/Salary.js";
import Withdrawal from "./components/Withdrawl/Withdrawl.js";
import Recharge from "./components/Recharge/Recharge.js";
import Admin_Dashboard from "./components/Admin/Admin_Dashboard/Admin_Dashboard.js";
import ActivateUserForm from "./components/Admin/ActivateUserForm/ActivateUserForm.js";
import MyProfile from "./components/MyProfile/MyProfile.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/" element={<PrivateRoute />}>
          <Route path="recharge" element={<Recharge />} />
          <Route path="user-dashboard" element={<UserDashboard />} />
          <Route path="withdrawl" element={<Withdrawal />} />
          <Route path="user-tree" element={<UserTree />} />
          <Route path="salary" element={<Salary />} />
          
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-profile" element={<MyProfile />} />
        <Route path="/bull" element={<Bull />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<CryptoNews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
        <Route path="/admin-activationform" element={<ActivateUserForm />} />
      </Routes>
    </div>
  );
}

export default App;
