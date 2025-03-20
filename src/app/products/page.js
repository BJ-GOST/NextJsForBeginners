import ProductCard from "@/components/productCard"


export default function ProductPage(){

    return(

        <div className="product-page">

            <ProductCard image="jacket.jpg" name="Leather Jacket" price="Ksh. 1500" description="Black second hand leather jacket. Has been worn by el-chapo."/>
            <ProductCard name="Brown handbag" price="Ksh. 3500" description="Brown Gucci handbag"/>
            <ProductCard name="White silk shirt" price="Ksh. 4000" description="White Chinese Collar Silk Shirt"/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>

    )

}