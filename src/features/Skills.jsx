import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="tecnologias"
      className="mx-auto max-w-7xl space-y-4 py-24 px-10"
    >
      <header className="text-center">
        <h2 className="text-5xl font-bold text-(--foreground)">
          <span className="text-(--primary)">Tecnologias</span> (Stack)
        </h2>

      </header>

      {skillGroups.map((group) => (
        <section
          key={group.category}
          className=""
        >
          <h3 className="text-3xl my-2 font-bold text-(--foreground)">
            {group.category}
          </h3>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-7">
            {group.skills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}