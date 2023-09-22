import React, { Fragment } from "react";
import { BackBtn } from "../BackBtn";
import { LeftSide } from "../components/estetica/LeftSide";
import { RightSide } from "../components/estetica/RightSide";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

export function Estetica() {
  document.body.id = "";

  return (
    <Fragment>
      <BackBtn />
      <div className="flex bg-gray-600">
        <LeftSide />
        <RightSide />
      </div>
    </Fragment>
  );
}
