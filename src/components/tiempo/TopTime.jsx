export function TopTime() {
    return (
        <div className="flex timeline-ruler h-10 w-full  border-b-2  border-slate-50 "
             style={{background: "rgba(209,168,134,0.4)"}}>

            <div className="flex w-1/4 h-10 border-r-2 border-slate-50">
                <div className="w-1/5 h-5 border-x-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}
                ></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
            </div>
            {/*indicador Central*/}
            <div className="flex w-1/4 h-14  border-r-2 border-slate-50">
                <div className="Indicator absolute left-1/2  transform -translate-x-4 bg-yellow-500 p-0.5 px-1 rounded-lg text-white
                ">d.C</div>
                <div className="Date absolute left-1/2 top-14 transform -translate-x-5 text-xl text-white
                ">2021</div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
            </div>
            <div className="flex w-1/4 h-10  border-r-2 border-slate-50">
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
            </div>
            <div className="flex w-1/4 h-10   border-slate-50">
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-5 border-r-2 border-slate-50" style={{borderWidth: "0 1px 0 0"}}></div>
                <div className="w-1/5 h-14 border-r-2 border-slate-50" ></div>
                <div className="Date relative top-14 transform -translate-x-5 text-xl text-white">2050</div>

            </div>
            
        </div>
    )
}