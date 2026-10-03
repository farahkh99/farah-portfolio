import Image from "next/image";
import {
  Code2,
  Cpu,
  Database,
  FileText,
  Fingerprint,
  Languages,
  LockKeyhole,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CreditCard, Printer } from "lucide-react";

interface TechnologyBadgeProps {
  name: string;
}

// Real technology logos
const technologyLogos: Record<string, string> = {
  "C#": "/tech-icons/csharp.svg",
  ".NET": "/tech-icons/dotnetcore.svg",
  PHP: "/tech-icons/php.svg",
  MySQL: "/tech-icons/mysql.svg",
  JavaScript: "/tech-icons/javascript.svg",
  HTML: "/tech-icons/html5.svg",
  CSS: "/tech-icons/css3.svg",
  Python: "/tech-icons/python.svg",
  Bootstrap: "/tech-icons/bootstrap.svg",
};

// Representative icons for engineering concepts
const conceptIcons: Record<string, LucideIcon> = {
  "REST APIs": Network,
  "Hardware Integration": Cpu,
  "Device Integration": Fingerprint,
  VPS: Server,
  SQL: Database,
  "Database Management": Database,
  "Data Integrity": ShieldCheck,
  "Server Administration": Server,
  Encryption: LockKeyhole,
  RBAC: ShieldCheck,
  RTL: Languages,
  GPS: MapPin,
  "PDF Generation": FileText,
  "Payment Terminals": CreditCard,
  "Receipt Printers": Printer,
};

export default function TechnologyBadge({ name }: TechnologyBadgeProps) {
  const logo = technologyLogos[name];
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
        ) : name === "WhatsApp API" ? (
          <FaWhatsapp aria-hidden="true" className="h-6 w-6 text-green-500" />
        ) : (
          <ConceptIcon
            aria-hidden="true"
            className="h-5 w-5 text-slate-700"
            strokeWidth={1.8}
          />
        )}
      </div>

      <span className="text-[11px] leading-tight text-slate-400">{name}</span>
    </div>
  );
}
