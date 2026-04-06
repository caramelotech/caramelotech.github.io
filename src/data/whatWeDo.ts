import type { Activity, Person, Tech } from "@/types/whatWeDo";

export const activities: Activity[] = [
  { emoji: "🤝", text: "Trocar conhecimento e experiências" },
  { emoji: "🛠️", text: "Construir projetos juntos" },
  { emoji: "🌱", text: "Aprender novas tecnologias" },
  { emoji: "💡", text: "Experimentar com ideias" },
  { emoji: "🧪", text: "Contribuir para open source" },
  { emoji: "🎉", text: "Se divertir e fazer amigos" },
];

export const people: Person[] = [
  { emoji: "🧪", label: "QA" },
  { emoji: "🖥️", label: "Backend" },
  { emoji: "🎨", label: "Frontend" },
  { emoji: "🔄", label: "Fullstack" },
  { emoji: "✏️", label: "Designers" },
  { emoji: "📊", label: "DS" },
];

export const techs: Tech[] = [
  { emoji: "⚡", label: "JavaScript" },
  { emoji: "☕", label: "Java" },
  { emoji: "🧬", label: "Clojure" },
  { emoji: "🐘", label: "PHP" },
  { emoji: "🦀", label: "TypeScript" },
  { emoji: "🐍", label: "Python" },
];
