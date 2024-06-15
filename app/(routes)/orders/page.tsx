import { Trash } from 'lucide-react'
import React from 'react'

const page = () => {
  
  return (
    <div className='mt-3'>
    <h2 className='font-bold text-lg'>Latest Laundry</h2>
    <div className='grid grid-cols-4 bg-slate-200 p-2 mt-3'>
        <h2 className='font-bold'>Name</h2>
        <h2 className='font-bold'>Amount</h2>
        <h2 className='font-bold'>Date</h2>
        <h2 className='font-bold'>Action</h2>
    </div>
    {/* {expensesList.map((expenses,index)=>( */}
    
        <div  className='grid grid-cols-4 bg-slate-50 p-2'>
         <h2>Laundry</h2>
         <h2>5</h2>
         <h2>5/5/2024</h2>
         <h2>
            <Trash className='text-red-600 cursor-pointer'
            //   onClick={()=>deleteExpense(expenses)}
            />
         </h2>
     </div>
    {/* ))} */}
</div>
  )
}

export default page
