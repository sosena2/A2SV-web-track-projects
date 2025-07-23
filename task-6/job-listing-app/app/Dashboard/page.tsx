import React from 'react'
import Descrpition from '../components/Descrition'
import Responsibility from '../components/Responsibility'
import Ideal from '../components/Ideal'
import Where from '../components/Where'

const Dashboard = () => {
  return (
    <div className='w-[1229px] h-[1064px] p-8 flex flex-row gap-[62px] text-[#25324B]'>
        <div className='w-[815px] h-[1000px] pt-]46px] pb-[46px] flex flex-col gap-[55px]'>
            <Descrpition/>
            <Responsibility/>
            <Ideal/>
            <Where/>
        </div>

    </div>
  )
}

export default Dashboard