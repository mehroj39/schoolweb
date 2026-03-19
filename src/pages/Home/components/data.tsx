import { Book, Globe, Trophy, Calendar } from "lucide-react";

export const homeCards = [
  {
    icon: <Book size={22} />,
    title: "card.schedule.title",
    description: "card.schedule.desc",
  },
  {
    icon: <Globe size={22} />,
    title: "card.subjects.title",
    description: "card.subjects.desc",
  },
  {
    icon: <Trophy size={22} />,
    title: "card.clubs.title",
    description: "card.clubs.desc",
  },
  {
    icon: <Calendar size={22} />,
    title: "card.events.title",
    description: "card.events.desc",
  },
];

export const statsData = [
  { value: "950+", label: "stats.students" },
  { value: "52+", label: "stats.teachers" },
  { value: "35+", label: "stats.rooms" },
  { value: "30+", label: "stats.experience" },
];

export const testimonialsData = [
  {
    name: "Gulnoza Karimova",
    role: "testimonials.parent",
    text: "testimonials.text1",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ali Valiyev",
    role: "testimonials.parent",
    text: "testimonials.text2",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Madina Xasanova",
    role: "testimonials.parent",
    text: "testimonials.text3",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  }
];

export const ctaData = {
  title: "cta.title",
  subtitle: "cta.subtitle",
  buttonText: "cta.button",
};