import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="px-4 sm:px-8 mx-auto max-w-screen-md">
        <h2 className='heading text-center'>Contact Us</h2>
        <p className="text_para">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form action="#" className="space-y-5 mt-5">
          <div>
            <label htmlFor="email" className="mb-2 font-[500]">Your email</label>
            <input type="email" id="email" className="bg-transparent border border-[#9ab9e9] rounded-md w-full p-3 focus:outline-none placeholder:text-[#3f3f3f] " placeholder="name@gamil.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 font-[500]">Subject</label>
            <input type="email" id="email" className="bg-transparent border border-[#9ab9e9] rounded-md w-full p-3 focus:outline-none placeholder:text-[#3f3f3f] " placeholder="Tell how we can help you" required />
          </div>

          <div class="sm:col-span-2">
          <label htmlFor="subject" className="mb-2 font-[500]">Your Message</label>
            <textarea id="message" type="text" rows="6"  placeholder="Leave a comment..."
            className="bg-transparent border border-[#9ab9e9] rounded-md w-full p-3 focus:outline-none placeholder:text-[#3f3f3f] " 
            />
          </div>
          <button className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact