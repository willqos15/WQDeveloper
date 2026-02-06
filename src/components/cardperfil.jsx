import styles from './cardperfil.module.css'

import imagem from '../img/artwill2.png'

import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

export default function CardPerfil() {

    return (<>
        <section className={styles.cardp} id="perfil">
            <div className={styles.blur}>

                <section className={styles.foto}>
                    <img src={imagem}></img>
                </section>
                <section className={styles.info}>
                    <div className={styles.square}>
                        <h1>Olá, bem vindo!</h1>

                        <p>Sou William, Desenvolvedor Web Front-end, criando interfaces atrativas que conectam pessoas às soluções digitais</p>

                        <hr />

                        <div className={styles.link}>

                        <ul>

                            <li>
                                <a href="https://github.com/willqos15"
                                    target="_blank"> <FaGithub /> </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/william-queiroz-a36573120/" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </li>

                            <li>
                                <a href="mailto:willqos15@gmail.com">
                                    <MdOutlineAlternateEmail />
                                </a>
                            </li>

                            <li>
                                <a href="https://wa.me/5593991878598"
                                     target="_blank">
                                    <IoLogoWhatsapp />
                                </a>
                            </li>

                            
                        </ul>

                      
                                <a className={styles.downl} href="/William-Desenvolvedor-Frontend.pdf"
                                    target="_blank">
                                    Currículo
                                    <FaFileDownload className={styles.icodown} />
                                </a>
                                </div>
                            





                    </div>
                </section>
            </div>
            <hr />

        </section>



    </>)
}