import { FaFileDownload } from "react-icons/fa";

export default function Recommendation() {
  return (
    <section
      id="contatos"
      className="mx-auto max-w-2xl px-6 py-24"
    >
      <div className="rounded-2xl border border-white/10 bg-(--secondary) p-8 shadow-lg">

        <h2 className="mb-6 text-3xl font-bold text-(--primary)">
          Carta de Recomendação
        </h2>

        <div className="space-y-4 text-lg leading-8 text-(--foreground)">
          <p>
            “Demonstrou postura profissional exemplar, com responsabilidade,
            ética, postura técnica, colaborativa e profissional.
            Recomenda-se sua atuação com plena confiança.”
          </p>

          <p className="font-semibold">
            Coordenação Pedagógica, Colégio Adventista (2024)
          </p>
        </div>

        <a
          href="/William-Queiroz-RECOMENDACAO.pdf"
          target="_blank"
          rel="noreferrer"
          className="
            mt-8 inline-flex
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
        </a>

      </div>
    </section>
  );
}