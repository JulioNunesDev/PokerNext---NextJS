import Image from "next/image"
import styles from '../../styles/About.module.css'
export default function Sobre(){
    return(
       <div className={styles.about}>
           <h1>Sobre o projeto</h1>
           <p>lorem</p>
           <Image src="/images/charizard.png" width="300" height="300" alt="pokemon"/>
       </div>
    )
}