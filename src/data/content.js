// All site content lives here — edit freely
export const nav = {
  logo: "BrandName",
  links: ["Home", "Features", "Pricing", "Contact"],
  cta: "Start Now",
};

export const hero = {
  badge: "New Advanced Flow",
  heading: "Launch Your Digital Workflow Faster",
  highlight: "Faster",
  description:
    "BrandName helps teams organize tasks, automate daily work, and move projects forward with a simple, fast platform.",
  cta: "Start Now",
  sub: "No setup hassle. Built for speed.",
  trust: "Trusted by 2,400+ teams",
  avatars: ["SA", "OK", "LM"],
};

export const features = [
  {
    id: 1,
    icon: "/icons/bolt.svg",
    title: "Fast Performance",
    description: "Optimized for speed, smooth browsing, and quick user actions.",
    tag: "Speed",
  },
  {
    id: 2,
    icon: "/icons/responsive.svg",
    title: "Responsive Design",
    description: "A seamless experience across desktop, tablet, and mobile devices.",
    tag: "Mobile first",
  },
  {
    id: 3,
    icon: "/icons/workflow.svg",
    title: "Clean Workflow",
    description: "Organized features that make daily tasks easier to manage.",
    tag: "Organized",
  },
  {
    id: 4,
    icon: "/icons/custom.svg",
    title: "Easy Customization",
    description: "Flexible layouts and reusable sections for future updates.",
    tag: "Flexible",
  },
];

export const pricing = [
    {
    id: 1,
    name: "Basic",
    price: 1000,
    desc: "For individuals and small teams starting out.",
    perks: ["1 workspace", "Basic task management", "Email support"],
    popular: false,
  },
  {
    id: 2,
    name: "Standard",
    price: 2300,
    desc: "For growing teams that need more control.",
    perks: ["5 workspaces", "Advanced workflow tools", "Priority support"],
    popular: true,
  },
  {
    id: 3,
    name: "Premium",
    price: 5000,
    desc: "For businesses that need full flexibility.",
    perks: ["Unlimited workspaces", "Team permissions", "Dedicated support"],
    popular: false,
  },
];

export const testimonials = [
  {
    id: 1,
    initials: "SA",
    name: "Sarah Ahmed",
    role: "Product Manager",
    image: "./avatars/saraahmed.svg",
    quote:
      "BrandName helped our team stay organized and launch campaigns faster than ever before. Remarkable difference day one.",
  },
  {
    id: 2,
    initials: "OK",
    name: "Omar Khaled",
    role: "Startup Founder",
    image: "./avatars/omarkhaled.svg",
    quote:
      "The interface is simple, fast, and easy for everyone on the team to use from day one. No training needed at all.",
    dark: true,
  },
  {
    id: 3,
    initials: "LM",
    name: "Lina Mansour",
    role: "Operations Lead",
    image: "./avatars/linamansour.svg",
    quote:
      "We reduced daily follow-ups and improved our workflow from the very first day. The team loves how intuitive it is.",
  },
];

export const footer = {
  logo: "BrandName",
  tagline: "A faster way to manage digital work.",
    quickLinks: [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
    ],
    product: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
    ],
    legal: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
    ],
  copy: "© 2026 BrandName. All rights reserved.",
};
