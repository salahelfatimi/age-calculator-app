"use client";

function Datebirth({data,msg}) {

  const Coundition=data.year==""||data.month=="" ||data.day==""   || data=='' || msg.MsgYear!=true || msg.MsgMonth!=true || msg.MsgDay!=true

  return (
    <>
      <div className=" sm:pt-4 pt-8 text-6xl font-extrabold ">
        <h1>
          <span className="text-[#864cff] ">{Coundition?'--':data.year}</span> Years
        </h1>
        <div>
          <span className="text-[#864cff] ">{Coundition?'--':data.month}</span> Months
        </div>
        <div>
          <span className="text-[#864cff] ">{Coundition?'--':data.day}</span> Days
        </div>
      </div>
    </>
  );
}
export default Datebirth;