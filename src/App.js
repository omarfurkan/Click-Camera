import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Reviews from './Component/Reviews/Reviews';
import Dashbord from './Component/Dashbord/Dashbord';
import Blog from './Component/Blog/Blog';
import NotFound from './Component/NotFound/NotFound';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
