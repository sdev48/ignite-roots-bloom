import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { school } from "@/data/schoolData";
import { Section, SectionHeader } from "./Shared";

const details = [
  {
    label: "Address",
    value: school.address,
    icon: MapPin,
  },
  {
    label: "Phone",
    value: school.phone,
    icon: Phone,
  },
  {
    label: "Email",
    value: school.email,
    icon: Mail,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="bg-secondary">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Contact Information */}
        <div>
          <SectionHeader
            eyebrow="Contact us"
            title="We would be pleased to hear from you"
            align="left"
          />

          <div className="mt-8">
            <h3 className="font-display text-2xl font-semibold text-primary">
              {school.name}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {school.location}
            </p>
          </div>

          <address className="mt-8 space-y-5 not-italic">
            {details.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center bg-primary text-gold">
                  <Icon className="size-4" />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>

                  <p className="mt-1 font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </address>

          <p className="mt-8 border-l-2 border-gold pl-4 text-sm leading-6 text-muted-foreground">
            Official contact and admission information will be added once
            supplied by the school.
          </p>
        </div>

        {/* Google Maps */}
        <div className="flex h-full min-h-[500px] flex-col overflow-hidden border border-border bg-background shadow-sm">
          <div className="min-h-0 flex-1">
            <iframe
              src="https://www.google.com/maps?q=THE+SINGAPORE+INTERNATIONAL+SCHOOL,+DHADHIA,+JALE,+KAMTAUL,+BIHAR&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Singapore International School, Kamtaul location"
            />
          </div>

          <div className="flex shrink-0 items-center justify-between gap-4 border-t border-border px-5 py-4">
            <div>
              <p className="font-semibold text-primary">
                Singapore International School
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Dhadhia, Kamtaul, Bihar
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Singapore+International+School,+Dhadhia,+Kamtaul,+Bihar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Open Map
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}