import { createFileRoute } from "@tanstack/react-router";
import { SchoolPage } from "@/components/school/SchoolPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Singapore International School | Kamtaul, Bihar" },
      { name: "description", content: "Singapore International School, Kamtaul, Bihar — a modern learning environment focused on education, values, character development, and holistic growth." },
      { property: "og:title", content: "Singapore International School | Kamtaul, Bihar" },
      { property: "og:description", content: "A modern learning environment focused on education, values, character development, and holistic growth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: SchoolPage,
});
