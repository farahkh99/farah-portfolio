
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "ctc-cashier",
    title: "CTC Cashier",
    category: "Point-of-Sale & Retail Management",
    description:
      "A retail point-of-sale system combining a C# desktop application with PHP backend services. My work includes transaction processing, payment workflows, receipt printing, reporting, database optimization, and integration with external services such as WhatsApp for digital document delivery.",
    technologies: [
      "C#",
      ".NET",
      "PHP",
      "MySQL",
      "REST APIs",
      "WhatsApp API",
      "Hardware Integration",
    ],
  },
  {
    id: "dibsy",
    title: "Dibsy",
    category: "Bakery & Production Management",
    description:
      "A business management platform supporting bakery operations and production workflows. The system focuses on organizing operational information, inventory, suppliers, and production-related processes through a centralized application.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "timegate",
    title: "TimeGate",
    category: "Workforce & Attendance Management",
    description:
      "An employee attendance and workforce management system supporting shift records and operational reporting. My experience includes database troubleshooting, investigating missing records, maintaining data integrity, and working with server-hosted business systems.",
    technologies: [
      "SQL",
      "Database Management",
      "Data Integrity",
      "VPS",
      "Server Administration",
    ],
  },
  {
    id: "ctc-invoice",
    title: "CTC Invoice",
    category: "Invoicing & Document Management",
    description:
      "An invoicing platform under development, designed around multi-tenant business data, document workflows, encrypted information, access controls, and multilingual Hebrew and Arabic interfaces with right-to-left support.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "REST APIs",
      "Encryption",
      "RBAC",
      "RTL",
    ],
  },
];
