import { Home, Briefcase, FolderGit2, Cpu, Mail, Award, Wrench, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: "Overview", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Achievements", href: "#achievements", icon: Award },
  { label: "Services", href: "#services", icon: Wrench },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const bottomNavItems: NavItem[] = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

export const drawerNavItems: NavItem[] = [
  { label: "Overview", href: "#hero", icon: Home },
  { label: "About Me", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects & Work", href: "#projects", icon: FolderGit2 },
  { label: "Technical Skills", href: "#skills", icon: Cpu },
  { label: "Achievements", href: "#achievements", icon: Award },
  { label: "Services", href: "#services", icon: Wrench },
  { label: "Get In Touch", href: "#contact", icon: Mail },
];
