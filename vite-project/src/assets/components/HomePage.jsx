import {useState} from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineCustomerService, AiOutlineTeam, AiOutlineCopyright, } from 'react-icons/ai';
import {GrProjects} from 'react-icons/gr';

const HomePage = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {
                nav?(
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href='#project' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20}/>
                            <span className='pl-4'>Project</span>
                        </a>
                        <a href='#service' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineCustomerService size={20}/>
                            <span className='pl-4'>Service</span>
                        </a>
                        <a href='#team' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineTeam size={20}/>
                            <span className='pl-4'>Team</span>
                        </a>
                        <a href='#testimonial' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineCopyright size={20}/>
                            <span className='pl-4'>Testimonial</span>
                        </a>
                    </div>
                )
                : (
                    ''
                )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href='#project' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <GrProjects size={20}/>
                    </a>
                    <a href='#service' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineCustomerService size={20}/>
                    </a>
                    <a href='#team' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineTeam size={20}/>
                    </a>
                    <a href='#testimonial' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineCopyright size={20}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;