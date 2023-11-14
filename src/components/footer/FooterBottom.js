import React from 'react'
import { footerBottomItem } from '../../constants'

const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom py-8" style={{backgroundColor: '#040720'}}>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='w-full grid grid-cols-6 gap-3 place-content-center text-gray-400'>
          {footerBottomItem.map((item)=>(
            <div key={item._id}>
              <p className='w-32 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3'>{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FooterBottom;