import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const menuTitle = [
  { id: 1, title: "Избранное", url: "/favorites", icon: "" },
  { id: 2, title: "Поиск", url: "", icon: "" },
  { id: 3, title: "Кабинет агенства", url: "/instruments", icon: "" }
];

const UserMenu = () => {
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

export default UserMenu;
