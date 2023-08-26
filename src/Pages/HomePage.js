import React from 'react'
import ProductCard from '../coomponents/ProductCard'
import Navbar from '../coomponents/navbar'

import FootPage from '../coomponents/foot'



function HomePage() {
  return (
   
        <div>
      {/* navbar */}
    <Navbar/>
     
      {/* body */}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
     
      {/* pagination */}
    
      {/* footer */}
      <FootPage/>
    </div>
   
  )
}

export default HomePage
