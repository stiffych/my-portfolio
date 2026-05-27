import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { about } from "./data";
import { Compass, Rocket, User } from "lucide-react";

const cards = [
  { icon: User, title: "Qui je suis", body: about.intro },
  { icon: Compass, title: "Mon parcours", body: about.journey },
  { icon: Rocket, title: "Mes objectifs", body: about.goals },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="À propos"
        title="Un ingénieur logiciel qui livre."
        subtitle="Je transforme des idées en produits numériques concrets, en combinant rigueur technique, créativité et souci du détail."
      />
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="size-11 rounded-xl bg-primary/15 text-primary grid place-items-center mb-4">
              <c.icon size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
