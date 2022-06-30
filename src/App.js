import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

import Home from "./routes/home";
import About from "./routes/about";
import Properties from "./routes/properties";
import ErrorPage from "./routes/error";
import Learn from "./routes/learn";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
