import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

import Home from "./routes/home";
import About from "./routes/about";
import ErrorPage from "./routes/error";
import Auth from "./routes/authentication";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
