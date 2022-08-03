//Components
import Header from "./Header";
import Main from "./Main";
import About from './About'
import Skills from "./Skills";
import Contact from './Contact'
import Footer from "./Footer";

//Next/React/Npm
import { useInView } from 'react-intersection-observer';

//styles.
import styles from "../styles/Containers.module.scss";



export default function Container(){
   
    //Main
    const { ref: mainRef, inView: mainIsVisible } = useInView({ threshold: .5,});
   
    //Habilidades
    const { ref: aboutRef, inView: aboutIsVisible } = useInView({threshold: .5,});

    //Habilidades
    const { ref: skillsRef, inView: skillsIsVisible } = useInView({threshold: .5,});

    //Contatos
    const { ref: contactRef, inView: contactIsVisible } = useInView({threshold: .5,});


    return(
        <>
            <Header data={mainIsVisible} data2={aboutIsVisible} data3={skillsIsVisible} data4={contactIsVisible} />
            <div  className={styles.c_MainImage}>
                <div ref={mainRef}  className={styles.c_Main} >
                    <Main/> 
                </div>
            </div>  

            <div  ref = {aboutRef} className={styles.c_About}>
            <div className={styles.separador}/>
                <About />
            </div>

        
            <div  ref = {skillsRef} className={styles.c_Skills}>
            <div className={styles.separador2}/>
                <Skills />
            </div>

            <div  className={styles.c_ContactImage}>
            <div  ref = {contactRef} className={styles.c_Contact}>
                <Contact />
            </div>
            </div>

            <div className={styles.c_Footer}>
                <Footer/>
            </div>

            
            

        </>
    )
}



