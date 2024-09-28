import { useState } from "react";
import { database, ref, set } from "./firebase";
import "./App.css";

function App() {
  const [status, setStatus] = useState(false); // False = Off, True = On

  // Function to update Firebase Realtime Database
  const toggleStatus = async () => {
    const newValue = status ? 0 : 1;
    try {
      await set(ref(database, "sensorValue/8"), newValue);
      setStatus(!status);
    } catch (error) {
      console.error("Error updating Firebase:", error);
    }
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
