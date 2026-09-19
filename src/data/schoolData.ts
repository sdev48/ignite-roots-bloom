import { BookOpen, BrainCircuit, FlaskConical, GraduationCap, HeartHandshake, Library, Medal, Monitor, Palette, School, ShieldCheck, Sparkles, Trophy, Users, Bus, MapPinned } from "lucide-react";
import heroImage from "@/assets/school-hero.jpg";
import learningImage from "@/assets/school-learning.jpg";
import activitiesImage from "@/assets/school-activities.jpg";
import libraryImage from "@/assets/school-library.jpg";

export const school = {
  name: "Singapore International School",
  location: "Kamtaul, Bihar, India",
  address: "[Complete School Address]",
  phone: "[Official Phone Number]",
  email: "[Official Email Address]",
};

export const images = { heroImage, learningImage, activitiesImage, libraryImage };
export const navItems = [
  ["Home", "home"], ["About", "about"], ["Academics", "academics"],
  ["Facilities", "facilities"], ["Activities", "activities"], ["Gallery", "gallery"], ["Contact", "contact"],
] as const;

export const reasons = [
  { title: "Quality Education", text: "Focused on strong academic foundations and meaningful learning.", icon: GraduationCap },
  { title: "Holistic Development", text: "Supporting academic, physical, social, and creative development.", icon: Sparkles },
  { title: "Experienced Teachers", text: "A supportive environment where teachers encourage curiosity and learning.", icon: Users },
  { title: "Values & Discipline", text: "Helping students develop responsibility, respect, integrity, and confidence.", icon: ShieldCheck },
  { title: "Co-Curricular Activities", text: "Encouraging students to explore interests beyond the classroom.", icon: Palette },
  { title: "Supportive Environment", text: "Creating a safe and welcoming environment for students.", icon: HeartHandshake },
];

export const academicStages = [
  { title: "Primary School", text: "[Add official information]", icon: BookOpen },
  { title: "Middle School", text: "[Add official information]", icon: BrainCircuit },
  { title: "Secondary School", text: "[Add official information]", icon: GraduationCap },
];

export const facilities = [
  { title: "Smart Classrooms", icon: Monitor, image: learningImage },
  { title: "Computer Laboratory", icon: BrainCircuit, image: learningImage },
  { title: "Science Laboratory", icon: FlaskConical, image: learningImage },
  { title: "Library", icon: Library, image: libraryImage },
  { title: "Sports & Playground", icon: Trophy, image: activitiesImage },
  { title: "Transportation", icon: Bus, image: heroImage },
  { title: "Campus", icon: School, image: heroImage },
  { title: "Activity Areas", icon: Palette, image: activitiesImage },
];

export const activities = [
  { title: "Sports", text: "Encouraging teamwork, discipline, fitness, and sportsmanship.", icon: Trophy },
  { title: "Cultural Activities", text: "Encouraging creativity and cultural expression.", icon: Palette },
  { title: "Competitions", text: "Providing opportunities for students to challenge themselves and grow.", icon: Medal },
  { title: "Celebrations & Events", text: "Creating memorable experiences and a sense of community.", icon: Sparkles },
];

export const galleryImages = [
  { src: heroImage, title: "Campus View", category: "Campus", position: "center" },
  { src: learningImage, title: "Learning Together", category: "Classrooms", position: "center" },
  { src: activitiesImage, title: "Active School Life", category: "Activities", position: "center" },
  { src: libraryImage, title: "Reading & Discovery", category: "Classrooms", position: "center" },
  { src: activitiesImage, title: "Team Spirit", category: "Sports", position: "left" },
  { src: activitiesImage, title: "Creative Expression", category: "Events", position: "right" },
];

export const highlights = [
  { value: "[XX]+", label: "Students" }, { value: "[XX]+", label: "Teachers" },
  { value: "[XX]+", label: "Classes" }, { value: "[XXXX]", label: "Established" },
];

export const contactItems = [
  { label: "Address", value: school.address, icon: MapPinned },
  { label: "Phone", value: school.phone, icon: Users },
  { label: "Email", value: school.email, icon: BookOpen },
];
