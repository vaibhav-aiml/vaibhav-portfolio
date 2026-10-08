import { Home, Briefcase, FolderGit2, Cpu, Mail, Award, Wrench, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  labelDevanagari?: string;
}

export const navItems: NavItem[] = [
  { label: "Overview", href: "#hero", icon: Home, labelDevanagari: "अवलोकन" },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Achievements", href: "#achievements", icon: Award },
  { label: "Services", href: "#services", icon: Wrench },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const bottomNavItems: NavItem[] = [
  { label: "Heritage", href: "#about", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Neural", href: "#skills", icon: Cpu },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const drawerNavItems: NavItem[] = [
  { label: "Overview", href: "#hero", icon: Home, labelDevanagari: "अवलोकन" },
  { label: "Architecture & AI", href: "#experience", icon: Briefcase },
  { label: "Jaali Works", href: "#projects", icon: FolderGit2 },
  { label: "Telemetry & Specs", href: "#skills", icon: Cpu },
  { label: "Establish Link", href: "#contact", icon: Mail },
];
