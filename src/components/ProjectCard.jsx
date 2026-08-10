import { useState } from "react";
import { FaLink } from "react-icons/fa";

import Button from "./Button";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }) {
    const {
        title,
        cover,
        summary,
        technologies,
        links,
    } = project;

    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="overflow-hidden rounded-2xl border border-white/10 bg-(--secondary) shadow-lg">


                {/* Imagem */}
                <img
                    src={cover}
                    alt={title}
                    className="w-full object-cover"
                />

                <div className="space-y-6 p-8">

                    {/* Título */}
                    <h2 className="mx-auto w-full text-center text-3xl font-bold text-(--primary)">
                        {title}
                    </h2>
                    {/* Resumo */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-(--primary)">
                            Resumo
                        </h3>

                        <p className="leading-7 text-(--foreground)">
                            {summary}
                        </p>
                    </div>


                    {/* Links */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-(--primary)">
                            Links
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {links.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button
                                        variant="outline"
                                        className="flex items-center gap-2"
                                    >
                                        <FaLink />
                                        {link.label}
                                    </Button>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Botão */}
                    <Button onClick={() => setOpen(true)}>
                        Ver mais
                    </Button>
                </div>
            </section>

            <ProjectModal
                project={project}
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}