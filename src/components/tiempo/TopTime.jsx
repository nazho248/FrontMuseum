import { Fragment } from 'react'

export function TopTime(props) {
  console.log(props)
  return (
    <div
      className="timeline-ruler flex h-7 w-full border-b-2  border-slate-50  lg:h-10 "
      style={{ background: 'rgba(209,168,134,0.4)' }}
    >
      <div
        className={'flex w-1/4 border-r-2 border-slate-50 ' + (props.isPresentation ? 'h-7 lg:h-10' : 'h-10 lg:h-14')}
      >
        <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
        <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
        <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
        <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
      </div>
      {/*indicador Central*/}
      <div
        className={
          'flex w-1/4 border-r-2 border-slate-50 lg:border-r-4 ' +
          (props.isPresentation ? 'h-10 lg:h-14' : 'h-7 lg:h-10')
        }
      >
        <div className="Indicator absolute left-1/2 -translate-x-4 transform rounded-lg bg-yellow-500 p-0.5 px-1 text-xs text-white lg:text-lg">
          d.C
        </div>
        {props.isPresentation ? (
          <div className="Date absolute left-1/2 top-10 -translate-x-5 transform text-sm  text-white lg:top-14 lg:text-xl">
            {props.fecha}
          </div>
        ) : (
          <div className="Date relative top-10 -translate-x-5 transform text-base text-white lg:top-14">
            {props.fechaAnterior}
          </div>
        )}
        <div className="h-5 w-1/5 border-r-2  border-slate-50" style={{ borderWidth: '0 1px 0 0px' }}></div>
        <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
        <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
        <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
      </div>
      {!props.isPresentation && (
        <Fragment>
          <div className="flex h-10 w-1/4 border-r-2  border-slate-50 lg:h-14">
            <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
            <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
            <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
            <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
          </div>
          <div className="flex h-10 w-1/4 border-slate-50">
            <div className="Date relative top-10 -translate-x-5 transform text-base text-white lg:top-14">
              {props.fecha}
            </div>
            <div
              className="h-5 w-1/5 border-l-2 border-r-2 border-slate-50"
              style={{ borderWidth: '0 1px 0 1px' }}
            ></div>
            <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
            <div className="h-5 w-1/5 border-r-2 border-slate-50" style={{ borderWidth: '0 1px 0 0' }}></div>
            <div className="h-7 w-1/5 border-r-2 border-slate-50 lg:h-10"></div>
          </div>
        </Fragment>
      )}
    </div>
  )
}
