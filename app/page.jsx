"use client"
import {useState } from "react";
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
  const GetAge=()=>{
    setMsg({
      MsgDay:MsgErrDay(input.Day,input.Month),
      MsgYear:MsgErrYear(input.Year),
      MsgMonth:MsgErrMonth(input.Month)
    })
    setAge(Age(input.Year,input.Month,input.Day))
  }
 

  return <>
 

  <div className="h-screen bg-[#DBDBDB] p-2">
  <div className="flex justify-center min-h-screen items-center ">
    <div className=" bg-[#FFFFFF] p-4 sm:p-8  rounded-t-xl rounded-bl-xl rounded-br-[7rem]  ">
      <div className="flex border-b-2 sm:pb-8 pb-12 sm:pr-24 ">
        <div className="flex flex-col w-24 pr-4">
          <label htmlFor="DAY" className="text-[#686868] font-semibold ">DAY</label>
          <input type="number"  placeholder="DD" onChange={(e)=>(setInput({...input , Day:parseInt(e.target.value)}))} name="DAY" id="DAY" className="border border-gray-400 rounded p-2" />
          <span className=" text-[0.52rem] text-red-500">{msg.MsgDay}</span>
        </div>
        <div className="flex flex-col w-24 px-2">
          <label htmlFor="MONTH" className="text-[#686868]  font-semibold">MONTH</label>
          <input type="number" placeholder="MM" onChange={(e)=>(setInput({...input , Month:parseInt(e.target.value)}))} name="MONTH" id="MONTH" className="border border-gray-400 rounded p-2" />
          <span className=" text-[0.50rem] text-red-500">{msg.MsgMonth}</span>
        </div>

        <div className="flex flex-col w-24 pl-4">
          <label htmlFor="YEAR" className="text-[#686868] font-semibold ">YEAR</label>
          <input type="number" placeholder="YYYY" onChange={(e)=>(setInput({...input , Year:parseInt(e.target.value)}))} name="YEAR" id="YEAR" className="border border-gray-400 rounded p-2" />
          <span className=" text-[0.52rem] text-red-500">{msg.MsgYear}</span>
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
