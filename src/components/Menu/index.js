import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const menuTitle = [
  { id: 1, title: "ЖУРНАЛ", url: "" },
  { id: 2, title: "АГЕНСТВА", url: "" },
  { id: 3, title: "ИНСТРУМЕНТЫ", url: "/instruments" }
];

const Menu = () => {
  return (
    <div className="menu-wrap">
      {menuTitle.map(({ id, title, url }) => {
        return (
          <Link key={id} to={url} className="menu-item">
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
