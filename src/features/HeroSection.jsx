import foto from "../assets/foto.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import Button from '../components/button';

export default function CardPerfil() {

    return (<>
        <section className='pt-12 flex sm:flex-row flex-col gap-10 justify-center items-center text-(--foreground) mx-10' id="inicio">

            <div className=' mx-10'>

                <h1 className='sm:text-2xl text-xl font-light'>Olá, eu sou William!</h1>

                <h2 className='lg:text-8xl text-4xl  font-extrabold'>Desenvolvedor <br /> <span className='text-(--primary)'>
                    Full Stack </span> </h2>

                <p className='sm:text-2xl text-xl pt-4'>

                    focado em aplicações Web com React e Node.js, com experiência em boas práticas, escalabilidade e interfaces responsivas.
                </p>



                <div className='flex sm:flex-row flex-col gap-4'>

                <ul className='flex items-center pt-4 text-2xl gap-4'>

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

                <a href="/William-Queiroz-Desenvolvedor-FullStack.pdf"
                            target="_blank">
                            <Button className="flex gap-4 items-center pl-5" >
                                Currículo
                                <FaFileDownload />
                            </Button>
                        </a>

                        </div>

            </div>

            
                <img
                    className="md:h-96 md:w-96 h-40 w-40 p-2 bg-(--primary) rounded-full object-cover"
                    src={foto}
                    alt="Foto de perfil"
                />
            




        </section>





    </>)
}