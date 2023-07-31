import React from 'react';
import {Link} from "react-router-dom";

export function BottomLinks({bottomrows}) {
    if (!Array.isArray(bottomrows) || bottomrows.length === 0) {
        return (
            <div className="row bottom-navigation">
                <div className="col border-t-4 border-yellow-200">
                    <div>
                        <h2 className="text-orange-200 text-center pr-10">No hay datos</h2>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="row bottom-navigation">
            {bottomrows.map((bottomrow, index) => (
                <div className="col border-t-4 " key={index} style={{borderColor: '#ffd869'}}>
                    {/* Utilizamos el índice como clave si no tenemos una propiedad 'id' única */}
                    <Link to={bottomrow.link}>
                        <img src={bottomrow.imageSrc} className="overlay" alt={bottomrow.alt} />
                        <div>
                            <h2 className="text-end pr-10" style={{color: '#fc9f8e'}}
                            >{bottomrow.title}</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );}
