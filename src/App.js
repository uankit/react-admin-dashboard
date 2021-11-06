import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topBar/TopBar";
import "./app.css";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
