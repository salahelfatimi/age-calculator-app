"use client"
import {useEffect, useState } from "react";
import Datebirth from "./datebirth";
import {Age, MsgErrDay, MsgErrMonth, MsgErrYear} from "@/function/monthJour";


export default function Home() {

  const [input,setInput]=useState({
    Day:0,
    Month:0,
    Year:0
  })
  const [msg,setMsg]=useState({
    MsgDay:"",
    MsgYear:"",
    MsgMonth:""
  })
  const [age,setAge]=useState([])
  const GetAge=  ()=>{
    setMsg ({
      MsgDay :MsgErrDay(input.Day,input.Month ,input.Year),
      MsgYear:MsgErrYear(input.Year),
      MsgMonth:MsgErrMonth(input.Month,input.Year)
    })
    
  }
  useEffect(() => {
    if (msg.MsgDay.Coun === true && msg.MsgMonth.Coun === true && msg.MsgYear.Coun === true) {
      setAge(Age(input.Year, input.Month, input.Day));
    }
  }, [msg]);
 

  return <>
 

  <div className=" bg-[#DBDBDB] p-2">
  <div className="flex justify-center min-h-screen items-center ">
    <div className=" bg-[#FFFFFF] p-4 sm:p-8  rounded-t-xl rounded-bl-xl rounded-br-[7rem]  ">
      <div className="flex border-b-2 sm:pb-8 pb-12 sm:pr-24 ">
        <div className="flex flex-col w-24 pr-4">
          <label htmlFor="DAY" className={`font-semibold ${msg.MsgDay.Coun===true || msg.MsgDay==""?'text-[#686868]':' text-red-600'}`} >DAY</label>
          <input type="number"  placeholder="DD" onChange={(e)=>(setInput({...input , Day:parseInt(e.target.value)}))} name="DAY" id="DAY" className={`border rounded p-2 ${msg.MsgDay.Coun===true || msg.MsgDay==""?'border-gray-400':' border-red-600'}`}  />
          <span className=" text-[0.52rem] text-red-500">{msg.MsgDay.Msg}</span>
        </div>
        <div className="flex flex-col w-24 px-2">
          <label htmlFor="MONTH" className={`font-semibold ${msg.MsgMonth.Coun===true || msg.MsgMonth==""?'text-[#686868]':' text-red-600'}`} >MONTH</label>
          <input type="number" placeholder="MM" onChange={(e)=>(setInput({...input , Month:parseInt(e.target.value)}))} name="MONTH" id="MONTH" className={` border rounded p-2 ${msg.MsgMonth.Coun===true || msg.MsgMonth==""?'border-gray-400':' border-red-600 '}`}  />
          <span className=" text-[0.50rem] text-red-500">{msg.MsgMonth.Msg}</span>
        </div>

        <div className="flex flex-col w-24 pl-4">
          <label htmlFor="YEAR" className={`font-semibold ${msg.MsgYear.Coun===true || msg.MsgYear==""?'text-[#686868]':' text-red-600'}`} >YEAR</label>
          <input type="number" placeholder="YYYY" onChange={(e)=>(setInput({...input , Year:parseInt(e.target.value)}))} name="YEAR" id="YEAR" className={`border rounded p-2 ${msg.MsgYear.Coun===true || msg.MsgYear==""?'border-gray-400':' border-red-600'}`}  />
          <span className=" text-[0.52rem] text-red-500">{msg.MsgYear.Msg}</span>
        </div>
        
      </div>
      <div className="flex justify-center sm:justify-end relative bottom-6  " >
        <button onClick={GetAge} className="bg-[#864cff] rounded-full text-white p-3 absolute " > 
        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>        </button>
      </div>
      <Datebirth data={age} msg={msg}/>
    </div> 
  </div>
</div>



  
  
  
  
  
  </>;
}
