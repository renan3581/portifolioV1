import { useState, useEffect } from "react";


import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";



export default function Header(props){
    //Menu Mobile.
    const [isOpen, setIsOpen] = useState(false);
    const menu = isOpen ? styles.menuOpen : styles.menuClosed;
    const icon = isOpen ? styles.iconOpen : styles.iconClosed;

    //Função que define o estado do menu mobile
    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    //Menu Desktop active.
    const mainIsVisible =  props.data ? styles.visible : styles.notVisible;
    const aboutIsVisible =  props.data2 ? styles.visible : styles.notVisible;
    const skillsIsVisible =  props.data3 ? styles.visible : styles.notVisible;
    const contactIsVisible =  props.data4 ? styles.visible : styles.notVisible;
    
    function scrollToAbout(){
        const element = document.querySelector('#about') 
        element.scrollIntoView({behavior: 'smooth'})  
    }

    function scrollToSkills(){
        const element = document.querySelector('#skills') 
        element.scrollIntoView({behavior: 'smooth'})  
    }

    function scrollToContact(){
        const element = document.querySelector('#contact') 
        element.scrollIntoView({behavior: 'smooth'})  
    }
    
    return(
        <>
            <header className={styles.header}>
                <Image src="/vercel.svg" alt="/vercel.svg" width={100} height={100}/>
                    
                <nav className={styles.nav}>
                    <button className={styles.button} type='button' aria-label="button" onClick={()=>toggleMenu()} ><span className={icon}></span></button>
                    <ul className={menu}>
                        <li className={mainIsVisible}><Link  href={'#'}> Home</Link></li>
                        <li onClick={()=> scrollToAbout()} className= {aboutIsVisible}><Link href={'#'} scroll={false}>Sobre</Link></li>
                        <li onClick={()=> scrollToSkills()} className= {skillsIsVisible} ><Link href={'#'} scroll={false}>Habilidades</Link></li>
                        <li onClick={()=> scrollToContact()}  className= {contactIsVisible}><Link  href={'#'} scroll={false} >Contato</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}