export const heroContent = {
  eyebrow: "Robert Elinam Hlovor · UI/UX Designer",
  title: "Designing useful digital products with ownership and visual clarity.",
  lead: "I bring together UI/UX design, a strong graphic design background, and growing product ownership skills to shape experiences that are clear, usable, and aligned with real product goals.",
  ctaLabel: "View Selected Work",
  ctaHref: "#work",
}

export const editorialVisuals = {
  hero: {
    dashboard: {
      imageSrc: "/images/hero/resource-platform-dashboard.jpg",
      imageAlt: "Resource platform dashboard overview.",
    },
    workflow: {
      imageSrc: "/images/hero/workflow-mapping.jpg",
      imageAlt: "Workflow mapping artifact.",
    },
    portrait: {
      imageSrc: "/images/hero/robert-portrait.jpg",
      imageAlt: "Portrait of Robert Elinam Hlovor.",
    },
    detail: {
      imageSrc: "/images/hero/interface-detail.jpg",
      imageAlt: "Close crop of an interface design detail.",
    },
  },
  process: {
    exploration: {
      imageSrc: "/images/process/early-exploration.jpg",
      imageAlt: "Early product exploration and wireframes.",
    },
    workflow: {
      imageSrc: "/images/process/workflow-mapping.jpg",
      imageAlt: "Workflow mapping and operational paths.",
    },
  },
  about: {
    references: {
      imageSrc: "/images/about/visual-references.jpg",
      imageAlt: "Visual reference studies and composition research.",
    },
    wireframe: {
      imageSrc: "/images/about/early-wireframe.jpg",
      imageAlt: "Early wireframe study.",
    },
    composition: {
      imageSrc: "/images/about/interface-composition.jpg",
      imageAlt: "Interface composition study.",
    },
  },
}

