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
   
    //Element is visible.
        //Main
        const { ref: mainRef, inView: mainIsVisible } = useInView({ threshold: .7,});
    
        //Habilidades
        const { ref: aboutRef, inView: aboutIsVisible } = useInView({threshold: .7,});

        //Habilidades
        const { ref: skillsRef, inView: skillsIsVisible } = useInView({threshold: .7,});

        //Contatos
        const { ref: contactRef, inView: contactIsVisible } = useInView({threshold: .7,});

     
    return(
        <div className={styles.containerCentral}>
            
            <Header 
            data={{main:mainIsVisible, about:aboutIsVisible, skills:skillsIsVisible, contact:contactIsVisible}}/>

            
                <section className={styles.c_MainImage}>  
                    <div ref={mainRef}  className={styles.c_Main} >
                            {mainIsVisible ? <Main/> : null}
                    </div>
                </section>  

                <div id="about" className={styles.anchor}/> 
                <section ref = {aboutRef} className={styles.c_About}>
                    {aboutIsVisible ? <About/> : null}
                </section>

                <div id="skills" className={styles.anchor}/>  
                <section ref = {skillsRef} className={styles.c_Skills}>
                
                    {skillsIsVisible ? <Skills/> : null}
                </section>

                <div id="contact" className={styles.anchor}/>   
                <section className={styles.c_ContactImage} >
                    <div ref = {contactRef}  className={styles.c_Contact}>
                        
                        {contactIsVisible ? <Contact/> : null}
                    </div>
                </section>

                <section className={styles.c_Footer}>
                    <Footer/>
                </section>
            </div>
            
            

        
    )
}



