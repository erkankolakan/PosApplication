
const Products = () => {
  return (
    <div className="products-wrapper gap-4 grid grid-cols-card">

        <div className="products-item border hover:shadow-lg cursor-pointer transition-all select-none">
            <div className="product-img">
                <img
                    className="h-28 w-full border-b object-cover"
                src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" />
                <div className="product-info flex flex-col border p-4">
                    <span className="font-semibold">Elma</span>
                    <span>12₺</span>
                </div>
            </div>
        </div>

        

      
    </div>
  )
}

export default Products
