import React from 'react';
import Link from 'next/link';
import PersonalInfoComponent from './components/PersonalInfo';
// <Link href="/projects/1">Go to Project 1</Link>

const HomePage = async () => {
  
  return (
    <div className='flex flex-row gap-10 items-center justify-between  max-w-[90%] max-h-[90%] text-white'>
    <div className='flex flex-col gap-8 p-5 bg-[#3c414a] rounded-xl min-w-[200px] '>
      <PersonalInfoComponent />
      <div>Home Page 2</div>
    </div>
    <div className='flex flex-col  p-5 bg-[#3c414a] rounded-xl'>
      <div>Recents</div>
      <div>a</div>
      <div>b</div>
    </div>
    </div>
  );
};

export default HomePage;