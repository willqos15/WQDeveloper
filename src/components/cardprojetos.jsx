import { useState, useRef } from 'react'
import styles from './cardprojetos.module.css'
import { motion } from 'motion/react'
import Projeto from './projeto';

export default function CardProjetos() {

    const xmenRef = useRef(null)
    const aepRef = useRef(null)
    const botRef = useRef(null)
    const eduRef = useRef(null)
    const n8nRef = useRef(null)
    const canoaRef = useRef(null)


    return (<motion.div id="projetos"

        style={{ originX: 0.5 }}
        viewport={{ once: true }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}>



        <div className={styles.transicao}></div>

        <section className={styles.cardpro}>
            <h1 > Projetos: </h1>

            <Projeto ref={aepRef} titulo="Achados & Perdidos"
                imagemain="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173422_lyyhb2.png"
                resumo={<>Solução digital para gerenciamento de achados e perdidos, com área administrativa para cadastro e controle dos itens e acesso público para consulta organizada das informações.<br/>
                <strong>Tecnologias:</strong> React, Javascript, React Hook Form, Node.js, Express, API REST, Cloudinary, autenticação JWT e Bearer Token, Bcrypt, Multer, MongoDB, HTML e CSS.</>}

                ullinks={<ul>
                    <li>
                        <a href='https://github.com/willqos15/API-AEPerdidos'
                            target="_blank"> {">"}Servidor Github</a>
                    </li>
                    <li>
                        <a href='https://github.com/willqos15/Achados-e-Perdidos'
                            target="_blank"> {">"}Frontend Github</a>
                    </li>

                    <li>
                        <a href='https://achados-e-perdidos-gray.vercel.app/'
                            target="_blank"> {">"}Site do Projeto</a>
                    </li>
                </ul>}

                habilidades={<>
                    <p>
                        <strong>O backend</strong> foi desenvolvido com Node.js, Express e MongoDB, priorizando simplicidade, flexibilidade do modelo de dados e fácil evolução da aplicação. A autenticação utiliza JWT com Bearer Token em um fluxo stateless, reduzindo dependência de sessões e facilitando a integração com o frontend, com senhas armazenadas via hash e controle de CORS.
                    </p>

                    <p>
                        <strong>No frontend</strong> o React foi adotado para gerenciamento de estado e integração com a API. O TanStack Query é responsável pelo controle de dados assíncronos e cache, garantindo sincronização após mutações. O upload de imagens foi delegado ao Cloudinary para evitar sobrecarga do servidor. Formulários utilizam React Hook Form, e a interface é responsiva via media queries.
                    </p>
                </>}

                resultado=" Entrega de uma solução digital completa para organização e consulta de itens de achados e perdidos, substituindo controles informais e descentralizados por um sistema único e confiável. A aplicação permite administração centralizada dos registros, acesso público claro às informações e sincronização consistente entre dados e interface, reduzindo erros operacionais e facilitando o uso tanto para administradores quanto para usuários finais.
"

                imagens={<>
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173422_lyyhb2.png"></img>

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695023/Captura_de_tela_2025-12-25_173555_nwdhrr.png"></img>

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173519_lexfba.png"></img>

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695024/Captura_de_tela_2025-12-25_173534_mhv4to.png"></img>

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766695220/Captura_de_tela_2025-12-25_174003_wudqhw.png"></img>
                </>}
            />

            <Projeto ref={botRef} titulo="AvaBot - PetFeliz"
                imagemain="https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_222925_sszory.png"
                resumo={<>chatbot conversacional com IA, voltada para coleta de feedbacks de pequenas empresas após atendimentos, registrando respostas de forma automatizada e organizada, com arquitetura pensada para desempenho e controle de dados.<br/>
                <strong>Tecnologias:</strong> React, Typescript, Tailwind, Node.js, Express, groq IA, API, Redis, MySql, HTML e CSS.</>}
                ullinks={<ul>
                    <li>
                        <a href='https://github.com/willqos15/Avabot_Backend'
                            target="_blank">
                            {">"}Servidor Github</a>
                    </li>

                    <li>
                        <a href='https://github.com/willqos15/Avabot_Frontend' target="_blank">
                            {">"}Frontend Github</a>
                    </li>

                    <li>
                        <a href='https://petfeliz-rho.vercel.app/'
                            target="_blank">
                            {">"}Site do Projeto</a>
                    </li>
                </ul>}

                habilidades={<>
                    <p><strong>Backend:</strong> Desenvolvido em Node.js e Express pela flexibilidade na construção de APIs. O Redis foi adotado para armazenar o estado temporário das conversas, evitando gravações frequentes no banco relacional a cada interação. O MySQL foi utilizado para garantindo a persistência, organização e possibilidade de análise posterior dos feedbacks. Para reduzir custo e carga no sistema, foi implementada uma estratégia de salvamento baseada em tempo de inatividade do usuário.
                    </p>


                    <p> <strong>Frontend:</strong> o React com TypeScript foi escolhido para garantir maior previsibilidade e segurança na manipulação de dados retornados pela API. O Tailwind CSS foi adotado para acelerar a construção da interface e manter consistência visual, facilitando a implementação de responsividade e ajustes rápidos no layout.</p> </>}

                resultado=" Entrega de uma aplicação funcional, com arquitetura preparada para uso real, capaz de coletar feedbacks de forma automatizada, reduzir esforço manual de atendimento e centralizar informações relevantes para análise."

                imagens={<>
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_223034_zh6nar.png"></img>

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_233818_zl6juu.png"></img>

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1767753617/Captura_de_tela_2026-01-06_233836_by8618.png"></img>
                </>}
            />


            {<Projeto ref={n8nRef} titulo="Automação de agendamento com I.A."
                resumo={<>Chatbot de agendamentos no Google Callendar, capaz de receber requisições por texto ou áudio, inclusive com múltiplas informações em uma única mensagem.<br/>
                <strong>Tecnologias:</strong> n8n, API de IA da groq, Docker, Bot Telegram e Google Callendar.</>}
                ullinks={<ul><li> <a href='https://github.com/willqos15/Automacao_de_agendamento_com_ia' target="_blank"> {">"}Github </a></li></ul>}

                habilidades="O Telegram foi por não gerar custo adicional ao cliente de infraestrutura ou aplicativos próprios. O n8n foi adotado por permitir automações flexíveis de fácil manutenção. A IA da Groq foi utilizada para evitar o uso de formulários, reduzindo atrito no uso. O suporte a áudio visando acessibilidade. O Google Calendar foi definido como agenda central por ser uma ferramenta confiável e adequada para pequenos negócios.." resultado=" Uma solução funcional, com redução significativa do tempo operacional dos atendentes e centralização completa da agenda. A aplicação aumenta previsibilidade, organização e controle dos atendimentos." 
                imagemain={"https://res.cloudinary.com/drklvmtqp/image/upload/v1770052142/Captura_de_tela_2026-02-02_124218_sovakj.png"} imagens={
                    <>
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1770052142/Captura_de_tela_2026-02-02_124218_sovakj.png" />
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1770052143/Captura_de_tela_2026-02-02_130843_kxp4ul.png" />
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1770052143/Captura_de_tela_2026-02-02_130902_rxa1tr.png" />

                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1770052142/Captura_de_tela_2026-02-02_131015_z3bivm.png" />
                        <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1770052143/Captura_de_tela_2026-02-02_131032_mqgoet.png" />
                    </>
                } />}


            <Projeto ref={eduRef} titulo="EdTech - Palavras"
                imagemain="https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153600_gs2kk2.png"
                resumo={<>Aplicação web projetada para uso em sala de aula com mediação do professor. O sistema utiliza mecânicas de jogo para apresentar conteúdos pedagógicos, além de gerar relatórios da partida em Word.<br/>
                <strong>Tecnologias:</strong> React, Typescript, Tailwind, Biblioteca Docx, HTML e CSS.</>}
                ullinks={<ul>
                    <li>
                        <a href='https://github.com/willqos15/EdTechPalavras'
                            target="_blank"> {">"}Github</a>
                    </li>

                    <li>
                        <a href='https://edtechpalavras.vercel.app'
                            target="_blank"> {">"}Site do Projeto</a>
                    </li>
                </ul>}

                habilidades={<><p><strong>Frontend:</strong>
                    A aplicação foi estruturada com uso de hooks do React para centralizar o controle de placar, energia, turnos, regras e fluxo do jogo, garantindo consistência na execução. As informações são manipuladas em arrays, permitindo alterar o conteúdo sem prejudicar a lógica central do sistema. A componentização foi pensada para facilitar a manutenção. O TypeScript foi garantiu a segurança de dados e redução de erros. O Tailwind CSS foi escolhido para acelerar o desenvolvimento da interface e garantir consistência visual.
                </p> </>}

                resultado={<> Uma aplicação que viabiliza personalização para diferentes contextos educacionais, capaz de aumentar o engajamento em sala e agilizar o trabalho do professor ainda permitindo sua autônomia.</>}

                imagens={<><img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153930_ju7dmb.png" />

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153747_hxchmf.png" />
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153804_bev9xl.png" />
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153828_wzhvql.png" />
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153847_rmimdc.png" /></>} />





            




            



            <Projeto ref={canoaRef} titulo="Canoa Tech"
                imagemain={"https://res.cloudinary.com/drklvmtqp/image/upload/v1769896350/Captura_de_tela_2026-01-31_185028_bth8es.png"} resumo={<>Site desenvolvido para apresentar de forma clara as soluções tecnológicas da Canoa Tech. O foco do projeto está em acessibilidade, usabilidade e performance, com linguagem simples e design minimalista para reduzir barreiras técnicas ao público não especializado.<br/>
                <strong>Tecnologias:</strong> React, Javascript, Tailwind, HTML Semântico e CSS. </>}

                ullinks={<ul>
                    <li><a href='https://canoatech.vercel.app/'
                        target="_blank"> {">"}Site do Projeto</a></li>
                    <li><a href='https://github.com/willqos15/canoatech'
                        target="_blank"> {">"}Github</a></li>

                </ul>}
                habilidades={<>A aplicação foi construída em React para facilitar a componentização e reutilização, permitindo manutenção e evolução simples. O JavaScript foi escolhido por atender plenamente a uma lógica de baixa complexidade. O Tailwind CSS foi adotado para acelerar o desenvolvimento e manter consistência visual. O uso de HTML semântico priorizou acessibilidade, e o layout responsivo foi planejado desde o início para garantir boa experiência em diferentes dispositivos.</>}
                resultado={<p>Entrega de um site funcional e acessível que comunica soluções tecnológicas de forma objetiva, fortalece a presença digital da Canoa Tech e atua como vitrine profissional de seus serviços.</p>}
                imagens={<>
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1769896350/Captura_de_tela_2026-01-31_185028_bth8es.png" />
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1769896351/Captura_de_tela_2026-01-31_185049_mp9rqh.png" />
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1769896350/Captura_de_tela_2026-01-31_185105_dltkb1.png" />
                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1769896350/Captura_de_tela_2026-01-31_185119_n6vo8d.png" />
                </>} />









            <Projeto ref={xmenRef} titulo="X-men: Sala de Perigo"
                imagemain="https://res.cloudinary.com/drklvmtqp/image/upload/v1766843851/Captura_de_tela_2025-12-25_155905_-_Copia_hpitbe.png"
                resumo={<>Jogo desenvolvido em React, com foco em lógica de combate, gerenciamento de estado e organização de componentes. A aplicação controle de atributos dos personagens e fluxo de partidas de forma dinâmica.<br/>
                <strong>Tecnologias:</strong> React, Hooks, useState, useEffect, Javascript, HTML e CSS.</>}

                ullinks={<ul>
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

                </ul>}

                habilidades={<>
                O estado dos personagens foi centralizado em uma estrutura única de objetos para simplificar o controle de atributos durante o fluxo do jogo. O uso de hooks do React, como useState e useEffect, foi adotado para manter o estado sincronizado com a interface, enquanto o lifting state up foi utilizado para garantir que componentes dependentes compartilhassem a mesma fonte de verdade, evitando efeitos colaterais e comportamentos imprevisíveis.
                    </>}

                resultado=" Entrega de um jogo funcional e jogável, com regras claras, fluxo estável e estrutura de componentes organizada com lógica de aplicação interativa. A estrutura de estados permitiram o jogo uma jogabilidade coesa.
                "

                imagens={<>

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766843851/Captura_de_tela_2025-12-25_155905_-_Copia_hpitbe.png" />

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766689406/Captura_de_tela_2025-12-25_160005_ukxjfr.png"></img>

                    <img src="https://res.cloudinary.com/drklvmtqp/image/upload/v1766689405/Captura_de_tela_2025-12-25_160025_twhm6f.png"></img>
                </>}

            />








        </section>
        <div className={styles.transicaofim}></div>

    </motion.div>)
}