import React, { useState } from 'react'

const Swap = () => {
  const [balance, setBalance] = useState(0)

  const handleBalanceChange = (e) => {
    const value = e.target.value
    // Allow only numbers and ensure the value is not negative
    if (!isNaN(value) && Number(value) >= 0) {
      setBalance(value)
    }
  }

  return (
    <div>
      Swap

      <div className='flex justify-center items-center'>
        <div className='relative border-2 border-red-300 w-1/3 h-[600px]'>

          {/* Container for Bridge and settings button */}
          <div className='absolute top-0 left-0 right-0 flex justify-between p-4'>
            <h1 className='text-black text-xl font-medium'>Bridge</h1>
            <img className='h-[30px] w-[30px]' src='https://cdn3.emoji.gg/emojis/6576-settings.png' alt='setting-btn' />
          </div>

          {/* Container for from and to */}
          <div className='mt-[60px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col items-start pl-4'>
                <h3>From</h3>
                <select className='mt-2 border border-gray-300 p-2 rounded'>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
              <div className='flex flex-col items-center mx-4'>
                <button className='p-2 border border-gray-300 rounded bg-gray-200 mt-6'>
                  →
                </button>
              </div>
              <div className='flex flex-col items-end pr-4'>
                <h3>To</h3>
                <select className='mt-2 border border-gray-300 p-2 rounded'>
                  <option value="2">Option 2</option>
                  <option value="1">Option 1</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
          </div>

          {/*Send container*/ }
          <div className='mt-[40px] p-4'>
            <div className='flex justify-between'>
              <h1>You Send</h1>
              <p>Balance:</p>
            </div>

            <div className='border p-4 mt-2'>
              <div className='flex justify-between'>
                <select className='border border-gray-300 p-2 rounded'>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <input
                  className='ml-4 border border-gray-300 p-2 rounded'
                  type='number'
                  value={balance}
                  onChange={handleBalanceChange}
                  min='0'
                />
              </div>
            </div>
          </div>

         {/*Receive container*/ }
         <div className='mt-[40px] p-4'>
         <div className='flex justify-between'>
           <h1>You Send</h1>
           <p>Balance:</p>
         </div>

         <div className='border p-4 mt-2'>
           <div className='flex justify-between'>
             <select className='border border-gray-300 p-2 rounded'>
               <option value="1">Option 1</option>
               <option value="2">Option 2</option>
               <option value="3">Option 3</option>
             </select>
             <input
               className='ml-4 border border-gray-300 p-2 rounded'
               type='number'
             />
           </div>
         </div>
       </div>


        </div>
      </div>

    </div>
  )
}

export default Swap