import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgetPass from "./Pages/ForgetPass";
import Layout from "./layout/Layout";
import MyTicket from "./Pages/MyTicket";
import NewTicket from "./Pages/NewTicket";
import Dashboard from "./Pages/Dashboard";
import UserProfile from "./Pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPass />} />

        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="myTickets" element={<MyTicket />} />
          <Route path="newTicket" element={<NewTicket />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
