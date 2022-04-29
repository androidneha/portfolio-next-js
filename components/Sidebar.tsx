import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {GiTie} from "react-icons/gi";
import { useTheme } from 'next-themes'

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme((theme == "dark") ? "light": "dark")
    }

    return (
        <div>
            <img
                src="https://chyldmonitor.com/images/tstm2.jpg"
                alt='user-avtar'
                className='w-32 h-32 rounded-full mx-auto'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span>XXX </span>
                YYY
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>Web Developer</p>
            <a className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500' download="name" href="">
                <GiTie className="w-6 h-6"/> Download Resume
            </a>
            <div className='flex justify-around my-5 w-9/12 my-5 md:w-full mx-auto text-green'>
                <a href=''>
                    <AiFillYoutube className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href=''>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href=''>
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-cente justify-center space-x-2'>
                    <GoLocation/>
                    <span>Delhi, India</span>
                </div>
                <p className='my-2'>neha8q@gmail.com</p>
                <p>8800655943</p>
                <button className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 my-2 text-white'>Email Me</button>
                <button onClick={changeTheme} className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 my-2 text-white'>Toggle Theme</button>
            </div>
        </div>
    )
}

export default Sidebar