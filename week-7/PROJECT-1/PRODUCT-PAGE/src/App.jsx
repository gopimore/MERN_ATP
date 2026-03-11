import './App.css'
import React from 'react';
import Products from './components/Products'


function App(){
  //state (optional)
  
  //return a react element(mandatory)
  return(
   <div >
    <h1 className='text-4xl text-center bg-red-900'>PRODUCT PAGE</h1>
    <Products/>
   </div>
  )

}

export default App;

//jsx