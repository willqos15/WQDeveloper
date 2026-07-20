import { motion } from "motion/react";
import ProjectCard from "../components/Project";
import { projects } from "../data/projects"

export default function Projects() {
    return (
        <motion.section
            id="projetos"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-(--background) py-24"
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6">

                {/* Título */}

                <div className="text-center">

                  

                    <h2 className="mt-2 text-4xl font-bold text-(--foreground) sm:text-5xl">
                       <span className="text-(--primary)"> Projetos</span> em Destaque
                    </h2>


                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                </div>

            </div>
        </motion.section>
    );
}