import { Link } from "react-router-dom";
import "./navigation.css";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

import { links, social } from "../../data";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <nav className="nav navbar-fixed" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <span className="logo-navy">
                Block<span className="logo-black">plot</span>
              </span>
            </Link>
            <button className="nav-btn" id="nav-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
        id="sidebar"
      >
        <div>
          <button id="close-btn" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          <ul className="sidebar-links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="social-icons">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
