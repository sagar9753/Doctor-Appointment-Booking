import React from 'react'

const Tabs = ({ tab, setTab, tabs }) => {
    return (
        <div className='flex justify-center border-b border-solid border-[#05050534] '>
            {
                tabs.map((ele, ind) => {
                    return(
                        <button key={ind} onClick={() => setTab(ele)}
                            className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === ele && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== ele && 'hover:text-[#899c8e] hover:border-b'}`}>
                            {ele}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Tabs