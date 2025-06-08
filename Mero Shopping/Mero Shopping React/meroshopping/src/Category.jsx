import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Category() {

    let { cid } = useParams()
    let [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${cid}`)
            .then((a) => a.json())
            .then((c) => setProduct(c.products));
    }, [cid])

    const addToCart = (item) => {
        let cartObj = JSON.parse(localStorage.getItem('cart'));
        if (!cartObj) {
            cartObj = [];
        }
        cartObj.push(item);
        localStorage.setItem('cart', JSON.stringify(cartObj));
    };

    return (
        <>
            <div className='w-[1400px] container m-auto'>
                {product.map((a) => (
                    <div className='shadow p-2'>
                        <img src={a.images ? a.images[0] : ''} alt="" width={200} height={200} />
                        <div>
                            <h2>{a.title}</h2>
                            <p>{a.price}</p>
                            <button onClick={() => addToCart({ name: "", image: "" })}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Category
