import { useState, useRef } from 'react'
import styles from './cardprojetos.module.css'
import { motion, AnimatePresence } from 'motion/react'
import { IoIosArrowUp } from "react-icons/io";

export default function CardProjetos() {

    const [openXmen, setOpenXmen] = useState(false)
    const [openAep, setOpenAep] = useState(false)
    const xmenRef = useRef(null)
    const aepRef = useRef(null)

    function Rolar(suaref) {


        if (!suaref.current) return

        console.log("passou current")

        const el = suaref.current
        console.log(el)

        const observador = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                    if(el===xmenRef.current){setOpenXmen(false)}
                    if(el===aepRef.current){setOpenAep(false)}
                    

                    observador.disconnect()
                }

            }, { root: null, threshold: 0 }
        )

        observador.observe(el)
        el.scrollIntoView({ behavior: "smooth", block: "start" })

    }

    return (<motion.div id="projetos"
    
    style={{originX: 0.5}}
    viewport={{ once: true }}
        initial = {{y:100, opacity: 0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration: 0.5, ease: "easeIn"}}>



        <div className={styles.transicao}></div>

        <section className={styles.cardpro}>
            <h1 > Projetos: </h1>

            <section>
                <div className={styles.infopro}>
                    <h2 ref={xmenRef}>
                        <strong>X-men: Sala de Perigo</strong></h2>

                    <img className={styles.mainfoto} src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766843851/Captura_de_tela_2025-12-25_155905_-_Copia_hpitbe.png"></img>

                    <p> <strong>Resumo:</strong> Foi um projeto autoral de um protótipo de jogo voltado a por em prática conhecimentos de <strong>React, HTML, CSS e Javascript</strong>.</p>

                    
                                <div className={styles.link}>
                                    <h3><strong>Links:</strong></h3>
                                    <ul>
                                        <li>
                                            <a href='https://github.com/willqos15/X-men-Jogo-React'
                                            target="_blank">
                                                {">"}Código no Github</a>
                                        </li>
                                        <li>

                                            <a href='https://willqos15.github.io/X-menJogoBETA/'
                                            target="_blank">
                                                {">"}Site do Jogo</a>
                                        </li>

                                    </ul>

                                </div>

                    <button onClick={() => setOpenXmen(!openXmen)}>
                        {openXmen ? "Ver menos" : "Ver mais sobre"}
                    </button>

                    <AnimatePresence>
                        {openXmen &&
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <hr />

                                <h3>Habilidades Desenvolvidas:</h3>
                                <p><strong>Manipulações de variáveis:</strong> Baseado em conceitos e mecânicas de jogos criei uma lista global de objetos para armazenar cada atributo dos personagens, como vida, energia e etc. Sendo possível atualizar o valores de maneira que a lógica de danos e vida se adaptassem automáticamente.</p>

                                <p><strong>Condicionais:</strong> A programação requeriu trabalhar bem com aleatoriedade para definir o oponente e quem começa a partida, necessitando diversas estruturas condicionais para filtrar as ações.</p>

                                <p><strong>Hooks:</strong> Aprimorei bastante o uso de UseEffects(), UseStates(), Lifting state up e outras maneiras de gerenciar as propriedades de um componente. .</p>
                                <hr />
                                <p> <strong>Resultado:</strong> Criar um projeto de zero e autoral foi desafiador e proveitoso. Me permitiu por em prática os conhecimentos React fixando o funcionamento e a escrita dos comandos. Era um projeto de estudo e criatividade, portanto o objetivo foi atingido com sucesso.</p>
                                <hr />

                                <h3>Imagens:</h3>
                                <div className={styles.imgfull}>
                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766689406/Captura_de_tela_2025-12-25_160005_ukxjfr.png"></img>

                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766689405/Captura_de_tela_2025-12-25_160025_twhm6f.png"></img>

                                </div>
                                

                                <a className={styles.arrow} onClick={() => { Rolar(xmenRef) }}>
                                    <IoIosArrowUp />
                                </a>

                            </motion.div>
                        }
                    </AnimatePresence>
                </div>

            </section>















            <section>
                <div className={styles.infopro}>
                    <h2 ref={aepRef}><strong>Achados & Perdidos</strong></h2>

                    <img className={styles.mainfoto} src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173422_lyyhb2.png"></img>

                    <p> <strong>Resumo:</strong> Um projeto autoral de estudo voltado a por em prática a <strong>criação de Servidores, Banco de Dados e Consumo de API </strong>.
                        O site foi pensado para pequenas empresas ou escolas, onde apenas o administrador gerencia os itens perdidos que ficam abertos a visualização para o público geral.
                    </p>

                                <div className={styles.link}>
                                    <h3><strong>Links:</strong></h3>
                                    <ul>
                                        <li>
                                            <a href='https://github.com/willqos15/API-AEPerdidos'
                                            target="_blank">
                                                {">"}Servidor Github</a>
                                        </li>
                                        <li>

                                            <a href='https://github.com/willqos15/Achados-e-Perdidos'
                                            target="_blank">
                                                {">"}Frontend Github</a>
                                        </li>

                                        <li>
                                            <a href='https://achados-e-perdidos-gray.vercel.app/'
                                            target="_blank">
                                                {">"}Site do Projeto</a> <span>Login: admin e Senha: admin</span>
                                        </li>
                                    </ul>

                                </div>

                    <button onClick={() => setOpenAep(!openAep)}>
                        {openAep ? "Ver menos" : "Ver mais sobre"}
                    </button>

                    <AnimatePresence>
                        {openAep &&
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <hr />

                                <h3>Habilidades Desenvolvidas:</h3>

                                <p><strong>Backend:</strong> Criei uma API com NodeJS, Express e Mongodb e fui aprofundando conforme a necessidade, devido o login pratiquei o uso de CORS, JWT, senha HASH, Bearer Token, criptografia e afins. Experimentei também uso do cookies no login, mas descartei por se mostrar instável em Iphone e no navegador Safari por questões de Cross-browsing.</p>

                                <p><strong>Frontend:</strong> O consumo de APIs no React foi constante, para cadastrar item, editar, excluir, pegar a imagem no front e fazer upload no Cloudinary, sincronizar com ID para exclusão. Um ótimo aprendizado! Além disso pude exercitar mascaramento de inputs, React Hook Forms, responsividade, uso de media queries, fazer um Menu comum virar menu hamburguer, ajustar bugs de compatibilidade(principalmente no sistema do Iphone).</p>


                                <hr />
                                <p> <strong>Resultado:</strong> Foi prazeroso passar por cada desafio, visto que a maioria das ferramentas eram novas para mim. Ao final fiquei satisfeito com essa versão, mesmo sabendo que existe muito a se implementar. É um projeto que pretendo futuramente evoluir para o uso comercial e ajusta-lo para um site de doações de animais e direciona-lo a uma associação local de minha cidade, Altamira - Pará.</p>
                                <hr />

                                <h3>Imagens:</h3>
                                <div className={styles.imgfull}>
                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173422_lyyhb2.png"></img>

                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695023/Captura_de_tela_2025-12-25_173555_nwdhrr.png"></img>

                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173519_lexfba.png"></img>

                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173534_mhv4to.png"></img>

                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695220/Captura_de_tela_2025-12-25_174003_wudqhw.png"></img>

                                </div>
                                

                                <a className={styles.arrow} onClick={() => { Rolar(aepRef) }}>
                                    <IoIosArrowUp />
                                </a>

                            </motion.div>
                        }
                    </AnimatePresence>
                </div>

            </section>





        </section>
        <div className={styles.transicaofim}></div>
        
    </motion.div>)
}