import React, {Fragment} from 'react';
import {BottomLinks} from "./BottomLinks";
import {ButtonModal} from "../ButtonModal";
import {ModalInfo} from "../ModalInfo";


export function Home({bottomrows}) {
    return (
        <Fragment>
            <div className="frame" style={{ backgroundImage: "url('/assets/img/border-smooth.png')" }}>
                    <ButtonModal/>
                <div className="contenty flex items-center justify-center">
                    <div  className="flex flex-row items-center justify-center">

                        <div className=" border-solid border-4  rounded-lg p-10 md:p-16
                        " style={{ borderColor: '#ffd869' }}>
                            <h1 className=" text-center text-2xl mb-2 md:text-6xl" style={{ color: '#ffd869' }}>
                                Releyendo Artefactos
                            </h1>
                            <p className=" text-center text-2xl mb-2 md:text-3xl
                            " style={{ color: '#fc9f8e' }}>
                                Museo Arqueológico, Etnológico e Histórico
                            </p>
                            <p className=" text-end text-2xl  md:text-3xl" style={{ color: '#fc9f8e' }}>
                                UDES</p>
                        </div>
                    </div>
                    <BottomLinks bottomrows={bottomrows}/>
                </div>
            </div>

            <ModalInfo/>


        </Fragment>
    )
}