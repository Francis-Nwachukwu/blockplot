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
      <div className="sidebar-header">
        <span className="logo">
          <span className="logo-navy">
            Block<span className="logo-black">plot</span>
          </span>
        </span>

        <button id="close-btn" className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li className="social-icon" key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
