import Image from "next/image";
import { Code2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface TechnologyBadgeProps {
  name: string;
}

const technologyLogos: Record<string, string> = {
  "C#": "/tech-icons/csharp.svg",
  ".NET": "/tech-icons/dotnetcore.svg",
  PHP: "/tech-icons/php.svg",
  MySQL: "/tech-icons/mysql.svg",
  JavaScript: "/tech-icons/javascript.svg",
  HTML: "/tech-icons/html5.svg",
  CSS: "/tech-icons/css3.svg",
  Python: "/tech-icons/python.svg",
};

export default function TechnologyBadge({
  name,
}: TechnologyBadgeProps) {
  const logo = technologyLogos[name];

  return (
    <div
      className="group flex w-20 flex-col items-center gap-2"
      title={name}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-md transition-transform duration-300 motion-safe:group-hover:scale-110">
        {logo ? (
          <Image
            src={logo}
            alt={`${name} logo`}
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
        ) : name === "WhatsApp API" ? (
          <FaWhatsapp
            aria-hidden="true"
            className="h-10 w-10 text-green-500"
          />
        ) : (
          <Code2
            aria-hidden="true"
            className="h-8 w-8 text-slate-600"
          />
        )}
      </div>

      <span className="text-center text-xs text-slate-400">
        {name}
      </span>
    </div>
  );
}