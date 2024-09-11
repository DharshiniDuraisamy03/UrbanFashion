import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KurtaSetsPage from "./Components/offer/KurtaSetsPage";
import Layout from "./Components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/kurthasets" element={<KurtaSetsPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
