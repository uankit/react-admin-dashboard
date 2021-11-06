import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topBar/TopBar";
import "./app.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">Other Page</div>
      </div>
    </div>
  );
}

export default App;
