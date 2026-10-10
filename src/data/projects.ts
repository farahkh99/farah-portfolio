import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "ctc-cashier",

    title: "CTC Cashier",

    category: "Point-of-Sale & Retail Management",

    description:
      "A production point-of-sale platform combining a C#/.NET WinForms desktop application with PHP-based backend services and management tools. My work spans transaction processing, payment-terminal integration, receipt and kitchen printing, inventory workflows, reporting, database optimization, station configuration, and WhatsApp-based document delivery.",

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

    caseStudy: {
      problem:
        "Retail businesses require dependable transaction processing across cashier stations while coordinating payments, receipts, refunds, cancellations, inventory, reporting, hardware, and external services.",

      implementation:
        "Developed and maintained C#/.NET POS functionality together with PHP and MySQL services. Integrated payment workflows, PAX terminals, receipt and kitchen printers, inventory operations, X/Z reporting, transaction history, WhatsApp document delivery, and station-specific configuration.",

      result:
        "My contributions connected day-to-day POS workflows with payment hardware, printing, reporting, inventory, and digital receipt delivery. Performance and scale metrics are not published without verified data.",

      challenges: [
        "Maintaining transaction consistency across payments, refunds, cancellations, and reports",
        "Supporting multiple receipt and kitchen printer configurations",
        "Integrating POS workflows with external PAX payment terminals",
        "Handling station-specific configuration across different customer environments",
        "Maintaining transaction and refund data integrity",
        "Diagnosing production issues involving software, databases, networks, and hardware",
        "Securing communication between the desktop application and backend services",
      ],

      responsibilities: [
        "C# desktop application development",
        "PHP backend development",
        "REST API integration",
        "MySQL database design and optimization",
        "Payment-terminal integration",
        "Printer and hardware integration",
        "WhatsApp API integration",
        "Deployment and customer configuration",
        "Production debugging and technical support",
      ],
    },

    architecture: [
      {
        title: "C# POS Application",
        description:
          "Cashiers process sales, payments, refunds, cancellations, and operational workflows through the desktop application.",
        icon: "desktop",
      },

      {
        title: "PHP API & Services",
        description:
          "Backend services handle business logic, communication, configuration, and shared system functionality.",
        icon: "api",
      },

      {
        title: "MySQL Database",
        description:
          "Transactions, products, inventory, reports, station information, and operational records are persisted in MySQL.",
        icon: "database",
      },

      {
        title: "External Integrations",
        description:
          "The platform communicates with PAX terminals, receipt printers, kitchen printers, WhatsApp services, and management interfaces.",
        icon: "plug",
      },
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
        "Bakery operations involve interconnected workflows for ingredients, recipes, suppliers, warehouses, inventory, production processes, returns, and product costing.",

      implementation:
        "Developed PHP and JavaScript functionality backed by MySQL to manage ingredients, recipes, suppliers, warehouses, inventory, production tracking, returns, reporting, role-based access control, and product cost calculations.",

      result:
        "The platform centralizes bakery production and inventory workflows, providing improved visibility across stock, production activity, suppliers, warehouse operations, and product costing.",

      challenges: [
        "Maintaining accurate ingredient and warehouse inventory",
        "Connecting recipes with ingredient consumption and product costing",
        "Tracking inventory movement across production workflows",
        "Managing supplier and return operations",
        "Maintaining consistent data across interconnected business modules",
        "Supporting operational reporting across inventory and production",
        "Designing responsive interfaces for day-to-day business users",
      ],

      responsibilities: [
        "PHP backend development",
        "JavaScript frontend development",
        "MySQL database development",
        "Inventory workflow implementation",
        "Production workflow implementation",
        "Recipe and ingredient management",
        "Product cost calculation logic",
        "Reporting",
        "Role-based access control",
        "Production debugging and maintenance",
      ],
    },

    architecture: [
      {
        title: "Business Interface",
        description:
          "Users manage ingredients, recipes, suppliers, inventory, warehouses, production, returns, and reports.",
        icon: "dashboard",
      },

      {
        title: "PHP Business Logic",
        description:
          "PHP services coordinate inventory, recipes, production workflows, cost calculations, permissions, and business rules.",
        icon: "api",
      },

      {
        title: "MySQL Database",
        description:
          "Ingredients, products, inventory, suppliers, warehouses, production activity, and operational records are stored centrally.",
        icon: "database",
      },

      {
        title: "Operations & Reporting",
        description:
          "Operational data is transformed into stock visibility, production tracking, costing, and management reporting.",
        icon: "document",
      },
    ],
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
        "Attendance records generated by physical biometric devices needed to be collected reliably and made available through customer-specific workforce dashboards.",

      implementation:
        "Used Python scripts running on a VPS to retrieve attendance records from physical devices and transfer the records into MySQL, where the PHP application could process and display employee attendance, shifts, requests, approvals, and reports.",

      result:
        "Python scripts on a VPS connected physical attendance devices with MySQL-backed workforce dashboards and reporting. Device counts and synchronization metrics are not presented without verified measurements.",

      challenges: [
        "Communicating with physical biometric attendance devices",
        "Running automated attendance-data collection scripts on a VPS",
        "Handling device connectivity and network failures",
        "Maintaining reliable attendance-data synchronization",
        "Diagnosing missing or inconsistent attendance records",
        "Connecting device-generated records with customer-specific dashboards",
        "Troubleshooting database and integration issues in production environments",
      ],

      responsibilities: [
        "Python integration scripts",
        "VPS configuration and troubleshooting",
        "PHP backend development",
        "MySQL database troubleshooting",
        "Biometric-device integration",
        "Attendance-data synchronization",
        "Workforce workflow support",
        "Production debugging",
        "Customer environment support",
      ],
    },

    architecture: [
      {
        title: "Biometric Attendance Devices",
        description:
          "Employees record attendance through physical biometric devices.",
        icon: "device",
      },

      {
        title: "Python Scripts on VPS",
        description:
          "Python scripts retrieve attendance records from connected devices and transfer the data.",
        icon: "server",
      },

      {
        title: "MySQL Database",
        description:
          "Attendance records are stored and made available to the workforce-management application.",
        icon: "database",
      },

      {
        title: "PHP Customer Dashboard",
        description:
          "Customers access employee attendance information, shifts, requests, approvals, and reports.",
        icon: "dashboard",
      },
    ],
  },

  {
    id: "ctc-invoice",

    title: "CTC Invoice",

    category: "Invoicing & Document Management",

    description:
      "A multi-tenant invoicing platform under development using PHP, MySQL, and JavaScript. The system focuses on customer and supplier management, accounting-document workflows, document generation, encrypted business information, role-based access controls, multilingual Hebrew and Arabic interfaces, document relationships, VAT handling, and preparation for external tax-authority integrations.",

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

    caseStudy: {
      problem:
        "Businesses need a secure and structured way to manage customers, suppliers, accounting documents, VAT information, document relationships, and multilingual workflows while keeping each business's data isolated.",

      implementation:
        "Designed and developed a multi-tenant invoicing platform using PHP, MySQL, and JavaScript with role-based permissions, encrypted business information, document workflows, document snapshots, customer and supplier management, multilingual Hebrew and Arabic interfaces, PDF generation, and preparation for external tax-authority integrations.",

      result:
        "The platform provides the foundation for a standalone invoicing environment where businesses can securely manage customers, suppliers, accounting documents, permissions, multilingual workflows, document generation, and related accounting operations.",

      challenges: [
        "Maintaining data isolation between separate businesses",
        "Designing secure encrypted storage for sensitive business information",
        "Supporting Hebrew and Arabic RTL interfaces",
        "Maintaining document snapshots after accounting documents are issued",
        "Managing relationships between copied and converted documents",
        "Handling VAT according to configurable effective dates",
        "Maintaining accounting-document workflow consistency",
        "Preparing architecture for external tax-authority integrations",
        "Generating consistent document views and PDFs",
      ],

      responsibilities: [
        "Application architecture",
        "PHP backend development",
        "MySQL database design",
        "Customer and supplier management",
        "Authentication and RBAC",
        "Encryption and security design",
        "Accounting-document workflow design",
        "Document relationship management",
        "PDF generation",
        "Multilingual RTL interface development",
        "API integration preparation",
        "Deployment and production configuration",
      ],
    },

    architecture: [
      {
        title: "Business Web Application",
        description:
          "Business users manage customers, suppliers, accounting documents, permissions, and day-to-day invoicing workflows.",
        icon: "dashboard",
      },

      {
        title: "PHP Application Layer",
        description:
          "PHP services handle validation, authentication, permissions, document workflows, encryption, and application business rules.",
        icon: "api",
      },

      {
        title: "MySQL Database",
        description:
          "Customer, supplier, document, configuration, relationship, and business-specific data is stored in MySQL.",
        icon: "database",
      },

      {
        title: "Documents & Integrations",
        description:
          "The platform generates accounting documents and PDFs while remaining structured for external accounting and tax integrations.",
        icon: "document",
      },
    ],
  },
];