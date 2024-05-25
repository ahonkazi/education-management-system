import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { FaAngleDown } from 'react-icons/fa'
import { IoNotifications, IoNotificationsOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Header = () => {
    return (
        <header className='bg-dark-base-2 fixed top-0 left-0 w-full z-[5]  pl-[280px] 2xl:pl-[350px]'>
            <div className="app-container ">
                <nav className='flex justify-between items-center h-[64px]'>
                    <div className="nav-left">
                        <button className='bg-dark-base-3 w-10 h-10 text-2xl rounded-full text-base-3 flex items-center justify-center'>
                            <BiMenu />
                        </button>
                    </div>

                    <div className="nav-right flex items-center gap-x-4">
                        <button className='text-base-3 text-2xl'>
                            <IoNotifications/>
                        </button>

                        <div className="flex cursor-pointer select-none items-center gap-x-2 bg-dark-base-3 px-1 py-1 rounded-full">
                            <img className='w-6 h-6 rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHkJ4Tomomz6Qe9Qz-9YQkU5UhRggjXQiOg&usqp=CAU" alt="" />
                            <p className='pr-4 font-medium text-base-2'>Admin</p>
                            <FaAngleDown className='pr-1 text-sm text-base-2' />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header