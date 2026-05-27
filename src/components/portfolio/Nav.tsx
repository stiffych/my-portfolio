import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(95%,900px)]"
    >
      <div className="glass rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold">
          <span className="grid place-items-center size-7 rounded-full bg-primary/15 text-primary">
            <Code2 size={14} />
          </span>
          <span className="hidden sm:inline">Loïc.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}
