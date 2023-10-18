"use client";
import React, {useContext} from 'react'
import { AppContext } from '@/context/AppContext';

const UserDetailForm = () => {

    const appContext = useContext(AppContext);

  return (
    <form className='w-[100%] flex flex-col gap-[0.7rem] justify-center items-center' onSubmit={appContext?.getIntoRoom}>
        <input className='border-2 border-[#232323] rounded-[8px] text-[#232323] px-[1rem] py-[0.7rem] outline-none' required type='text' value={appContext?.fullName} onChange={(e) => {
            appContext?.setFullName(e.target.value);
        }} placeholder='Enter your Name'/>
        <input className='border-2 border-[#232323] rounded-[8px] text-[#232323] px-[1rem] py-[0.7rem] outline-none' type='text' readOnly value={"Room - Hello World"} />
        <button className='border-2 border-[#232323] rounded-[8px] text-[#FFFFFF] px-[1rem] py-[0.7rem] bg-[#232323]' type='submit'>Get into Room</button>
    </form>
  )
}

export default UserDetailForm