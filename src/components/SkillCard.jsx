export default function SkillCard({ skill }) {
  return (
    <article className="flex flex-col items-center p-2 rounded-xl border border-white/10 bg-(--secondary) transition hover:-translate-y-1 hover:border-(--primary)">
      <img
        src={skill.icon}
        alt={skill.name}
        className="h-10 w-10 object-contain"
      />

      <h3 className="font-semibold text-(--foreground)">
        {skill.name}
      </h3>
    </article>
  );
}