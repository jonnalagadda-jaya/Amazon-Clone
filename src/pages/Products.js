import React from 'react'
import { useLoaderData } from 'react-router-dom'
import StarIcon from "@mui/icons-material/Star"
import ApiIcon from "@mui/icons-material/Api"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/amazonSlice'

const Products = () => {
  const dispatch = useDispatch()
  const data = useLoaderData();
  const productData = data.data;
  return (
      <div className='max-w-screen-2x1 mx-auto grid grid-cols-4 gap-10 px-4'>{
        productData.map((item)=>(
          <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30
          hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative'>
         <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>
             {item.category}
            </span>
          <div className='w-full h-auto flex items-center justify-center relative group'>
            <img className='w-52 h-64 object-contain' 
            src={item.image} 
            alt="Product Image"/>
            <ul className='w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center
            gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700 '>
              <li className='productLi'>
                compare {" "}<span><ApiIcon /></span>
              </li>
              <li className='productLi'>
                Add to Cart {" "}<span><ShoppingCartIcon /></span>
              </li>
              <li className='productLi'>
                View Details {" "}<span><ArrowCircleRightIcon /></span>
              </li>
              <li className='productLi'>
                Add to Wish List {" "}<span><FavoriteIcon /></span>
              </li>
            </ul>
          </div>
          <div className='px-4 z-10 bg-white'>
          <div className='flex items-center justify-between'>
            <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium'>
            {item.title}  </h2> 
            </div>
            <div className='flex mt-6 gap-20'>
              <div>
            <p className='text-sm text-gray-600 font-semibold'>
              ${item.price}
            </p>
            </div>
            <div className='text-yellow-500 float-right'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
                id:item.id,
                title:item.title,
                desctiption:item.description,
                price:item.price,
                category:item.category,
                image:item.image,
                quantity:1,
            }))}
            className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400
            to-yellow-400 to yellow-200 border hover:from-yellow-300 hover:to-yellow-border-yellow-500
            hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
          </div>
          </div>
        ))
        }
        </div> 
      
  );
}


export default Products;