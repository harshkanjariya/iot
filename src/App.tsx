import {HashRouter as Router, Route, Routes} from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import "./App.css";
import TermsOfService from "./TermsOfService.tsx";
import HomePage from "./HomePage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
      </Routes>
    </Router>
  );
}

export default App;
