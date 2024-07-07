import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-900 via-black to-black text-white">
    <div className='flex flex-col items-center mt-[80px] text-white text-center'>
    <h1 className='font-bold text-6xl'>
      Connext is now <br />
      <span className='text-center block'>Everclear</span>
    </h1>
    <p className="mt-4 text-xl ">We are thrilled to announce that Connext is now Everclear. Visit our new
    <br/> website to learn more about our rebrand and exciting updates.</p>

    <div className='mt-[40px] '>
    <button className='border-2 rounded-xl p-2 mr-[40px] text-xl h-[50px] w-[100px]
    bg-transparent border-purple-500'>Explore</button>
    <button className='border-2 rounded-xl p-2 text-xl border-white bg-white text-black' ><a href='/swap'>Bridge</a> </button>
    </div>

  </div>
    </div>
  )
}

export default Home
