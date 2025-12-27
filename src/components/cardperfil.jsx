import styles from './cardperfil.module.css'

import imagem from '../img/artwill2.png'


export default function CardPerfil() {

    return (<>
        <section className={styles.cardp}>
            <div className={styles.blur}>

                <section className={styles.foto}>
                    <img src={imagem}></img>
                </section>
                <section className={styles.info}>
                    <div className={styles.square}>

                        <h1>Olá, Bem Vindo!</h1>
                        <hr />
                        <p>Me chamo William, sou desenvolvedor Web e aqui você encontra meus projetos e aprendizados.</p>
                    </div>
                </section>
            </div>
            <hr />

        </section>

        <div className={styles.rollimg}>
            <div>
              {/* <img src={imagem} /> */}
                </div>
            <div className={styles.degrade}></div>
        </div>

    </>)
}