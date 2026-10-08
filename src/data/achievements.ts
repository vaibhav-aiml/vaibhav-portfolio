export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  badge: string;
  index: string;
}

export const achievements: AchievementItem[] = [
  {
    id: "google-cert",
    title: "Google Career Certificates Foundation",
    issuer: "Google",
    year: "2025",
    description:
      "Awarded foundation certification demonstrating competency in modern cloud, infrastructure, and computational engineering principles.",
    badge: "Foundation Credential",
    index: "01",
  },
  {
    id: "adobe-hackathon",
    title: "Adobe University Hackathon Finalist",
    issuer: "Adobe",
    year: "2026",
    description:
      "Selected among competitive nationwide university applicants to architect generative media and creative workflow solutions.",
    badge: "National Finalist",
    index: "02",
  },
  {
    id: "college-hackathons",
    title: "Multi-Hackathon Prototype Builder",
    issuer: "JECRC & Regional Tech Summits",
    year: "2024 – 2026",
    description:
      "Designed and deployed real-time prototypes at competitive university hackathons spanning healthcare AI, smart campus utilities, and fintech security.",
    badge: "Active Competitor",
    index: "03",
  },
];
