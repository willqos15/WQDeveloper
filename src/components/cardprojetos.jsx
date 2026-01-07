import { useState, useRef } from 'react'
import styles from './cardprojetos.module.css'
import { motion, AnimatePresence } from 'motion/react'
import { IoIosArrowUp } from "react-icons/io";

export default function CardProjetos() {

    const [openXmen, setOpenXmen] = useState(false)
    const [openAep, setOpenAep] = useState(false)
    const [openBot, setOpenBot] = useState(false)
    const xmenRef = useRef(null)
    const aepRef = useRef(null)
    const botRef = useRef(null)

    function Rolar(suaref) {


        if (!suaref.current) return

        console.log("passou current")

        const el = suaref.current
        console.log(el)

        const observador = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                    if (el === xmenRef.current) { setOpenXmen(false) }
                    if (el === aepRef.current) { setOpenAep(false) }


                    observador.disconnect()
                }

            }, { root: null, threshold: 0 }
        )

        observador.observe(el)
        el.scrollIntoView({ behavior: "smooth", block: "start" })

    }

    return (<motion.div id="projetos"

        style={{ originX: 0.5 }}
        viewport={{ once: true }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}>



        <div className={styles.transicao}></div>

        <section className={styles.cardpro}>
            <h1 > Projetos: </h1>













            <section>
                <div className={styles.infopro}>
                    <h2 ref={botRef}><strong>AvaBot - PetFeliz</strong></h2>

                    <img className={styles.mainfoto} src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_222925_sszory.png"></img>

                    <p> <strong>Resumo:</strong> Projeto autoral desenvolvido para aplicar React, TypeScript, Tailwind, MySQL e Node.js na construção de um chatbot integrado a uma API de LLM.
                        A aplicação foi pensada para coletar feedbacks de pequenas empresas, direcionando clientes após o atendimento para registrar sua experiência de forma simples e conversacional.

                    </p>

                    <div className={styles.link}>
                        <h3><strong>Links:</strong></h3>
                        <ul>
                            <li>
                                <a href='https://github.com/willqos15/Avabot_Backend'
                                    target="_blank">
                                    {">"}Servidor Github</a>
                            </li>
                            <li>

                                <a href='https://github.com/willqos15/Avabot_Frontend'
                                    target="_blank">
                                    {">"}Frontend Github</a>
                            </li>

                            <li>
                                <a href='https://petfeliz-rho.vercel.app/'
                                    target="_blank">
                                    {">"}Site do Projeto</a>
                            </li>
                        </ul>

                    </div>

                    <button onClick={() => setOpenBot(!openBot)}>
                        {openBot ? "Ver menos" : "Ver mais sobre"}
                    </button>

                    <AnimatePresence>
                        {openBot &&
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <hr />

                                <h3>Habilidades Desenvolvidas:</h3>

                                <p>
                                    <strong>Backend:</strong> Desenvolvimento de um backend em Node.js e Express, integrando um modelo de LLM (Groq / Llama-3.1-8B) para funcionamento do chatbot.
                                    Os dados temporários das conversas são armazenados em Redis, enquanto o histórico completo é persistido em MySQL.
                                    Para evitar conexões frequentes ao banco relacional a cada mensagem, foi implementada uma estratégia de salvamento baseada em tempo de inatividade do usuário, reduzindo custo e carga no sistema.
                                </p>


                                <p>
                                    <strong>Frontend:</strong> Desenvolvimento em React com TypeScript, utilizando tipagem estática para garantir maior segurança, previsibilidade e melhor leitura de erros durante o desenvolvimento.
                                    A interface foi construída com Tailwind CSS, acelerando a criação de layouts e facilitando a implementação de responsividade.
                                </p>



                                <hr />
                                <p>
                                    <strong>Resultado:</strong> Aplicação funcional com potencial comercial, desenvolvida do zero com foco em aprendizado prático e decisões técnicas reais.
                                    A construção do sistema priorizou o entendimento da lógica, fluxo de dados e arquitetura, evitando soluções prontas para aprofundar o domínio do processo.
                                </p>


                                <hr />

                                <h3>Imagens:</h3>
                                <div className={styles.imgfull}>
                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_223034_zh6nar.png"></img>

                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_233818_zl6juu.png"></img>

                                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_233836_by8618.png"></img>


                                </div>


                                <a className={styles.arrow} onClick={() => { Rolar(botRef) }}>
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

                    <p>
                        <strong>Resumo:</strong> Projeto autoral desenvolvido para aplicar conceitos de criação de servidores, modelagem de banco de dados e consumo de APIs.
                        O sistema permite que um administrador gerencie itens de achados e perdidos, enquanto o público geral pode visualizar os registros de forma aberta.
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
                                    {">"}Site do Projeto</a>
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

                                <p>
                                    <strong>Backend:</strong> Desenvolvimento de uma API com Node.js, Express e MongoDB, incluindo autenticação de usuários com JWT, senha criptografada (hash) e Bearer Tokens.
                                    Foram implementadas boas práticas de segurança e gerenciamento de CORS. Testes com cookies foram realizados, mas descartados devido a inconsistências em navegadores Safari e dispositivos iOS.
                                </p>


                                <p>
                                    <strong>Frontend:</strong> Frontend desenvolvido em React, com consumo contínuo de APIs para cadastro, edição e exclusão de itens, incluindo upload de imagens via Cloudinary e sincronização de IDs.
                                    Foram aplicadas boas práticas de forms usando React Hook Form, mascaramento de inputs, responsividade com media queries e implementação de menu hamburguer. Ajustes de compatibilidade foram realizados, especialmente em dispositivos iOS.
                                </p>



                                <hr />
                                <p>
                                    <strong>Resultado:</strong> Projeto funcional, com cadastro, edição e exclusão de itens, upload de imagens e responsividade completa.
                                    O sistema pode ser adaptado para uso comercial, como um portal de doações de animais, mantendo a estrutura de administração e visualização pública.
                                </p>

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





















            <section>
                <div className={styles.infopro}>
                    <h2 ref={xmenRef}>
                        <strong>X-men: Sala de Perigo</strong></h2>

                    <img className={styles.mainfoto} src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766843851/Captura_de_tela_2025-12-25_155905_-_Copia_hpitbe.png"></img>

                    <p>
                        <strong>Resumo:</strong> Protótipo de jogo autoral desenvolvido para aplicar conhecimentos em React, HTML, CSS e JavaScript.
                        O projeto explora lógica de programação, manipulação de estado e organização de componentes no React.
                    </p>



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
                                <p>
                                    <strong>Manipulação de variáveis:</strong> Implementação de uma lista global de objetos para armazenar atributos dos personagens, como vida e energia.
                                    A lógica de atualização permite que danos e recuperação sejam aplicados automaticamente, mantendo o estado dos personagens consistente durante o jogo.
                                </p>


                                <p>
                                    <strong>Condicionais:</strong> Implementação de lógica de aleatoriedade para definir o oponente e a ordem de partida, utilizando estruturas condicionais para controlar as ações do jogo.
                                </p>

                                <p>
                                    <strong>Hooks:</strong> Aplicação de hooks do React, incluindo <code>useState</code>, <code>useEffect</code> e lifting state up, para gerenciar propriedades de componentes e atualização de estado de forma eficiente.
                                </p>
                                <hr />

                                <p>
                                    <strong>Resultado:</strong> Projeto autoral funcional, desenvolvido do zero em React, consolidando conhecimentos em gerenciamento de estado, manipulação de componentes e lógica de jogo.
                                </p>
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






        </section>
        <div className={styles.transicaofim}></div>

    </motion.div>)
}