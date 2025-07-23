import Image from "next/image";
import JobListCard from "./components/JobListCard";

export default function Home() {
  return (
  <div className="flex flex-col mt-[72px] mr-[123px] mb-[72px] ml-[124px] w-919px h-1350px gap-5">
    <div className="flex flex-row justify-between h-[68px] w-[919px]">
      <div className="w-[236px] h-[68px]">
        <h1 className="font-black text-[32px] leading-[120%] h-[38px] text-[#25324B]">Opportunities</h1>
        <p className="h-[26px] text-[16px] font-normal leading-[160%] text-gray-400">showing 73 results</p>
      </div>
      <div className="w-[228px] h-[68px]">
        <p>Sort by:</p>
      </div>
      
    </div>
    <div>
       <JobListCard/>
    </div>
     <div>
       <JobListCard/>
    </div>
     <div>
       <JobListCard/>
    </div>
     <div>
       <JobListCard/>
    </div>
 
  </div>
  )
}

 
    