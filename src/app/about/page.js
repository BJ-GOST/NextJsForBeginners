"use client"
import { useEffect, useState } from "react"


export default function AboutPage(){

    const [menu, openMenu] = useState('open')

    function toggleMenu(){
        openMenu(menu ==='open'?'close':'open')
    }


    return(

        <div className="about-page">

            <button className="menu-btn" onClick={toggleMenu}>Menu</button>

            <div className={`${menu}`}></div>

        </div>

    )
    
}