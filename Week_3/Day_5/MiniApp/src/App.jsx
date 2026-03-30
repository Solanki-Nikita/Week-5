import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

 {/* Navigation links (client-side navigation, no reload) */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
  
    {/* Route configuration */}
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      {/* Static routes */}
        <Route path="/blog" element={<Blog />} />
      {/* Dynamic route parameter (:id) */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}