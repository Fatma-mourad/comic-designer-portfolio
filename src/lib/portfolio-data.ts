import wayfinderImage from "@/assets/project-wayfinder.jpg";
import lumaImage from "@/assets/project-luma.jpg";
import pantryImage from "@/assets/project-pantry.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  duration: string;
  role: string;
  image: string;
  imageAlt: string;
  tone: "blue" | "coral" | "olive";
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "wayfinder",
    title: "Wayfinder",
    category: "Mobility · Service design",
    description: "Making unfamiliar city journeys feel calm, legible, and human.",
    year: "2026",
    duration: "12 weeks",
    role: "Lead product designer",
    image: wayfinderImage,
    imageAlt: "Illustrated transit app shown across mobile screens in a city setting",
    tone: "blue",
    challenge: "Travelers could find the fastest route, but not the route that felt easiest to understand. Transfers, street exits, and moments of uncertainty were hidden behind efficient-looking directions.",
    approach: "I mapped anxiety across the full trip, tested route language in context, and built a confidence layer that explains what happens next before riders need it.",
    outcome: "A calmer journey model that prioritizes confidence alongside speed and gives riders useful detail at exactly the right moment.",
    metrics: [
      { value: "−31%", label: "missed transfers" },
      { value: "+24%", label: "route confidence" },
      { value: "4.7/5", label: "usability score" },
    ],
  },
  {
    slug: "luma-care",
    title: "Luma Care",
    category: "Health · Product strategy",
    description: "A gentler way to find, understand, and book the right care.",
    year: "2025",
    duration: "16 weeks",
    role: "Senior product designer",
    image: lumaImage,
    imageAlt: "Illustrated healthcare scheduling experience on a tablet in a warm interior",
    tone: "coral",
    challenge: "Patients were abandoning appointment booking when specialties, costs, and availability became difficult to compare.",
    approach: "I reframed booking as a guided conversation, prototyped plain-language decision support, and worked with clinical teams to reveal the information people needed without overload.",
    outcome: "A transparent care journey that helps patients choose confidently while reducing pressure on support teams.",
    metrics: [
      { value: "+38%", label: "completed bookings" },
      { value: "−22%", label: "support calls" },
      { value: "2.1×", label: "return visits" },
    ],
  },
  {
    slug: "pantry",
    title: "Pantry",
    category: "Climate · Product design",
    description: "Turning everyday meal planning into a low-waste household habit.",
    year: "2024",
    duration: "10 weeks",
    role: "Product designer",
    image: pantryImage,
    imageAlt: "Illustrated sustainable grocery and meal planning product on a kitchen laptop",
    tone: "olive",
    challenge: "People wanted to waste less food, but keeping inventory up to date felt like another chore competing for attention.",
    approach: "I studied kitchen routines, removed manual tracking, and designed suggestions around what was already available rather than what users needed to buy.",
    outcome: "A lightweight planning loop that makes the sustainable choice feel easier, useful, and pleasantly ordinary.",
    metrics: [
      { value: "−26%", label: "food discarded" },
      { value: "+41%", label: "weekly retention" },
      { value: "8 min", label: "saved per plan" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
