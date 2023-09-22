// ButtonModal.js

import React, { useEffect } from "react";
import { UseModalMenu } from "../hooks/UseModalMenu";

export function ButtonModal() {
  UseModalMenu();

  return (
    <div className="menu transform scale-50 -mt-10 -mr-3 lg:scale-100 lg:mt-0">
      <div id="nav-icon">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
