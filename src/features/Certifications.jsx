import certifications from "../data/certifications";

export default function Certifications() {
  return (
    <section className="rounded-2xl p-10 ">

      <h2 className="text-5xl text-center font-bold text-(--primary)  py-10">
        Certificações
      </h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-(--secondary) p-4 text-(--foreground)">

        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="
              rounded-xl
              bg-(--background)
              p-5
            "
          >

            <div className="flex justify-between items-start">

              <h3 className="font-semibold">
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


            <p className="mt-3 text-sm ">
              {certification.institution}
            </p>


            <p className="mt-3 text-sm">
              {certification.description}
            </p>


            {certification.image && (

              <img src={certification.image} className="my-2" />
            )}

          </article>
        ))}

      </div>

    </section>
  );
}