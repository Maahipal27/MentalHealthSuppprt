import React from "react";

      

const Landing = ({ setIsVisible }) => {
  const onClickHandler = () => {
    setIsVisible(true);
    console.log(window.innerWidth);
    const scrollLength = window.innerWidth > 600 ? 815 : 970;
    setTimeout(() => {
      window.scrollTo({
        top: scrollLength,
        behavior: "smooth", // You can change this to 'auto' if you prefer an instant scroll
      });
    }, 1);
  };
  return (
    <div className='bg-[#eae7e4] flex-col flex md:flex-row md:-top-96 justify-between items-center h-screen mb-12 md:mb-0'>
      <div className='h-1/2 w-full md:h-full px-10 flex flex-col justify-center items-center mb-48 py-1'>
        <h1 className='text-[#0062b1] font-bold  text-3xl mt-14 mb-10 text-center px-5'>
        EmpowerHer: Your Path to Mental Wellness
        </h1>
       
        <p className='text-gray-600 m-3 text-center'>
        Welcome to [Platform Name], your go-to digital hub for tailored mental health support for women. 
        We address common challenges like postpartum, depression, domestic violence, and workplace stress,
         offering personalized resources, community support, expert guidance, and wellness tools.
        Join us to access a safe space for empowerment, resilience, and mental well-being.
        </p>
        <div className='pr-14 flex flex-row w-full justify-center'>
          <button className='text-center cursor-pointer bg-[#C3DCE3] text-[#2B788B] font-sans font-bold w-36 py-2 rounded-full'>
            Using this site
          </button>
          <button
            onClick={onClickHandler}
            className='text-center cursor-pointer ml-8 bg-[#C3DCE3] text-[#2B788B] font-sans font-bold w-36 py-2 rounded-full'
          >
            Find a Professional
          </button>
        </div>
      </div>
      <div className='w-full h-full flex justify-center items-center relative md:ml-10'>
        {/* First image */}
       
        <img
          className='absolute md:-top-1 right-7 md:left-0 w-[300px] h-[350px] md:w-[750px] md:h-[600px]'
          src='./img/woman.png'
          alt='Image 2'
        />
       
     </div>
    </div>
  );
};

export default Landing;

        