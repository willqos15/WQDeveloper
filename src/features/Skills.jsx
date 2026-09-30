import { motion } from "motion/react";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 scroll-mt-10" 
    id="tecnologias">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold text-(--primary)">
          Tecnologias <span className="text-(--foreground)">(Stack)</span>
        </h2>
      </motion.header>

      {skillGroups.map((group) => (
        <motion.section
          key={group.category}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <h3 className="text-3xl my-2 font-bold text-(--foreground)">
            {group.category}
          </h3>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-7">
            {group.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </section>
  );
}