import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import UserMenu from "../UserMenu";

import "./styles.scss";

const Instruments = () => {
  return (
    <div className="sidebar-wrap">
      <Logo />
      <div className="line" />
      <Menu />
      <div className="line" />
      <UserMenu />
    </div>
  );
};

export default Instruments;
