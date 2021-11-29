import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topBar/TopBar";
import "./app.css";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/users" element={<UserList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
