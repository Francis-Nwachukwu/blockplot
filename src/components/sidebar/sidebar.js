import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { links, social } from "../../data";

import "./sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
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
  );
};
export default Sidebar;
