import { motion } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeader } from "./Section";
import { profile } from "./data";
import { GitBranch, Users, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    // { icon: Users, label: "LinkedIn", value: "linkedin.com/in/hosea", href: profile.linkedin },
    { icon: GitBranch, label: "GitHub", value: "github.com/loîc", href: "https://github.com/stiffych" },
  ];

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Restons en contact"
        title="Construisons quelque chose ensemble."
        subtitle="Une opportunité, un projet — ma boîte de réception est ouverte."
      />

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {items.map((it, i) => (
            <motion.a
              key={it.label}
              href={it.href}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/40 hover:-translate-y-0.5 transition"
            >
              <div className="size-11 rounded-xl bg-primary/15 text-primary grid place-items-center">
                <it.icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{it.label}</div>
                <div className="font-medium truncate">{it.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Nom" name="name" placeholder="Votre nom" />
            <Field label="Email" name="email" type="email" placeholder="vous@exemple.com" />
          </div>
          <Field label="Sujet" name="subject" placeholder="Proposition de collaboration…" />
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Décrivez votre projet ou votre besoin…"
              className="mt-2 w-full bg-background/50 rounded-xl border border-border/60 px-4 py-3 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium glow hover:scale-[1.02] transition-transform"
          >
            <Send size={16} />
            {sent ? "Message envoyé ✓" : "Envoyer le message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full bg-background/50 rounded-xl border border-border/60 px-4 py-3 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  );
}
