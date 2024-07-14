import React, { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
    <div className='bg-gradient-to-r from-purple-900 via-black to-black  min-h-screen'>
     <h1 className='text-blue-200 text-center text-xl font-semibold'>Swap</h1>

      <div className='flex justify-center items-center mt-[40px] '>
        <div className='relative border-4 border-transparent w-1/3 h-[720px] bg-slate-900'>

          {/* Container for Bridge and settings button */}
          <div className='absolute top-0 left-0 right-0 flex justify-between p-4'>
            <h1 className='text-white text-xl font-medium'>Bridge</h1>
            <img className='h-[30px] w-[30px] text-white' src='https://cdn3.emoji.gg/emojis/6576-settings.png' alt='setting-btn' />
          </div>

          {/* Container for from and to */}
          <div className='mt-[60px] p-4'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col items-start pl-4'>
                <h3 className='font-medium text-white'>From</h3>
                <select className='mt-2 border border-gray-300 p-2 rounded'>
                  <option value="1">Diam</option>
                  <option value="2">Polygon</option>
                  <option value="3">Optimism</option>
                  <option value="4">Base</option>
                  <option value="5">Arbitrum</option>
                </select>
              </div>
              <div className='flex flex-col items-center mx-4'>
                <button className='p-2 border border-gray-300 rounded bg-gray-200 mt-6'>
                  →
                </button>
              </div>
              <div className='flex flex-col items-end pr-4'>
                <h3 className='font-medium text-white'>To</h3>
                <select className='mt-2 border border-gray-300 p-2 rounded'>
                <option value="1">Arbitrum</option>
                <option value="2">Polygon</option>
                <option value="3">Optimism</option>
                <option value="4">Base</option>
                <option value="5">Diam</option>
                </select>
              </div>
            </div>
          </div>

          {/*Send container*/ }
          <div className='mt-[30px] p-4'>
            <div className='flex justify-between'>
              <h1 className='font-medium text-white'>You Send</h1>
              <p className='font-medium text-white'>Balance:</p>
            </div>

            <div className='border border-transparent p-4 mt-2'>
              <div className='flex justify-between'>
                <select className='border border-gray-300 p-2 rounded'>
                  <option value="1">USDT</option>
                  <option value="2">USDC</option>
                  <option value="3">DAI</option>
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
         <div className='mt-[30px] p-4'>
         <div className='flex justify-between'>
           <h1 className='font-medium text-white'>You Receive</h1>
           <p className='font-medium text-white'>Balance:</p>
         </div>

         <div className='border border-transparent  p-4 mt-2'>
           <div className='flex justify-between'>
             <select className='border border-gray-300 p-2 rounded'>
               <option value="1">DAI</option>
               <option value="2">USDT</option>
               <option value="3">USDC </option>
             </select>
             <input
               className='ml-4 border border-gray-300 p-2 rounded'
               type='number'
             />
           </div>
         </div>
       </div>

       {/*Additional Info */ }
       <div className='mt-[30px] p-4'>
       <h1 className='font-medium text-white'>Additional Info</h1>
       <div className='border border-blue-300 p-4 mt-2 flex justify-between text-white'>
         <p>Estimated time</p>
         <p>~60 sec</p>
         </div>
       </div>

       {/*Wallet connect */}
       <div className='mt-[8px] flex  justify-center'>
       <ConnectButton />
     </div>
     

        </div>
      </div>

    </div>
  )
}

export default Swap
