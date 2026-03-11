
import React from 'react';



function Product(props){
  let {productId,name,price,brand,description,image} = props.product;
  return(
   <div className='flex flex-col w-80 border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-amber-700'>
    <img src={image} alt={name} className='w-full h-64 object-cover' />
    <div className='p-4'>
      <p className='text-sm text-gray-500'>ID: {productId}</p>
      <p className='text-lg font-bold'>{name}</p>
      <p className='text-sm text-gray-600'>{brand}</p>
      <p className='text-xl font-semibold text-green-600'>₹{price}</p>
      <p className='text-sm text-gray-700 mt-2'>{description}</p>
    </div>
   </div>
   
   
  );

}

export default Product;

//jsx