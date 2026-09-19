import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/schoolData";
import { Brand } from "./Shared";

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-lg">
    <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
      <Brand />
      <div className="hidden items-center gap-6 lg:flex">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary">{label}</a>)}<Button asChild variant="gold" size="lg"><a href="#contact">Admission Enquiry</a></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
    </nav>
    {open && <div className="absolute inset-x-0 top-20 border-b bg-background px-5 py-6 shadow-xl lg:hidden"><div className="mx-auto flex max-w-7xl flex-col">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-border py-4 font-semibold text-foreground">{label}</a>)}<Button asChild variant="gold" size="lg" className="mt-6"><a href="#contact" onClick={() => setOpen(false)}>Admission Enquiry</a></Button></div></div>}
  </header>;
}
