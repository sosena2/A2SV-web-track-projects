import React from 'react'

const JobListCard = () => {
  return (
    <div className='border border-[#D6DDEB]  rounded-[30px] w-[919px] h-[266px]' >
      <div className='w-[844px] h-[218px] flex flex-row gap-6 my-[24px] mx-[36.5px] justify-space-between'>
      
        <div className='w-[66px] h-[59px] '>
          {/* <img src="../public/assets/avatar/logo.png" alt="" /> */}
          ocean
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-[20px] leading-[1.2] text-[#25324B] w-[228px] h-[24px]' >Social Media Assistant</p>
          <div className=' w-[454px] h-[27px] text-gray-400 text-[17px] leading-[1.6] flex flex-row justify-space-between'>
            <div className='w-[265px] h-[28px]'>Young Men Christians Association</div>
            <div className='w-[169px] h-[26px]'>Addis Ababa, Ethiopia</div>
          </div>
          <div className='font-normal text-[17px] leading-[1.6] text-[#25324B] w-[744px] h-[112px] pb-2 font-ep'>As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.</div>
          <div className='flex flex-row w-[242px] h-[31px] gap-[8px] text-[12px] font-semibold leading-[1.6]'>
            <button className='w-[76px] rounded-[80px] bg-emerald-50 py-[6px] px-[10px] text-[#56CDAD] border border-emerald-50 '>
               In Person
            </button>
              <button className='w-[81px] rounded-[80px]  py-[6px]  px-[10px] text-[#FFB836] border border-[#FFB836] '>Education</button>
              <button className='w-[60px] rounded-[80px]  py-[6px] px-[10px] text-[#4640DE] border border-[#4640DE] '>IT</button>
            

          </div>
        </div>
      </div>
    </div>

  )
}

export default JobListCard
