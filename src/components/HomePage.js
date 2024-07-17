import React from 'react'
import img from '../assets/img12.jpg'
function HomePage() {
  return (
    <div className='mt-12 lg:mt-1'>
<div className='flex flex-col items-center gap-32 lg:flex-row lg:items-center lg:text-left lg:h-[600px] h-[600px]'>
  <img src={img} alt="goal" className='lg:h-[500px] lg:w-[600px] h-[300px] w-[500px]'/>
  <div className="text-center lg:text-left">
    <h1 className='lg:text-7xl text-5xl font-bold font-sans'>To Get Live</h1>
    <h1 className='lg:text-7xl text-5xl font-bold text-red-700'> Goal Alerts!</h1>
  </div>
</div>

      <div className='bg-black text-white'>
        <h2 className='flex justify-center lg:text-4xl text-2xl font-mono items-center font-bold'> About Goal Alert</h2>
        <div class="w-[250px] lg:w-[700px] md:w-[300px] mx-auto p-6">
  <p class="text-left lg:text-3xl text-sm">
  Welcome to Goal Alert, your ultimate companion for staying in the know about your favorite team's goals. With a daily subscription fee of 100 Naira or a weekly subscription at 200 Naira, you'll receive instant SMS goal alerts as soon as your team scores. Whether you're a die-hard fan or simply want to stay updated, Goal Alert keeps you in the loop. Enjoy 24 hours of coverage with the daily plan and a full week with the weekly plan. Your privacy is respected, and your personal data is safeguarded in accordance with privacy laws. Subscribe to Goal Alert today for real-time goal updates at your fingertips.

</p>
</div>

      </div>
    </div>
  )
}

export default HomePage
