import { motion } from "motion/react";
import certifications from "../data/certifications";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Certifications() {
  return (
    <section
      id="certificacoes"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl text-center font-bold text-(--primary) py-10"
      >
        Certificações
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-(--secondary) p-4 text-(--foreground)"
      >
        {certifications.map((certification) => (
          <motion.article
            key={certification.title}
            variants={card}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.2,
              },
            }}
            className="
              rounded-xl
              bg-(--background)
              p-5
            "
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-(--primary)">
                {certification.title}
              </h3>

              <span
                className="
                  rounded-full
                  px-3
                  py-1
                  text-xs
                "
              >
                {certification.date}
              </span>
            </div>

            <p className="mt-3 text-sm font-bold">
              {certification.institution}
            </p>

            <p className="mt-3 text-sm">
              {certification.description}
            </p>

            {certification.image && (
              <img
                src={certification.image}
                className="my-2"
                alt={certification.title}
              />
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}