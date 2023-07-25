import React, {Fragment} from 'react';
import {BottomLinks} from "./BottomLinks";
import {ButtonModal} from "../ButtonModal";
import {ModalInfo} from "../ModalInfo";


export function Home({bottomrows}) {
    return (
        <Fragment>
            <div className="frame">
                <div className="contenty">

                    <ButtonModal/>

                    <div
                        className="flex items-center justify-center h-1"
                        style={{height: "70%"}}>
                        {/*make a squeare tailwindcss*/}
                        <div className=" border-solid border-4 border-yellow-200 rounded-lg p-10">
                            <h1 className="text-yellow-200 text-center text-6xl mb-2">
                                Releyendo Artefactos
                            </h1>
                            <p className="text-orange-200 text-center text-3xl mb-2">
                                Museo arqueológico, etnológico e histórico
                            </p>
                            <p className="text-orange-200 text-end text-3xl">UDES</p>
                        </div>
                    </div>
                    <BottomLinks bottomrows={bottomrows}/>
                </div>
            </div>

            <ModalInfo/>


        </Fragment>
    )
}