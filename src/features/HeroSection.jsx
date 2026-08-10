import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import Button from "../components/Button";
import foto from "../assets/foto.jpeg";
import curriculo from "../assets/William_Queiroz_Dev_FullStack.pdf";

export default function HeroSection() {
  const text = "Desenvolvedor Full Stack";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const developerText = displayedText.slice(0, 13);
  const fullStackText = displayedText.slice(14);

  return (
    <>
      <section
        className="pt-12 flex md:flex-row flex-col gap-10 justify-center items-center text-(--foreground) max-w-240 mx-auto px-10 scroll-mt-80"
        id="inicio"
        
      >
        <motion.div
          className="mx-10 p-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="sm:text-2xl text-xl font-light"
          >
            Olá, eu sou William!
          </motion.h1>

          <h2 className="lg:text-8xl md:text-6xl sm:text-8xl text-5xl font-extrabold lg:w-125">
            <span>
              {developerText}
            </span>

            <br />

            <span className="text-(--primary)">
              {fullStackText}
            </span>

            {displayedText.length < text.length && (
              <span className="text-(--foreground) animate-pulse">
                |
              </span>
            )}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="sm:text-2xl text-xl pt-4"
          >
            focado em aplicações Web com React e Node.js, com experiência em
            boas práticas, escalabilidade e interfaces responsivas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
            className="flex sm:flex-row flex-col gap-4 items-center mt-4"
          >
            <ul className="flex items-center text-2xl gap-4">
              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <a href="https://github.com/willqos15" target="_blank">
                  <FaGithub />
                </a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
              >
                <a
                  href="https://www.linkedin.com/in/william-queiroz-a36573120/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <a href="mailto:willqos15@gmail.com">
                  <MdOutlineAlternateEmail />
                </a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
              >
                <a href="https://wa.me/5593991878598" target="_blank">
                  <IoLogoWhatsapp />
                </a>
              </motion.li>
            </ul>

            <a href={curriculo} target="_blank">
              <Button className="flex gap-4 items-center pl-5">
                Currículo
                <FaFileDownload />
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.img
          className="lg:h-96 lg:w-96 sm:h-72 sm:w-72 h-60 w-60 p-2 bg-(--primary) rounded-full object-cover"
          src={foto}
          alt="Foto de perfil"
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: "easeOut",
          }}
        />
      </section>
    </>
  );
}