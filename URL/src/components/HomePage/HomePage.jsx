import React from 'react'
import illusration from "./illustration-working.svg"

export default function HomePage() {
  return (
    <div> 
        <div className='w-full flex justify-around'>
            <div>
                <h1>More than just <br /> shorter link</h1>
                <p>Build your brand's recognation and get detailed insight on how your links are performing</p>
                <button></button>
            </div>
            <div>
                <img src={illusration} alt="" />
            </div>
        </div>
      
    </div>
  )
}
