import React from 'react'
import { middleList } from '../../constants'
import FooterMiddleList from './FooterMiddleList';
import LanguageIcon from '@mui/icons-material/Language';


const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      <div className='w-full border-b-[1px] border-gray-500 p-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:place-items-center md:items-start'>
               {
                middleList.map((item) => (
                    <FooterMiddleList
                        key={item._id}
                        title={item.title}
                        listItem={item.listItem} />
                )) }
               <div>
            </div>
        </div>
      </div>
    </div>
    <div className='w-full flex gap-6 items-center justify-center py-6'>
      <div>
      <img src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" width={113} alt='Amazon' />
      </div>
      <div className='flex gap-2'>
        <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor_pointer duration-200 px-2 py-1'>
          <span>< LanguageIcon /></span>
          English</p>
      </div>
    </div>
  </div>

  )
}
 
export default FooterMiddle;