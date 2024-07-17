import React from 'react';

function PlayPage() {
  return (
    <div className='flex justify-center items-center lg:h-screen mt-16 lg:mt-1'>
      <div className='border-4 border-black lg:m-4 m-9 sm:m-8 w-full sm:w-3/4 md:w-1/2 lg:w-[700px] p-4 sm:p-6 mx-4 sm:mx-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>
          How To Play
        </h1>
        <p className='font-bold text-md sm:text-base text-justify'>
        1.	Choose your preferred subscription plan: 100 Naira for the daily plan or 200 Naira for the weekly plan.<br/>
2.	Send "GAD" to 13276 for the daily subscription or "GAW" for the weekly subscription.<br/>
3.	Upon successful subscription, the fee will be deducted from your account.<br/>
4.	Get ready to receive real-time SMS goal alerts when your chosen team scores a goal.<br/>
5.	To unsubscribe, simply send "STOP GAD" for the daily plan or "STOP GAW" for the weekly plan.<br/>
6.	Enjoy the convenience of staying updated with your favorite team's goals!<br/>

        </p>
      </div>
    </div>
  );
}

export default PlayPage;
