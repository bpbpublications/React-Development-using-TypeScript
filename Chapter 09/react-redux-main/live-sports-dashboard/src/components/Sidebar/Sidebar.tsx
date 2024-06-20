import React from "react";
import "./Sidebar.css";
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Football</li>
        <li>Cricket</li>
        <li>Basketball</li>
      </ul>
    </div>
  );
};

export default Sidebar;
