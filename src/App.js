import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import AdminRoute from "./Pages/Authentication/AdminRoute/AdminRoute";
import Login from "./Pages/Authentication/Login/Login";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import Register from "./Pages/Authentication/Register/Register";
import Blogs from "./Pages/Dashboard/Blogs/Blogs";
import CreateBlog from "./Pages/Dashboard/CreateBlog/CreateBlog";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Home from "./Pages/Home/Home/Home";
import NoMatchRoute from "./Pages/NoMatchRoute/NoMatchRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import ShareExperience from "./Pages/ShareExperience/ShareExperience";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/shareExperience"
              element={
                <PrivateRoute>
                  <ShareExperience />
                </PrivateRoute>
              }
            />
            {/* login */}
            <Route path="/login" element={<Login />} />
            {/* register */}
            <Route path="/register" element={<Register />} />

            {/* dashbaord */}
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  {" "}
                  <Dashboard />{" "}
                </AdminRoute>
              }
            >
              <Route path="/dashboard" element={<Blogs />} />
              <Route path="/dashboard/approve" element={<Blogs />} />
              <Route path="/dashboard/createBlog" element={<CreateBlog />} />
              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
            </Route>

            {/* no match route */}
            <Route path="*" element={<NoMatchRoute />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
