import { useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";



export default function Header(props){
    //Menu Mobile.
    const [isOpen, setIsOpen] = useState(false);
    const menu = isOpen ? styles.menuOpen : styles.menuClosed;
    const icon = isOpen ? styles.iconOpen : styles.iconClosed;

    //Menu Desktop active.
    const mainIsVisible =  props.data ? styles.visible : styles.notVisible;
    const aboutIsVisible =  props.data2 ? styles.visible : styles.notVisible;
    const skillsIsVisible =  props.data3 ? styles.visible : styles.notVisible;
    const contactIsVisible =  props.data4 ? styles.visible : styles.notVisible;

    //Função que define o estado do menu mobile
    function toggleMenu(){
        setIsOpen(!isOpen);
    }
    
   
    
    
    return(
        <>
            <header className={styles.header}>
                <Image src="/vercel.svg" alt="/vercel.svg" width={100} height={100}/>
                    
                <nav className={styles.nav}>
                    <button className={styles.button} type='button' aria-label="button" onClick={()=>toggleMenu()} ><span className={icon}></span></button>
                    <ul className={menu}>
                        <li className={mainIsVisible}><Link  href={'#'}> Home</Link></li>
                        <li className= {aboutIsVisible}><Link href={'#'}>Sobre</Link></li>
                        <li className= {skillsIsVisible} ><Link href={'#'}>Habilidades</Link></li>
                        <li className= {contactIsVisible}><Link href={'#'}>Contato</Link></li>   
                       
                    </ul>
                </nav>

            </header>
        </>
    )
}