export const selectedWork = [
  {
    title: "Resource Management Platform",
    summary:
      "Internal operations platform for resource tracking and cross-team visibility—designed through interface composition, workflow mapping, and role-based clarity.",
    impact: "Unified fragmented resource tracking into a coherent operational system with clearer handoffs.",
    domain: "Internal Operations",
    role: "Product Designer",
    tags: ["Operational UX", "Interface Systems", "Internal Tools"],
    href: "#contact",
    featured: true,
    presentation: {
      card: "cinematic",
      visual: "cinematic",
    },
    visuals: {
      hero: {
        label: "Allocation dashboard",
        caption: "Primary operational view consolidating resource status, assignments, and team handoffs.",
        figure: "01",
        aspect: "16/9",
        imagePosition: "object-top",
        imageSrc: "/images/projects/resource-management/allocation-dashboard.jpg",
        imageAlt: "Resource Management Platform allocation dashboard.",
      },
      supporting: [
        {
          label: "Task panel",
          caption: "Role-based task clarity.",
          figure: "01a",
          imagePosition: "object-center",
          imageSrc: "/images/projects/resource-management/task-panel.jpg",
          imageAlt: "Resource Management Platform task panel.",
        },
        {
          label: "Allocation flow",
          caption: "Critical path mapping.",
          figure: "01b",
          imagePosition: "object-left",
          imageSrc: "/images/projects/resource-management/allocation-flow.jpg",
          imageAlt: "Resource allocation workflow diagram.",
        },
        {
          label: "IA structure",
          caption: "Navigation model.",
          figure: "01c",
          imagePosition: "object-right",
          imageSrc: "/images/projects/resource-management/ia-structure.jpg",
          imageAlt: "Resource Management Platform information architecture.",
        },
      ],
      annotation: "Featured case · Internal operations · Workflow redesign",
    },
  },
  {
    title: "EmployeeApp",
    summary:
      "Employee-facing application for HR workflows and self-service—structured with navigation models and task-oriented interface patterns that scale across teams.",
    impact: "Simplified employee journeys through clearer hierarchy and guided workflow screens.",
    domain: "Workforce Systems",
    role: "Product Designer",
    tags: ["Information Architecture", "UX/UI", "Workflow Design"],
    href: "#contact",
    presentation: {
      card: "text-led",
      visual: "portrait-duet",
    },
    visuals: {
      hero: {
        label: "Employee home",
        caption: "Self-service hub with task-oriented navigation.",
        figure: "02",
        aspect: "4/5",
        imagePosition: "object-left",
        imageSrc: "/images/projects/employee-app/employee-home.jpg",
        imageAlt: "EmployeeApp home screen.",
      },
      supporting: [
        {
          label: "Request flow",
          aspect: "16/10",
          imagePosition: "object-top",
          imageSrc: "/images/projects/employee-app/request-flow.jpg",
          imageAlt: "EmployeeApp request flow.",
        },
        {
          label: "IA sketch",
          aspect: "4/3",
          imagePosition: "object-center",
          imageSrc: "/images/projects/employee-app/ia-sketch.jpg",
          imageAlt: "EmployeeApp information architecture sketch.",
        },
      ],
    },
  },
  {
    title: "POS System",
    summary:
      "Retail point-of-sale experience balancing speed, visual clarity, and operational resilience—designed for high-volume environments and intuitive staff workflows.",
    impact: "Reduced transaction friction through structured checkout and inventory-aware interface flows.",
    domain: "Retail Operations",
    role: "Product Designer",
    tags: ["Interface Design", "Operational UX", "Product Systems"],
    href: "#contact",
    presentation: {
      card: "image-led",
      visual: "horizontal-sequence",
    },
    visuals: {
      hero: {
        label: "Checkout interface",
        caption: "High-speed transaction flow with inventory context.",
        figure: "03",
        aspect: "16/9",
        imagePosition: "object-center",
        imageSrc: "/images/projects/pos-system/checkout-interface.jpg",
        imageAlt: "POS System checkout interface.",
      },
      supporting: [
        {
          label: "Payment step",
          aspect: "4/3",
          imagePosition: "object-right",
          imageSrc: "/images/projects/pos-system/payment-step.jpg",
          imageAlt: "POS System payment step.",
        },
        {
          label: "Transaction path",
          aspect: "4/3",
          imagePosition: "object-left",
          imageSrc: "/images/projects/pos-system/transaction-path.jpg",
          imageAlt: "POS System transaction path.",
        },
      ],
    },
  },
  {
    title: "Afro Nyanka Tours",
    summary:
      "Booking and tour management platform connecting customer-facing clarity with back-office coordination—designed with brand sensitivity and operational structure.",
    impact: "Aligned booking experiences with internal scheduling through cohesive visual and workflow design.",
    domain: "Travel & Operations",
    role: "Product Designer",
    tags: ["Brand UX", "Workflow Design", "Platform Design"],
    href: "#contact",
    presentation: {
      card: "folio",
      visual: "folio",
    },
    visuals: {
      hero: {
        label: "Booking experience",
        caption: "Customer-facing clarity with operational coordination.",
        figure: "04",
        aspect: "16/9",
        imagePosition: "object-center",
        imageSrc: "/images/projects/afro-nyanka-tours/booking-experience.jpg",
        imageAlt: "Afro Nyanka Tours booking experience.",
      },
      supporting: [
        {
          label: "Booking flow",
          aspect: "16/10",
          imagePosition: "object-bottom",
          imageSrc: "/images/projects/afro-nyanka-tours/booking-flow.jpg",
          imageAlt: "Afro Nyanka Tours booking flow.",
        },
        {
          label: "Platform IA",
          aspect: "16/10",
          imagePosition: "object-center",
          imageSrc: "/images/projects/afro-nyanka-tours/platform-ia.jpg",
          imageAlt: "Afro Nyanka Tours platform information architecture.",
        },
      ],
    },
  },
  {
    title: "AI Resume Builder",
    summary:
      "Document-generation product with guided authoring flows—combining information hierarchy, form design, and AI-assisted content exploration into a calm creation experience.",
    impact: "Translated complex logic into a step-based interface with clear visual progression and output control.",
    domain: "Product Tools",
    role: "Product Designer",
    tags: ["UX/UI", "Structured Experiences", "AI-Assisted Flows"],
    href: "#contact",
    presentation: {
      card: "dossier",
      visual: "dossier",
    },
    visuals: {
      hero: {
        label: "Authoring interface",
        caption: "Step-based creation with AI-assisted content exploration.",
        figure: "05",
        aspect: "4/3",
        imagePosition: "object-top",
        imageSrc: "/images/projects/ai-resume-builder/authoring-interface.jpg",
        imageAlt: "AI Resume Builder authoring interface.",
      },
      supporting: [
        {
          label: "Flow sketch",
          aspect: "4/5",
          imagePosition: "object-center",
          imageSrc: "/images/projects/ai-resume-builder/flow-sketch.jpg",
          imageAlt: "AI Resume Builder flow sketch.",
        },
        {
          label: "Preview panel",
          aspect: "4/5",
          imagePosition: "object-right",
          imageSrc: "/images/projects/ai-resume-builder/preview-panel.jpg",
          imageAlt: "AI Resume Builder preview panel.",
        },
      ],
    },
  },
]

export const processContent = {
  eyebrow: "How I Work",
  title: "Visual thinking applied to operational product design",
  lead: "I move from research and workflow mapping into interface exploration—using composition, prototyping, and AI-assisted ideation to refine direction before scaling patterns across the system.",
  steps: [
    {
      title: "01 — Observe and frame",
      description:
        "Study how teams work, where visual hierarchy breaks down, and what operational friction looks like in real interface use—not just in process diagrams.",
    },
    {
      title: "02 — Explore and compose",
      description:
        "Develop layout directions, navigation models, and interface narratives through sketching, Figma exploration, and rapid AI-assisted concept iteration.",
    },
    {
      title: "03 — Refine and systematize",
      description:
        "Turn strong directions into scalable design language—patterns, states, and visual rules that hold together as products and teams grow.",
    },
  ],
}

export const aboutContent = {
  eyebrow: "About Robert",
  title: "Multidisciplinary design for products that teams understand",
  paragraphs: [
    "I began in graphic design and illustration—learning composition, contrast, and visual narrative before moving into UX/UI and product systems. That foundation still shapes every interface I design: hierarchy is editorial, layout is intentional, and clarity is crafted.",
    "Today I work across product design, operational UX, and information architecture—designing internal tools, workforce platforms, and structured digital products. AI-assisted exploration helps me move through ideas quickly, but judgment, taste, and systems thinking determine what ships.",
    "Based in Accra, Ghana, I partner with teams building products where visual intelligence and operational clarity must work together—not compete.",
  ],
}

export const contactContent = {
  eyebrow: "Contact",
  title: "Let's shape products with clarity and visual intent",
  lead: "Open to conversations about product design, interface systems, operational UX, and design leadership on complex platforms.",
}
