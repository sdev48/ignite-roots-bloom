import type { ReactNode } from "react";
import { BookOpenCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <a href="#home" className="group inline-flex items-center gap-3" aria-label="Singapore International School home">
    <span className={cn("grid size-11 shrink-0 place-items-center border", inverse ? "border-gold/50 bg-primary-foreground/10 text-gold" : "border-gold/40 bg-primary text-gold")}><BookOpenCheck className="size-5" /></span>
    <span className="min-w-0"><span className={cn("block font-display text-[17px] leading-tight font-semibold", inverse ? "text-primary-foreground" : "text-primary")}>Singapore International</span><span className={cn("block text-[10px] font-bold uppercase tracking-[0.22em]", inverse ? "text-primary-foreground/60" : "text-muted-foreground")}>School · Kamtaul</span></span>
  </a>;
}

export function SectionHeader({ eyebrow, title, text, align = "center", inverse = false }: { eyebrow: string; title: string; text?: string; align?: "left" | "center"; inverse?: boolean }) {
  return <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}> <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold-dark">{eyebrow}</p><h2 className={cn("font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl", inverse ? "text-primary-foreground" : "text-primary")}>{title}</h2>{text && <p className={cn("mt-5 leading-7", inverse ? "text-primary-foreground/70" : "text-muted-foreground")}>{text}</p>}</div>;
}

export function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={cn("scroll-mt-20 py-20 sm:py-24 lg:py-28", className)}><div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">{children}</div></section>;
}
