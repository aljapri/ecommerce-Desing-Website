import { contactDetails } from '@/constant'
import React from 'react'

function ContactDetails({fatehr,sib}:{fatehr?:string,sib?:string}) {
  return (
    <div className={` ${fatehr}`}>
    {contactDetails.map((item)=>(
          <p key={item.text} className={sib}>{item.text}</p>
    ))}
  </div>
  )
}

export default ContactDetails
/**
     <div className={` ${fatehr}`}>
      {contactDetails.map((item)=>(
            <p key={item.text} className={sib}>{item.text}</p>
      ))}
    </div>

        <div className={"space-y-4"}>
      {contactDetails.map((item)=>(
            <p key={item.text} className="text-[#0a4275] text-sm">{item.text}</p>
      ))}
    </div>
 */