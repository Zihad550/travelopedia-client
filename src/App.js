import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import ShareExperience from "./Pages/ShareExperience/ShareExperience";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shareExperience" element={<ShareExperience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
