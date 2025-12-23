import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./screens/Home";
import Posts from "./screens/Posts";
import PostDetails from "./screens/PostDetails";
import Theme from "./screens/Theme";
import Performance from "./screens/Performance";
import Layout from "./screens/Layout";
import Form from "./screens/Form";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#0d6efd" : "white",
              textDecoration: "none",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/posts"
            style={({ isActive }) => ({
              color: isActive ? "#0d6efd" : "white",
              textDecoration: "none",
            })}
          >
            Posts
          </NavLink>

          <NavLink
            to="/theme"
            style={({ isActive }) => ({
              color: isActive ? "#0d6efd" : "white",
              textDecoration: "none",
            })}
          >
            Theme
          </NavLink>

          <NavLink
            to="/performance"
            style={({ isActive }) => ({
              color: isActive ? "#0d6efd" : "white",
              textDecoration: "none",
            })}
          >
            Performance
          </NavLink>

          <NavLink
            to="/layout"
            style={({ isActive }) => ({
              color: isActive ? "#0d6efd" : "white",
              textDecoration: "none",
            })}
          >
            Layout
          </NavLink>

          <NavLink
            to="/form"
            style={({ isActive }) => ({
              color: isActive ? "#0d6efd" : "white",
              textDecoration: "none",
            })}
          >
            Form
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home initialCount={5} />} />
          <Route path="/posts/:id" element={<PostDetails showTitle={true} />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
