import React from "react";

import "./styles.scss";

const Logo = ({ push }) => (
  <div className="sidebar-logo-wrap" onClick={() => push("/")}>
    <h1>ParrotWings</h1>
  </div>
);

export default Logo;
