import React from 'react'
import { JobType } from "@/types/jobtypes"
const Descrpition = ({description}:JobType) => {
  return (
    <div>
      <p className=' font-[900] text-[24px] leading-[1.2] '>Description</p>
      <div className=' font-[400] leading-[1.6] mt-4'>{description}</div>
    </div>
  )
}

export default Descrpition