import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Blogs from "./Pages/Dashboard/Blogs/Blogs";
import CreateBlog from "./Pages/Dashboard/CreateBlog/CreateBlog";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Home from "./Pages/Home/Home/Home";
import ShareExperience from "./Pages/ShareExperience/ShareExperience";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shareExperience" element={<ShareExperience />} />
            {/* login */}
            <Route path="/login" element={<Login />} />
            {/* register */}
            <Route path="/register" element={<Register />} />

            {/* dashbaord */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard" element={<Blogs />} />
              <Route path="/dashboard/approve" element={<Blogs />} />
              <Route path="/dashboard/createBlog" element={<CreateBlog />} />
              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
