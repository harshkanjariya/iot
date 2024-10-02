import { useState } from "react";
import { database, ref, set } from "./firebase";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import "./App.css";

function ControlPage() {
  const [status, setStatus] = useState(false);
  const [ip, setIp] = useState("");

  const toggleStatus = async () => {
    const newValue = status ? 0 : 1;
    try {
      fetch("http://" + ip + "/control?state=" + newValue);
      await set(ref(database, "sensorValue/8"), newValue);
      setStatus(!status);
    } catch (error) {
      console.error("Error updating Firebase:", error);
    }
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setIp(e.target.value)} value={ip} />
      <button
        onClick={toggleStatus}
        style={{
          backgroundColor: status ? "green" : "red", // Green for On, Red for Off
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {status ? "Turn Off" : "Turn On"}
      </button>
      <div>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ControlPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
