import React from 'react'

const Tabs = ({ tab, setTab, tabs }) => {
    console.log(tab, tabs);
    return (
        <div className='flex justify-center border-b border-solid border-[#05050534] '>
            {
                tabs.map((ele, ind) => {
                    return(
                        <button onClick={() => setTab(ele)}
                            className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === ele && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== ele && 'hover:text-[#899c8e] hover:border-b'}`}>
                            {ele}
                        </button>
                    )
                })
            }
            {/* <button onClick={() => setTab("about")}
                className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === "about" && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== "about" && 'hover:text-[#899c8e] hover:border-b'}`}>
                About
            </button>
            <button onClick={() => setTab("feedback")}
                className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === "feedback" && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== "feedback" && 'hover:text-[#899c8e] hover:border-b'}`}>
                Feedback
            </button>
            <button onClick={() => setTab("book")}
                className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === "book" && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== "book" && 'hover:text-[#899c8e] hover:border-b'}`}>
                Appointment
            </button> */}
        </div>
    )
}

export default Tabs