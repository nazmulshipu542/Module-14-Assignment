import {TypeAnimation} from 'react-type-animation';
import {FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

const ProjectPage = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='data:image/jpeg;base64,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' height='100px' width='100px' alt='/'></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I am Nazmul Shipu</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I build this website using Vite',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'I build this website using React',
        4000,
        'I build this website using Tailwind CSS',
        4000,
        'This is my first website',
        4000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', paddingLeft: '5px' }}
      repeat={Infinity}
    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProjectPage;