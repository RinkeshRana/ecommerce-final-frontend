import React from 'react'



// flex justify-between space-y-4 custom-gradient container 
// flex flex-row justify-between space-x-9 pr-8

const Dashboard = () => {
    return (
        <div className='flex custom-gradient justify-between py-5'>

            <div className='flex w-[720px] pl-16 justify-between'>
                <div className='static cursor-pointer '>Site-Logo</div>
            </div>

            <div className='static cursor-pointer '>
                <input className='pl-2' type="text" placeholder='Search' />
            </div>

            <div className='flex w-[500px] gap-5 pr-5 justify-center'>
                <div className=''>User Name</div>
                <div className=''>User Location</div>
                <div className=''>Language</div>
            </div>

        </div>
    )
}

export default Dashboard
