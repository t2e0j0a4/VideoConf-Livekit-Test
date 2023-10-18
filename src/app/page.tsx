import React from 'react'
import UserDetailForm from '@/components/UserDetailForm/UserDetailForm'

const page = () => {
  return (
    <div>
      <h1 className='text-center mb-4 mt-2 text-[24px] font-[7`00]'>Enter details to enter into room.</h1>
      <UserDetailForm />
    </div>
  );
}

export default page