import React from 'react'
import { menuData } from '../../static/menu'
import { NavLink } from 'react-router-dom'

export const Menu = () => {

    return (
        <menu className='h-full w-full px-4 overflow-y-auto '>
            <ul className='flex flex-col gap-y-2 2xl:gap-y-4 pb-10'>
                {
                    menuData.map((item, index) =>
                        <li key={item?.id} className=''>
                            <NavLink to={item?.path} className={`w-full nav-link flex text-base-2 select-none rounded-md cursor-pointer items-center gap-x-2 2xl:gap-x-4 bg-dark-base-3 py-2 px-4`}>
                                <span className='text-2xl'>
                                    {item?.icon}
                                </span>
                                <p>{item?.name}</p>
                            </NavLink>

                        </li>
                    )
                }

            </ul>
        </menu>
    )
}
