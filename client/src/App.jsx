import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ManageCourse from "./pages/ManageCourse";
import Authentication from "./pages/Authentication";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navigation />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<ManageCourse />} />
            <Route path="/manageCourse" element={<ManageCourse />} />
            <Route path="/authentication/" element={<Authentication />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
