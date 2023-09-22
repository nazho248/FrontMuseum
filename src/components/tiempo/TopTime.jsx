import { Fragment } from "react";

export function TopTime(props) {
  return (
    <div
      className="flex timeline-ruler h-7 lg:h-10 w-full  border-b-2  border-slate-50 "
      style={{ background: "rgba(209,168,134,0.4)" }}
    >
      <div
        className={
          "flex w-1/4 border-r-2 lg:border-r-4 border-slate-50 " +
          (props.isPresentation ? "h-7" : "h-10")
        }
      >
        <div
          className="w-1/5 h-5 border-x-2 border-slate-50"
          style={{ borderWidth: "0 1px 0 0" }}
        ></div>
        <div
          className="w-1/5 h-5 border-r-2 border-slate-50"
          style={{ borderWidth: "0 1px 0 0" }}
        ></div>
        <div
          className="w-1/5 h-5 border-r-2 border-slate-50"
          style={{ borderWidth: "0 1px 0 0" }}
        ></div>
        <div
          className="w-1/5 h-5 border-r-2 border-slate-50"
          style={{ borderWidth: "0 1px 0 0" }}
        ></div>
      </div>
      {/*indicador Central*/}
      <div
        className={
          "flex w-1/4 border-r-2 lg:border-r-4 border-slate-50 " +
          (props.isPresentation ? "h-10 lg:h-14" : "h-7 lg:h-10")
        }
      >
        <div className="Indicator absolute left-1/2 text-xs lg:text-lg transform -translate-x-4 bg-yellow-500 p-0.5 px-1 rounded-lg text-white">
          d.C
        </div>
        {props.isPresentation ? (
          <div className="Date absolute left-1/2 top-10 lg:top-14 transform -translate-x-5  text-sm lg:text-xl text-white">
            {props.fecha}
          </div>
        ) : (
          <div className="Date relative top-10 lg:top-14 transform -translate-x-5 text-sm text-white">
            {props.fechaAnterior}
          </div>
        )}
        <div
          className="w-1/5 h-5 border-r-2  border-slate-50"
          style={{ borderWidth: "0 1px 0 0px" }}
        ></div>
        <div
          className="w-1/5 h-5 border-r-2 border-slate-50"
          style={{ borderWidth: "0 1px 0 0" }}
        ></div>
        <div
          className="w-1/5 h-5 border-r-2 border-slate-50"
          style={{ borderWidth: "0 1px 0 0" }}
        ></div>
        <div
          className="w-1/5 h-5 border-r-2 border-slate-50"
          style={{ borderWidth: "0 1px 0 0" }}
        ></div>
      </div>
      {!props.isPresentation && (
        <Fragment>
          <div className="flex w-1/4 h-10 lg:h-14  border-r-2 border-slate-50">
            <div
              className="w-1/5 h-5 border-r-2 border-slate-50"
              style={{ borderWidth: "0 1px 0 0" }}
            ></div>
            <div
              className="w-1/5 h-5 border-r-2 border-slate-50"
              style={{ borderWidth: "0 1px 0 0" }}
            ></div>
            <div
              className="w-1/5 h-5 border-r-2 border-slate-50"
              style={{ borderWidth: "0 1px 0 0" }}
            ></div>
            <div
              className="w-1/5 h-5 border-r-2 border-slate-50"
              style={{ borderWidth: "0 1px 0 0" }}
            ></div>
          </div>
          <div className="flex w-1/4 h-10 border-slate-50">
            <div className="Date relative top-10 lg:top-14 transform -translate-x-5 text-base text-white">
              {props.fecha}
            </div>
            <div
              className="w-1/5 h-5 border-r-2 border-l-2 border-slate-50"
              style={{ borderWidth: "0 1px 0 1px" }}
            ></div>
            <div
              className="w-1/5 h-5 border-r-2 border-slate-50"
              style={{ borderWidth: "0 1px 0 0" }}
            ></div>
            <div
              className="w-1/5 h-5 border-r-2 border-slate-50"
              style={{ borderWidth: "0 1px 0 0" }}
            ></div>
            <div className="w-1/5 h-7 lg:h-10 border-r-2 border-slate-50"></div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
