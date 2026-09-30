import { motion } from "motion/react";
import { FaFileDownload } from "react-icons/fa";

export default function Recommendation() {
  return (
    <section
      id="contatos"
      className="mx-auto max-w-2xl px-6 py-24"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="rounded-2xl border border-white/10 bg-(--secondary) p-8 shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mb-6 text-3xl font-bold text-(--primary)"
        >
          Carta de Recomendação
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.35,
          }}
          className="space-y-4 text-lg leading-8 text-(--foreground)"
        >
          <p>
            “Demonstrou postura profissional exemplar, com responsabilidade,
            ética, postura técnica, colaborativa e profissional. Recomenda-se
            sua atuação com plena confiança.”
          </p>

          <p className="font-semibold">
            Coordenação Pedagógica, Colégio Adventista (2024)
          </p>
        </motion.div>

        <motion.a
          href="/William-Queiroz-RECOMENDACAO.pdf"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-md
            bg-(--primary)
            px-5
            py-3
            text-lg
            font-bold
            text-(--background)
            transition
            hover:opacity-90
          "
        >
          Ver recomendação
          <FaFileDownload />
        </motion.a>
      </motion.div>
    </section>
  );
}