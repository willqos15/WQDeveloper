import { motion } from "motion/react";

const images = [
  "https://res.cloudinary.com/drklvmtqp/image/upload/v1784566266/o_que_eu_aprendi_2_ld4ee4.png",
  "https://res.cloudinary.com/drklvmtqp/image/upload/v1784566259/lan%C3%A7amento_linkedin_apata_wik4hy.png",
  "https://res.cloudinary.com/drklvmtqp/image/upload/v1784568693/PROJETO_FINALIZADO_1_bmtb4g.png",
  "https://res.cloudinary.com/drklvmtqp/image/upload/v1784571606/PROJETO_FINALIZADO_2_k9y2lt.png"
];

export default function AboutMe() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-4xl px-6 py-24  rounded-2xl"
    >

      <h2 className="text-5xl font-bold text-(--primary) text-center m-10">
            Sobre <span className="text-(--foreground)"> mim</span>
          </h2>

      <div className="space-y-1 bg-(--secondary) flex flex-col p-8 text-xl text-(--foreground) gap-4">
            <p>
              Minha trajetória começou com a formação em <strong className="text-(--primary)">Engenharia da Computação</strong>, em Altamira - PA. Durante esse caminho, atuei como professor de programação e robótica lecionando <strong className="text-(--primary)">lógica de programação</strong> e <strong className="text-(--primary)">desenvolvimento de sites</strong>.</p>

          

              <p>

              Essa experiência despertou meu interesse pelo <strong className="text-(--primary)">Desenvolvimento Web</strong> e me levou a aprofundar meus conhecimentos na área. Desde então, venho atuando de forma autônoma, criando sites e aplicações, buscando unir tecnologia e resolução de problemas.


            </p>

        
              <div className="overflow-hidden w-full">
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
    </div>

      </div>
    </section>
  );
}