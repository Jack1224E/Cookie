import React, { useEffect, useState } from 'react';
import Card from './productCard';
import data from './data.json';


const ProductList  = () =>
{
    const [Products, setProducts] = useState([]);
    useEffect(
        () =>
        {
            setProducts(data);
        }, []
    );
    return(
        <div className='productList'>
          {Products.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
        />
      ))}
        </div>
    );
}
export default ProductList;

