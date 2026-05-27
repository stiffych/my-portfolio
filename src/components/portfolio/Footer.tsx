import { profile } from "./data";
import { GitBranch, Heart, Users, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}.
          </span>
        </div>
        {/* <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} className="size-9 grid place-items-center rounded-full glass hover:text-primary transition">
            <Mail size={15} />
          </a>
          <a href={profile.github} className="size-9 grid place-items-center rounded-full glass hover:text-primary transition">
            <GitBranch size={15} />
          </a>
          <a href={profile.linkedin} className="size-9 grid place-items-center rounded-full glass hover:text-primary transition">
            <Users size={15} />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
