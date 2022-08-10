import { useState, useEffect } from "react";
import { scrollTo } from "../functions/scrollTo";

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

    //Menu Desktop.
    const mainIsVisible =  props.data.main ? styles.visible : styles.notVisible;
    const aboutIsVisible =  props.data.about ? styles.visible : styles.notVisible;
    const skillsIsVisible =  props.data.skills ? styles.visible : styles.notVisible;
    const contactIsVisible =  props.data.contact ? styles.visible : styles.notVisible;
    
 
    return(
        <>
            <header className={styles.header}>
                <Image src="/vercel.svg" alt="/vercel.svg" width={100} height={100}/>
                    
                <nav className={styles.nav}>
                    <button className={styles.button} 
                    type='button' aria-label="button" 
                    onClick={()=>toggleMenu()} >
                        <span className={icon}/>
                    </button>

                    <ul className={menu}>
                        <li className={mainIsVisible}><Link  href={'#'}>Inicio</Link></li>
                        <li onClick={()=> scrollTo('about')} className= {aboutIsVisible}><Link href={'#'} scroll={false}>Sobre</Link></li>
                        <li onClick={()=> scrollTo('skills')} className= {skillsIsVisible}><Link href={'#'} scroll={false}>Habilidades</Link></li>
                        <li onClick={()=> scrollTo('contact')} className= {contactIsVisible}><Link href={'#'} scroll={false} >Contato</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}