
import Image from "next/image";

import {
  ArrowLeftRight,
  Blocks,
  Bug,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
  Database,
  FileText,
  Fingerprint,
  FlaskConical,
  Gauge,
  GitPullRequest,
  KeyRound,
  Languages,
  LockKeyhole,
  MapPin,
  Monitor,
  MonitorSmartphone,
  Network,
  Plug,
  Printer,
  Rocket,
  Server,
  Shield,
  ShieldCheck,
  Terminal,
  Users,
  Webhook,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { IconType } from "react-icons";

import {
  FaGoogle,
  FaJava,
  FaLinux,
  FaMicrosoft,
  FaWhatsapp,
  FaWindows,
} from "react-icons/fa";

import {
  SiDocker,
  SiGit,
  SiGithub,
  SiJquery,
  SiMariadb,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

interface TechnologyBadgeProps {
  name: string;
}

interface BrandIconConfig {
  icon: IconType;
  color: string;
}

// Existing official SVG technology logos
const technologyLogos: Record<string, string> = {
  "C#": "/tech-icons/csharp.svg",
  ".NET": "/tech-icons/dotnetcore.svg",
  PHP: "/tech-icons/php.svg",
  MySQL: "/tech-icons/mysql.svg",
  JavaScript: "/tech-icons/javascript.svg",
  HTML: "/tech-icons/html5.svg",
  HTML5: "/tech-icons/html5.svg",
  CSS: "/tech-icons/css3.svg",
  CSS3: "/tech-icons/css3.svg",
  Python: "/tech-icons/python.svg",
  Bootstrap: "/tech-icons/bootstrap.svg",
};

// Brand logos from react-icons
const brandIcons: Record<string, BrandIconConfig> = {
  Java: {
    icon: FaJava,
    color: "#EA2D2E",
  },
  Linux: {
    icon: FaLinux,
    color: "#111827",
  },
  "Google Libraries": {
    icon: FaGoogle,
    color: "#4285F4",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },
  React: {
    icon: SiReact,
    color: "#087EA4",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#0891B2",
  },
  "Node.js": {
    icon: SiNodedotjs,
    color: "#339933",
  },
  jQuery: {
    icon: SiJquery,
    color: "#0769AD",
  },
  MongoDB: {
    icon: SiMongodb,
    color: "#47A248",
  },
  MariaDB: {
    icon: SiMariadb,
    color: "#8B5E3C",
  },
  Git: {
    icon: SiGit,
    color: "#F05032",
  },
  GitHub: {
    icon: SiGithub,
    color: "#181717",
  },
  Docker: {
    icon: SiDocker,
    color: "#2496ED",
  },
  "Visual Studio": {
    icon: FaMicrosoft,
    color: "#5C2D91",
  },
  "VS Code": {
    icon: VscVscode,
    color: "#007ACC",
  },
  Windows: {
    icon: FaWindows,
    color: "#0078D4",
  },
  "Microsoft Azure": {
    icon: FaMicrosoft,
    color: "#0078D4",
  },
  "Microsoft 365": {
    icon: FaMicrosoft,
    color: "#5B5FC7",
  },
};

// General engineering concepts
const conceptIcons: Record<string, LucideIcon> = {
  SQL: Database,
  "Database Design": Database,
  Migrations: ArrowLeftRight,
  "Query Optimization": Gauge,
  "Data Integrity": ShieldCheck,
  "Database Management": Database,

  "REST APIs": Network,
  Webhooks: Webhook,
  Authentication: KeyRound,
  RBAC: ShieldCheck,
  Encryption: LockKeyhole,
  "Third-party Integrations": Plug,
  "PHP OOP / MVC": Blocks,
  "Express.js": Server,

  AJAX: ArrowLeftRight,
  "Responsive UI": MonitorSmartphone,
  "RTL / LTR": Languages,
  RTL: Languages,

  Unix: Terminal,
  VPS: Server,
  Networking: Network,
  VPNs: ShieldCheck,
  Firewalls: Shield,
  "Active Directory": Users,
  "Server Administration": Server,

  "C# WinForms": Monitor,
  "System Architecture": Workflow,
  Testing: FlaskConical,
  "Code Review": GitPullRequest,
  Debugging: Bug,
  Deployment: Rocket,
  "Production Support": Wrench,

  "Hardware Integration": Cpu,
  "Device Integration": Fingerprint,
  GPS: MapPin,
  "PDF Generation": FileText,
  "Payment Terminals": CreditCard,
  "Receipt Printers": Printer,
  "Cloud Services": Cloud,
};

export default function TechnologyBadge({
  name,
}: TechnologyBadgeProps) {
  const logo = technologyLogos[name];
  const brand = brandIcons[name];

  const BrandIcon = brand?.icon;
  const ConceptIcon = conceptIcons[name] ?? Code2;

  return (
    <div className="group flex w-16 shrink-0 flex-col items-center gap-1.5 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow-sm transition-transform duration-200 motion-safe:group-hover:scale-110">
        {logo ? (
          <Image
            src={logo}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        ) : BrandIcon ? (
          <BrandIcon
            aria-hidden="true"
            className="h-6 w-6"
            color={brand.color}
          />
        ) : name === "WhatsApp API" ? (
          <FaWhatsapp
            aria-hidden="true"
            className="h-6 w-6 text-green-600"
          />
        ) : (
          <ConceptIcon
            aria-hidden="true"
            className="h-5 w-5 text-slate-700"
            strokeWidth={1.8}
          />
        )}
      </div>

      <span className="text-[11px] leading-tight text-slate-400">
        {name}
      </span>
    </div>
  );
}
