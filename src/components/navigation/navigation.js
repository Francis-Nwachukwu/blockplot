import { Link, Outlet } from "react-router-dom";
import "./navigation.css";
import { useGlobalContext } from "../../context";
import { FaAlignRight } from "react-icons/fa";

import { links } from "../../data";

const Navigation = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <span className="logo-navy">
                Block<span className="logo-black">plot</span>
              </span>
            </Link>
            <button className="nav-btn" id="nav-btn" onClick={openSidebar}>
              <FaAlignRight />
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

      {/* <aside
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
      </aside> */}
      <Outlet />
    </>
  );
};

export default Navigation;
