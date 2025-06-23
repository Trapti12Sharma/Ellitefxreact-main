import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FundingPage from "./components/FundingPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* Baaki routes */}
        <Route path="/funding" element={<FundingPage />} />
      </Routes>
    </Router>
  );
}

export default App;