import React, { Fragment } from "react";
import { BottomLinks } from "./BottomLinks";
import { ButtonModal } from "../ButtonModal";
import { ModalInfo } from "../ModalInfo";

export function Home({ bottomrows, images }) {
  return (
    <Fragment>
      <div
        className="frame"
        style={{ backgroundImage: "url('/assets/img/border-smooth.png')" }}
      >
        <ButtonModal />
        <div className="contenty flex items-center justify-center">
          <div className="flex flex-row items-center justify-center z-10">
            <div
              className=" border-solid border-4  rounded-lg p-6 lg:p-16 mb-10 lg:mb-0
                        "
              style={{ borderColor: "#ffd869" }}
            >
              <h1
                className=" text-center text-3xl mb-2 lg:text-6xl"
                style={{ color: "#ffd869" }}
              >
                Releyendo Artefactos
              </h1>
              <p
                className=" text-center text-xl lg:mb-2 lg:text-3xl
                            "
                style={{ color: "#fc9f8e" }}
              >
                Museo Arqueológico, Etnológico e Histórico
              </p>
              <p
                className=" text-end text-xl  lg:text-3xl"
                style={{ color: "#fc9f8e" }}
              >
                UDES
              </p>
            </div>
          </div>
          <BottomLinks bottomrows={bottomrows} images={images} />
        </div>
      </div>

      {/*
            <ModalInfo/>
*/}
    </Fragment>
  );
}
