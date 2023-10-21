import React from 'react'
import Header from '../header/Header'
import Edit from '../products/Edit'

const ProductPage = () => {
  return (
    <>
        <Header/>
        <div className='px-6'>
            <h1 className='text-4xl font-bold text-center mb-4'>
                Ürünler
            </h1>
            <div>
                <Edit />
            </div>

        </div>
    </>
  )
}

export default ProductPage
