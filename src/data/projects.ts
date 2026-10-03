import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "ctc-cashier",
    title: "CTC Cashier",
    category: "Point-of-Sale & Retail Management",
    description:
      "A point-of-sale platform combining a C#/.NET desktop application with PHP backend services. My work includes transaction and payment processing, integration with card payment terminals, receipt printers, reporting, database optimization, and WhatsApp-based digital document delivery.",
    technologies: [
      "C#",
      ".NET",
      "PHP",
      "MySQL",
      "REST APIs",
      "Payment Terminals",
      "Receipt Printers",
      "WhatsApp API",
    ],
  },
  {
    id: "dibsy",
    title: "Dibsy",
    category: "Bakery & Production Management",
    description:
      "A business management platform supporting bakery operations and production workflows. The system focuses on organizing operational information, inventory, suppliers, and production-related processes through a centralized application.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "timegate",
    title: "TimeGate",
    category: "Workforce & Attendance Management",
    description:
      "A workforce and attendance management platform connecting physical attendance devices to customer dashboards. I worked with Python scripts running on a VPS to collect attendance records and transfer them to a database, alongside PHP-based web functionality, employee shifts, reporting, and database troubleshooting.",
    technologies: [
      "Python",
      "PHP",
      "SQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "VPS",
      "Device Integration",
    ],
    caseStudy: {
      problem:
        "Attendance records from physical devices needed to be collected and made accessible through customer dashboards.",
      implementation:
        "Used Python scripts running on a VPS to retrieve attendance records from devices and transfer them into the database serving customer dashboards.",
      result:
        "Attendance information became available through each customer's dashboard for review and workforce management.",
    },
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
