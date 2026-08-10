import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projetos"
      className="mx-auto max-w-6xl px-6 py-24 scroll-mt-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold text-(--primary)">
          Projetos
        </h2>

        <p className="mt-4 text-lg text-(--foreground)">
          Alguns projetos que desenvolvi ao longo da minha trajetória.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}