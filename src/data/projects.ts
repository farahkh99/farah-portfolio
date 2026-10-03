import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "ctc-cashier",
    title: "CTC Cashier",
    category: "Point-of-Sale & Retail Management",
    description:
      "A production point-of-sale platform combining a C#/.NET WinForms desktop application with PHP-based services and management functionality. My work includes sales and payment workflows, split payments, refunds, cancellations, PAX payment-terminal integration, receipt and kitchen printing, inventory, X/Z reporting, database optimization, and WhatsApp-based document delivery.",
    technologies: [
      "C#",
      ".NET",
      "PHP",
      "MySQL",
      "Bootstrap",
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
      "A bakery production and business-management platform developed with PHP, JavaScript, and MySQL. My work includes managing ingredients, recipes, suppliers, products, warehouses, inventory, returns, production tracking, and cost calculations, alongside responsive interfaces, access controls, operational reporting, and production workflows.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "HTML",
      "CSS",
      "RBAC",
    ],
    caseStudy: {
      problem:
        "Retail businesses need dependable sales processing, payment-terminal integration, receipt printing, and transaction reporting across cashier stations.",

      implementation:
        "Worked on C#/.NET POS functionality and PHP-based services, including payment workflows, PAX terminal integration, receipt and kitchen printing, refunds, cancellations, database optimization, and X/Z reporting.",

      result:
        "The platform supports retail transactions, card payments, refunds, receipt generation, transaction history, and operational reporting.",
    },
  },
  {
    id: "timegate",
    title: "TimeGate",
    category: "Workforce & Attendance Management",
    description:
      "A workforce-management platform combining PHP-based customer dashboards with attendance-device integration. I worked with Python scripts running on a VPS to collect attendance records and transfer them into MySQL, alongside attendance reporting, employee shifts, requests and approvals, biometric-device integration, GPS-related functionality, and database troubleshooting.",
    technologies: [
      "Python",
      "PHP",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "VPS",
      "Device Integration",
      "GPS",
      "RBAC",
    ],
    caseStudy: {
      problem:
        "Attendance records from physical devices needed to be collected and made available through customer-specific workforce dashboards.",
      implementation:
        "Used Python scripts on a VPS to retrieve attendance records from devices and transfer them into the database used by the PHP-based application.",
      result:
        "Attendance information became accessible through customer dashboards for reviewing employee activity, shifts, and reporting.",
    },
    architecture: [
      {
        title: "Biometric Attendance Devices",
        description: "Employees record attendance through physical devices.",
        icon: "device",
      },
      {
        title: "Python Scripts on VPS",
        description:
          "Python scripts retrieve attendance records and transfer the data.",
        icon: "server",
      },
      {
        title: "MySQL Database",
        description:
          "Attendance records are stored for the workforce application.",
        icon: "database",
      },
      {
        title: "PHP Customer Dashboard",
        description:
          "Customers access their employee attendance information and reports.",
        icon: "dashboard",
      },
    ],
  },

  {
    id: "ctc-invoice",
    title: "CTC Invoice",
    category: "Invoicing & Document Management",
    description:
      "A multi-tenant invoicing platform under development using PHP, MySQL, and JavaScript. The system focuses on customer and supplier management, accounting-document workflows, document generation, encrypted business information, role-based access controls, and multilingual Hebrew and Arabic interfaces with right-to-left support.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "REST APIs",
      "Encryption",
      "RBAC",
      "RTL",
      "PDF Generation",
    ],
  },
];
