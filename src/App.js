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
import MyProfile from "./components/MyProfile/MyProfile.js";
import ScrollToTop from "./components/ScrollToTop.js";
import BullPlan from "./components/Bull/BullPlan.js";
import Invitation from "./components/Invitation/Invitation.js";
import AdminWalletAddress  from './components/Bull/AdminWalletAddress.js'
import StartTrading from "./components/StartTrading/StartTrading.js";
import Dashboard from './pages/Admin/AdminDashbord/AdminDashbord.js';
import AllUsers from './pages/Admin/AllUsers/AllUsers.js';
import PaidUsers from './pages/Admin/PaidUsers/PaidUsers.js';
import UnpaidUsersList from './pages/Admin/UnpaidUserslist/UnpaidUserslist.js';
import BlockedUsers from './pages/Admin/BlockedUsers/BlockedUsers.js';
import DownlineUsers from './pages/Admin/DownlineUsers/DownlineUsers.js';
import ActivationReport from './pages/Admin/ActivationReport/ActivationReport.js';
import ActivateUserForm from './pages/Admin/ActivateUserForm/ActivateUserForm.js';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin.js';
import AddDeduct from './pages/Admin/AddDeduct.js/AddDeduct.js';
import ChangePassword from './pages/Admin/ChangePassword/ChangePassword.js';
import AdminRoute from "./routes/adminRoutes.js";
import LevelIncome from "./components/LevelIncome/LevelIncome.js";
import TradingWallet from "./components/TradingWallet/TradingWallet.js";
function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/user/" element={<PrivateRoute />}>
          <Route path="recharge" element={<Recharge />} />
          <Route path="user-dashboard" element={<UserDashboard />} />
          <Route path="withdraw" element={<Withdrawal />} />
          <Route path="user-tree" element={<UserTree />} />
          <Route path="salary" element={<Salary />} />
          <Route path="invitation" element={<Invitation />} />
          <Route path="level-income" element={<LevelIncome />} />
          <Route path="tradeing-wallet" element={<TradingWallet />} />
          <Route path="pay" element={<AdminWalletAddress />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="buy-bull" element={<BullPlan />} />
        <Route path="start-trade" element={<StartTrading />} />
          
        <Route path="user-tree" element={<UserTree />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/change-password" element={<ChangePassword/>} />
          <Route path="admin/all-users" element={<AllUsers />} />
          <Route path="admin/all-paid-users" element={<PaidUsers />} />
          <Route path="admin/all-unpaid-users-list" element={<UnpaidUsersList />} />
          <Route path="admin/blocked-users" element={<BlockedUsers />} />
          <Route path="admin/downline-users" element={<DownlineUsers />} />
          <Route path='admin/add-deduct' element={<AddDeduct/>}/>
          <Route path="admin/activation-report" element={<ActivationReport />} />
          <Route path="admin/activate-user" element={<ActivateUserForm />} />
      </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/bull" element={<Bull />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<CryptoNews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default App;
