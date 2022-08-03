import Image from "next/image"
import styles from "../styles/Main.module.scss"
import Link from "next/link"

export default function Main(){

    const Links = ['link1', 'link2', 'link3']

    return(
        <>
            <div className={styles.text}>
                <h1>Renan Silva</h1>
                <p>Desenvolvedor Front-End</p>
            </div>

        </>
    )
}