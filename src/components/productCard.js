'use client'

import Image from "next/image"

export default function ProductCard({image, name, price, description}){

    // constructing a path
    const imageInfo = `/product/${image}`

    const productImg = document.getElementById('product-img')
    console.log(productImg)

    return(

        <div className="product-card">

            <div className="product-image" id="product-img">

                <Image src={imageInfo} alt="some text for the image" layout="fill" objectFit="cover"/>
                
            </div>

            <div className="product-descr">
                <div className="tags">
                    <span>{name}</span>
                    <span>{price}</span>
                </div>
                <div className="descr">
                    <p><i>{description}</i></p>
                </div>
            </div>

        </div>

    )

}