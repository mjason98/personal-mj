import React from 'react';
import PersonalInfoComponent from './components/PersonalInfo';
import NewPage from './components/NewPage';

const HomePage = async () => {
  
  return (
    <div className='flex flex-row gap-10 items-center justify-between  max-w-[90%] max-h-[90%] text-white'>
    <div className='flex flex-col gap-8 p-5 bg-[#3c414a] rounded-xl min-w-[200px] '>
      <PersonalInfoComponent />
      <NewPage pageName='projects' color='rose'/>
      <NewPage pageName='articles' color='blue'/>
      <NewPage pageName='games' color='amber'/>
    </div>
    <div className='flex flex-col  p-5 bg-[#3c414a] rounded-xl'>
      <div>Relevant Posts</div>
      <div>a</div>
      <div>b</div>
    </div>
    </div>
  );
};

export default HomePage;