import { motion } from "motion/react";

const images = [
  "https://res.cloudinary.com/drklvmtqp/image/upload/v1784566266/o_que_eu_aprendi_2_ld4ee4.png",
  "https://res.cloudinary.com/drklvmtqp/image/upload/v1784566259/lan%C3%A7amento_linkedin_apata_wik4hy.png",
  "https://res.cloudinary.com/drklvmtqp/image/upload/v1784568693/PROJETO_FINALIZADO_1_bmtb4g.png",
  "https://res.cloudinary.com/drklvmtqp/image/upload/v1784571606/PROJETO_FINALIZADO_2_k9y2lt.png",
];

export default function AboutMe() {
  return (
    <section id="sobre" className="scroll-mt-25">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="text-5xl font-bold text-(--primary) text-center m-10"
      >
        Sobre <span className="text-(--foreground)">mim</span>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-1 bg-(--secondary) flex flex-col p-8 text-xl text-(--foreground) gap-4 max-w-200 mx-auto"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          Minha trajetória começou com a formação em{" "}
          <strong className="text-(--primary)">
            Engenharia da Computação
          </strong>
          , em Altamira - PA. Durante esse caminho, atuei como professor de
          programação e robótica lecionando{" "}
          <strong className="text-(--primary)">
            lógica de programação
          </strong>{" "}
          e{" "}
          <strong className="text-(--primary)">
            desenvolvimento de sites
          </strong>
          .
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.15,
                ease: "easeOut",
              },
            },
          }}
        >
          Essa experiência despertou meu interesse pelo{" "}
          <strong className="text-(--primary)">
            Desenvolvimento Web
          </strong>{" "}
          e me levou a aprofundar meus conhecimentos na área. Desde então,
          venho atuando de forma autônoma, criando sites e aplicações,
          buscando unir tecnologia e resolução de problemas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="overflow-hidden w-full"
        >
          <motion.div
            className="flex gap-3 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                className="sm:w-80 w-40 rounded-xl shrink-0"
                alt=""
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-1 bg-(--secondary) flex flex-col justify-center items-center p-8 text-xl text-(--foreground) gap-4 max-w-200 mx-auto"
        >


          <h3 className="text-2xl font-semibold">Vídeo de Apresentação: </h3>
          <video
            controls className="w-full rounded-lg"
          >


            <source
              src="https://res.cloudinary.com/drklvmtqp/video/upload/v1786975578/V%C3%ADdeo_Apresenta%C3%A7%C3%A3o_William_Queiroz_q3xuif.mp4"
              type="video/mp4" />

          </video>


        </motion.div>




      </motion.div>
    </section>
  );
}