import { IoClose } from "react-icons/io5";

export default function ProjectModal({ project, open, onClose }) {
  if (!project || !open) return null;

  const {
    title,
    technical,
    result,
    images,
    technologies,
  } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 text-(--foreground)"
      onClick={onClose}
    >

      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-(--secondary) p-8"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-(--primary)"
        >
          <IoClose />
        </button>


        {/* Título */}
        <h2 className="mb-8 text-4xl font-bold text-(--primary)">
          {title}
        </h2>

        <h3 className="text-2xl font-bold text-(--primary)">
            Tecnologias
          </h3>

        {/* Tecnologias */}
        <div className="space-y-4 mt-4">

          


          {
            Object.entries(technologies).map(([type, techs]) => (

              <div 
                key={type}
                className=""
              >

                <h4 className="text-base font-semibold capitalize text-(--foreground)">
                  {type}:
                </h4>


                <div className="flex flex-wrap gap-2">

                  {
                    techs.map((tech) => (

                      <span
                        key={tech}
                        className="
                          text-(--foreground) border border-(--foreground)  px-2 rounded-2xl
                        "
                      >
                        {tech}
                      </span>

                    ))
                  }

                </div>

              </div>

            ))
          }

        </div>



        {/* Decisões Técnicas */}
        <div className="mt-10 space-y-4">

          <h3 className="text-2xl font-bold text-(--primary)">
            Decisões Técnicas
          </h3>

          <ul className="list-disc space-y-3 pl-6">

            {technical.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}

          </ul>

        </div>



        {/* Resultado */}
        <div className="mt-8 space-y-4">

          <h3 className="text-2xl font-bold text-(--primary)">
            Resultado
          </h3>

          <p>
            {result}
          </p>

        </div>



        {/* Galeria */}
        <div className="mt-8 space-y-4">

          <h3 className="text-2xl font-bold text-(--primary)">
            Galeria
          </h3>


          <div className="grid gap-4 sm:grid-cols-2">

            {images.map((image) => (

              <img
                key={image}
                src={image}
                alt={title}
                className="rounded-xl"
              />

            ))}

          </div>

        </div>


      </div>

    </div>
  );
}