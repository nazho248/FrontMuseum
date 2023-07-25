import React from 'react';
import {Link} from 'react-router-dom';
export function ModalInfo() {
    return (
        <div className="card card-default bg-white">
            <div className="card-body mx-3">
                <div className="grid grid-cols-3 m-4">
                    <div className="icon accesibility">
                        <h2 className="text-3xl">👁️</h2>
                    </div>
                    <div className="card-title text-center">
                        <h1 className="text-3xl">Sobre la Exposición</h1>
                    </div>
                    <div className="col-1 text-end ">
                        <div className="icon close">
                            <h2 className="text-3xl">
                                <strong>X</strong>
                            </h2>
                        </div>
                    </div>
                </div>
                <br />
                <p className="card-text text-xl mx-10 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus at dolor
                    aliquam pulvinar a odio orci velit. Justo sollicitudin magna ac lacinia.
                    Non enim dignissim orci in massa, accumsan, consectetur cursus. Massa nunc
                    nunc pellentesque est faucibus faucibus. Commodo, aliquam tempus, feugiat
                    tristique tellus. Nunc aenean nec interdum tempor. Tempus, nulla fringilla
                    volutpat at ut dolor massa fermentum leo. Arcu viverra dictum at phasellus
                    cursus adipiscing at ipsum sed. Pharetra proin ut vel scelerisque. Quis
                    dolor sit elementum risus sit tortor.
                </p>
                <br />
                <hr />
                {/*footer of the card*/}
                <div className="card-footer text-center p-5">
                    {/*icon of a world*/}
                    {/*<a href="login.html">*/}
                    <Link to={'/login'}>
                        <h3 className="text-info text-start icon text-2xl">🌎 Intranet</h3>
                    </Link>
                </div>
            </div>
        </div>

    )
}