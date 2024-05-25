import React from 'react'
import logo from "../../assets/logo.png"
import { Menu } from './Menu'
const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 z-[10]">
            <aside className='h-screen border-r border-dark-base-3 flex flex-col w-[280px] 2xl:w-[350px] bg-dark-base-2'>
                <div className="sidebar-header shrink-0 w-full px-section py-section">
                    <div className="logo flex items-center justify-center">
                        <img className='h-16 rounded-lg' src={logo} alt="" />
                    </div>
                </div>

                {/* sidebar menu */}
                <Menu />
            </aside>
        </div>
    )
}

export default Sidebar