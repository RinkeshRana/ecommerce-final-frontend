import React from 'react'

const Navbar = () => {
    return (
        <>

            <nav className='hidden md:block'>
                <ul className='flex justify-around bg-slate-400 custom-gradient py-3 font-semibold' >
                    <li className='flex hover:cursor-pointer hover:text-gray-300 space-x-3'>
                        <span>
                            <img width={25} height={25} src="/menu-icon.svg" alt="menu" />
                        </span>
                        <span>
                            All
                        </span>
                    </li>
                    <li className='hover:cursor-pointer hover:text-gray-300'>Emporium Best Sells</li>
                    <li className='hover:cursor-pointer hover:text-gray-300'>Mobiles</li>
                    <li className='hover:cursor-pointer hover:text-gray-300'>Customer Service</li>
                    <li className='hover:cursor-pointer hover:text-gray-300'>Fashion</li>
                    <li className='hover:cursor-pointer hover:text-gray-300'>Electronics</li>
                    <li className='hover:cursor-pointer hover:text-gray-300'>Home & Kitchen</li>
                    <li className='hover:cursor-pointer hover:text-gray-300'>Books</li>
                    <li className='hover:cursor-pointer hover:text-gray-300'>Computers</li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar
