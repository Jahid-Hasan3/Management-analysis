import React from 'react'
import { projectMembers } from '../data/data'
import { Add, Close } from '@mui/icons-material'

function AddNewMemberModal(props:any) {

  const{setAddMemberModal}=props

  const handleModalClose=()=>{
    setAddMemberModal(false)
  }

  return (
    <div className='top-0 left-0 absolute w-[100vw] h-[100vh] bg-[#00000054] flex justify-center items-center'>
    <div className='bg-C55 rounded-[8px] p-5 w-[500px]' >
    <div className='flex flex-row items-center justify-between'>
      <div className='font-bold text-[20px] text-C11'>
        Add New Member
      </div>
      <button className='cursor-pointer'
      onClick={handleModalClose}
      >
        <Close sx={{fontSize:20,fontWeight:800}}/>
      </button>
      </div>
      <div className='my-4 text-[14px] flex flex-row gap-2 '>
        <div className='flex flex-col w-full gap-1 mt-2'>
          <div  className=" text-C11 text-[10px] font-bold  w-fit  select-none">Choose a member</div>
          <select name="" id="" className='bg-C44 rounded-[8px]  p-2 text-[14px]'>
            <option value="none" selected>None Selected</option>
            {projectMembers.map((node:any)=>(
              <option value={node.id} className='text-C11'>{node.memberName}</option>
            ))}
          </select>
        </div>
    
      </div>
      <div className='flex justify-end gap-4 mt-2'>
      <button className={` hover:bg-[#012b3927] rounded-[8px] text-C11 font-bold text-[14px] py-2 px-5`} onClick={handleModalClose}>Cancel</button>
        <button className={`bg-[#012b39f2] hover:bg-[#012B39] rounded-[8px] text-white font-bold text-[14px] py-2 px-5`} >Save</button>
      </div>
    </div>
  </div>
  )
}

export default AddNewMemberModal