import React from "react";
import { Link } from "react-router-dom";

export function BottomLinks({ bottomrows, images }) {
  if (!Array.isArray(bottomrows) || bottomrows.length === 0) {
    return (
      <div className="row bottom-navigation">
        <div className="col border-t-4 border-yellow-200">
          <div>
            <h2 className="text-orange-200 text-center pr-10">No hay datos</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row bottom-navigation z-30">
      {bottomrows.map((bottomrow, index) => (
        <div
          className="col border-t-4"
          key={index}
          style={{ borderColor: "#ffd869" }}
        >
          <Link to={bottomrow.link}>
            {images.includes(bottomrow.imageSrc) ? (
              <img
                src={bottomrow.imageSrc}
                className="overlay"
                alt={bottomrow.alt}
                style={
                  bottomrow.customStyle
                    ? { objectPosition: bottomrow.customStyle }
                    : {}
                }
              />
            ) : (
              <img
                src={bottomrow.imageSrc}
                className="overlay"
                alt={bottomrow.alt}
                style={
                  bottomrow.customStyle
                    ? { objectPosition: bottomrow.customStyle }
                    : {}
                }
              />
            )}
            <div>
              <h2
                className="text-center  text-xs sm:text-sm lg:text-3xl
                            "
                style={{ color: "#fc9f8e" }}
              >
                {bottomrow.title}
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
