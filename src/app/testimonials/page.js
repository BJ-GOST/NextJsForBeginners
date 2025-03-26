'use client'
import { useEffect, useState } from 'react'

export default function Testimonials(){

    const [count, setCount] = useState(1000)

    function increment(){
        setCount(count + 1000)
    }

    const userName = 'Alex'

    useEffect(()=>{

        console.log(userName)

    }, [])


    return(
       <button className='count-btn' onClick={increment}>{count}</button>
    )
}