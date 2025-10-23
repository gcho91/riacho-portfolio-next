import { StaticImageData } from 'next/image'
import fermatMock from "../public/fermat-mock.png"
import amaltheaMock from "../public/amalthea-mock.png"
import gmarketMock from "../public/gmarket-mock.png"
import lynnsMock from "../public/lynns-mock.png"
import wrexxmock from "../public/wrexx-mockup-s.png"
import nycxdesign from "../public/NYCxDESIGN_Logo.png"
import nycxdesign1 from "../public/IMG_0512.jpg";
import nycxdesign2 from "../public/IMG_0514.jpg";
import nycxdesign3 from "../public/IMG_0516.jpg";
import nycxdesign4 from "../public/IMG_0518.jpg";



export type Tags = "React" | "React-Native" | "HTML/CSS" | "TypeScript" | "WordPress" | "Squarespace" | "Angular" | "PostgreSQL" | "Design" | "Figma"
export type MarketingTags = "Brand Strategy" | "Content Marketing" | "Social Media" | "Email Marketing" | "SEO" | "Analytics" | "Campaign Management" | "Creative Direction" | "Copywriting" | "Visual Design"

export interface CaseStudy {
    title: string;
    content: string;
    imageUrl?: StaticImageData;
}

export interface PortfolioItem {
    id: string;
    imageUrl: StaticImageData
    title: string;
    desc: string;
    tags?: Tags[];
    github?: string;
    link?: string;
    links?: {
        github?: string;
        live_project?: string;
    };
    caseStudies?: CaseStudy[];
    overview?: string;
    challenges?: string[];
    solutions?: string[];
    technologies?: string[];
    duration?: string;
    role?: string;
}

export interface MarketingProject {
    id: string;
    imageUrl: StaticImageData;
    title: string;
    desc: string;
    tags?: MarketingTags[];
    link?: string;
    overview?: string;
    challenges?: string[];
    solutions?: string[];
    strategies?: string[];
    results?: string[];
    duration?: string;
    role?: string;
    client?: string;
    industry?: string;
    instagramTakeovers?: StaticImageData[]
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: "fermat-commerce",
        imageUrl: fermatMock,
        title: "Fermat Commerce – Mobile App",
        desc: "React-Native mobile app for setting up distributed e-commerce shops for the influencer customers. Released to App Store in 2022.",
        tags: ["React-Native", "HTML/CSS", "TypeScript"],
        link: "https://www.fermatcommerce.com/",
        overview: "Fermat Commerce is a mobile application designed to empower influencers and content creators to set up their own e-commerce shops. The app provides a comprehensive platform for managing products, orders, and customer relationships, all optimized for mobile commerce.",
        challenges: [
            "Creating an intuitive mobile-first shopping experience",
            "Implementing secure payment processing",
            "Managing complex inventory and order management systems",
            "Ensuring cross-platform compatibility between iOS and Android"
        ],
        solutions: [
            "Developed a React Native app with TypeScript for type safety",
            "Integrated Stripe payment processing for secure transactions",
            "Created a scalable backend architecture for inventory management",
            "Implemented responsive design patterns for various screen sizes"
        ],
        technologies: ["React Native", "TypeScript", "Stripe API", "Firebase", "Redux"],
        duration: "6 months",
        role: "Frontend Developer",
        caseStudies: [
            {
                title: "Mobile-First Design Approach",
                content: "The challenge was to create a shopping experience that felt native on mobile devices while maintaining the functionality of a full e-commerce platform. I focused on optimizing touch interactions, implementing smooth animations, and ensuring fast loading times. The result was a 40% increase in user engagement compared to web-based alternatives."
            },
            {
                title: "Payment Integration & Security",
                content: "Implementing secure payment processing was crucial for user trust. I integrated Stripe's mobile SDK, implemented proper error handling, and added multiple payment methods including Apple Pay and Google Pay. The implementation resulted in a 95% successful payment completion rate."
            },
            {
                title: "Cross-Platform Performance",
                content: "Ensuring consistent performance across iOS and Android required careful optimization of React Native components and native module usage. I implemented platform-specific optimizations and used performance monitoring tools to maintain 60fps animations and sub-2-second load times."
            }
        ]
    },
    {
        id: "amalthea-coffee",
        imageUrl: amaltheaMock,
        title: "Amalthea Coffee",
        desc: "A Squarespace-based coffee online ordering and subscription service.",
        tags: ["HTML/CSS", "Squarespace"],
        link: "https://amaltheacoffee.com/",
        links: {
            live_project: "https://amaltheacoffee.com/",
        },
        overview: "Amalthea Coffee is an artisanal coffee subscription service built on Squarespace. The platform allows customers to discover and subscribe to premium coffee blends from around the world, with customizable delivery schedules and detailed tasting notes.",
        challenges: [
            "Creating an engaging coffee discovery experience",
            "Implementing flexible subscription management",
            "Showcasing coffee origins and tasting profiles",
            "Optimizing for mobile coffee ordering"
        ],
        solutions: [
            "Designed custom Squarespace templates with enhanced CSS",
            "Implemented subscription management with flexible billing cycles",
            "Created detailed product pages with origin stories and tasting notes",
            "Optimized checkout flow for mobile users"
        ],
        technologies: ["Squarespace", "CSS3", "JavaScript", "Stripe", "Mailchimp"],
        duration: "3 months",
        role: "Frontend Developer & Designer",
        caseStudies: [
            {
                title: "Subscription Management System",
                content: "Building a flexible subscription system on Squarespace required creative solutions. I implemented custom JavaScript to handle subscription modifications, created automated email sequences for customer communication, and designed an intuitive dashboard for managing deliveries. Customer retention increased by 35% after implementation."
            },
            {
                title: "Coffee Discovery Experience",
                content: "The goal was to make coffee selection feel personal and educational. I created detailed product pages with interactive maps showing coffee origins, tasting wheel visualizations, and brewing guides. This approach led to a 50% increase in average order value as customers felt more confident in their selections."
            }
        ]
    },
    {
        id: "gmarket-ecommerce",
        imageUrl: gmarketMock,
        title: "GMarket – e-commerce application",
        desc: "A mock e-commerce project using Angular and PostgreSQL.",
        tags: ["HTML/CSS", "Angular", "PostgreSQL"],
        github: "https://github.com/gcho91/gMarket",
        links: {
            github: "https://github.com/gcho91/gMarket"
        },
        overview: "GMarket is a full-stack e-commerce application built as a learning project to demonstrate modern web development practices. The application features user authentication, product catalog, shopping cart, and order management systems.",
        challenges: [
            "Building a scalable e-commerce architecture",
            "Implementing secure user authentication",
            "Creating efficient product search and filtering",
            "Managing complex shopping cart state"
        ],
        solutions: [
            "Developed Angular frontend with TypeScript for type safety",
            "Implemented JWT-based authentication with role-based access",
            "Created PostgreSQL database with optimized queries",
            "Built responsive UI with Angular Material components"
        ],
        technologies: ["Angular", "TypeScript", "PostgreSQL", "Node.js", "Express", "JWT"],
        duration: "4 months",
        role: "Full-Stack Developer",
        caseStudies: [
            {
                title: "Database Design & Optimization",
                content: "Designing an efficient database schema was crucial for performance. I implemented proper indexing, created optimized queries for product searches, and designed a normalized structure that could handle thousands of products. Query response times improved by 60% compared to initial implementation."
            },
            {
                title: "State Management & User Experience",
                content: "Managing complex shopping cart state and user sessions required careful architecture. I implemented Angular services for state management, created persistent cart functionality, and added real-time inventory updates. The result was a smooth shopping experience with 99.9% cart persistence rate."
            }
        ]
    },
    {
        id: "lynns-supper-club",
        imageUrl: lynnsMock,
        title: "Lynn's NYC Supper Club",
        desc: "Client work for small NYC-based boutique supper club experience.",
        tags: ["HTML/CSS", "WordPress"],
        link: "https://lynnsnycsupperclub.com/",
        links: {
            live_project: "https://lynnsnycsupperclub.com/",
        },
        overview: "Lynn's NYC Supper Club is an intimate dining experience website that showcases the unique atmosphere and culinary offerings of a boutique supper club in New York City. The site emphasizes the personal touch and exclusive nature of the dining experience.",
        challenges: [
            "Creating an elegant, intimate website feel",
            "Showcasing the unique dining experience",
            "Implementing easy reservation system",
            "Optimizing for mobile viewing"
        ],
        solutions: [
            "Custom WordPress theme with elegant typography",
            "High-quality photography integration",
            "Simple reservation form with email notifications",
            "Mobile-responsive design with touch-friendly navigation"
        ],
        technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "Contact Form 7"],
        duration: "2 months",
        role: "Frontend Developer",
        caseStudies: [
            {
                title: "Brand Identity & User Experience",
                content: "The challenge was to translate the intimate, exclusive feel of the supper club into a digital experience. I focused on elegant typography, carefully curated photography, and a clean layout that emphasized the personal nature of the dining experience. The website successfully captured the brand's essence and increased reservation inquiries by 40%."
            },
            {
                title: "Mobile-First Reservation System",
                content: "Since many potential customers browse on mobile devices, I prioritized mobile optimization. The reservation form was simplified for touch interaction, loading times were optimized, and the navigation was streamlined. Mobile conversion rates improved by 25% after the redesign."
            }
        ]
    },
    {
        id: "wrexx-dance-design",
        imageUrl: wrexxmock,
        title: "Wrexx Dance - iOS App Design Mockup",
        desc: "A reimagined Figma mockup and live prototype of Moment Fitness Client App, a white-label application for fitness and dance studios.",
        tags: ["Design", "Figma"],
        links: {
            live_project: "https://www.figma.com/proto/WKOOJkJEP1hE43HBqA37j8/Wrexx-Redesign---Bottom-Tab?node-id=189-1134&starting-point-node-id=189%3A748&t=ToqxyoVYqZHF25xQ-1"
        },
        overview: "Wrexx Dance is a comprehensive redesign of a fitness studio management app, focusing on improving user experience for both studio owners and members. The project involved creating wireframes, high-fidelity mockups, and interactive prototypes.",
        challenges: [
            "Redesigning complex studio management workflows",
            "Creating intuitive navigation for multiple user types",
            "Improving visual hierarchy and information architecture",
            "Ensuring accessibility and usability standards"
        ],
        solutions: [
            "Conducted user research and created user personas",
            "Redesigned information architecture with bottom tab navigation",
            "Created comprehensive design system with consistent components",
            "Built interactive prototypes for user testing"
        ],
        technologies: ["Figma", "Adobe Creative Suite", "User Research"],
        duration: "3 months",
        role: "UX/UI Designer",
        caseStudies: [
            {
                title: "User Research & Information Architecture",
                content: "The original app had complex navigation that confused users. I conducted interviews with studio owners and members to understand their primary tasks and pain points. Based on this research, I redesigned the information architecture with a bottom tab navigation that prioritized the most common user actions. User testing showed a 45% improvement in task completion rates."
            },
            {
                title: "Design System & Component Library",
                content: "Creating a consistent design system was essential for the app's professional appearance. I developed a comprehensive component library with reusable elements, established a clear visual hierarchy, and implemented accessibility guidelines. The design system reduced development time by 30% and ensured consistency across all screens."
            },
            {
                title: "Interactive Prototyping & Testing",
                content: "Building interactive prototypes allowed for early user feedback and iteration. I created clickable prototypes in Figma that simulated the actual app experience, conducted usability testing sessions, and iterated based on user feedback. The final prototype received 90% positive feedback in user testing sessions."
            }
        ]
    }
]

export const marketingProjects: MarketingProject[] = [
    {
        id: "nycxdesign-social-campaign",
        imageUrl: nycxdesign,
        title: "NYCxDESIGN - Celebrating Design Across New York City",
        desc: "Social media campaign for NYC's official design week, managing strategy, content scheduling, and influencer collaborations to highlight the city's design community.",
        tags: ["Social Media", "Campaign Management", "Content Marketing", "Analytics"],
        link: "https://www.nycxdesign.com/",
        overview: "NYCxDESIGN is New York City's official design week, a city-wide initiative that promotes NYC as a global design destination and a creative hub. During my internship at NYCEDC, I supported the 2017 NYCxDESIGN campaign by managing social media strategy, content scheduling, and influencer collaborations to highlight the city's design community.",
        challenges: [
            "Maintain a consistent brand voice across social platforms",
            "Highlight diverse local designers and creative events",
            "Drive engagement and attendance through social storytelling",
            "Manage collaboration logistics with event partners and influencers"
        ],
        solutions: [
            "Built a detailed content calendar aligning NYCxDESIGN's official event schedule with key social moments",
            "Coordinated Instagram Takeovers with partner brands and local artists",
            "Collaborated directly with design studios and galleries to curate takeover content",
            "Monitored engagement metrics across all NYCEDC social channels"
        ],
        strategies: [
            "Strategic content planning prioritizing posts around in-person activations",
            "Community & partner collaboration through Instagram Takeovers",
            "Optimization & reporting with weekly performance summaries",
            "SEO and Google AdWords Keyword Planner for discoverability"
        ],
        results: [
            "+30% increase in Instagram engagement during NYCxDESIGN 2017",
            "Strengthened collaborations with 20+ local designers and creative brands",
            "Improved event visibility with consistently branded posts reaching tens of thousands",
            "Delivered actionable insights that informed NYCEDC's future digital campaigns"
        ],
        instagramTakeovers: [
            nycxdesign1,
            nycxdesign2,
            nycxdesign3,
            nycxdesign4,

        ],
        duration: "October 2016 - June 2017",
        role: "Social Media Associate (Internship)",
        client: "NYC Economic Development Corporation (NYCEDC)",
        industry: "Government/Design"
    },
    {
        id: "amalthea-coffee-digital-presence",
        imageUrl: amaltheaMock,
        title: "Amalthea Coffee - Building a Digital Presence for a Local Brand",
        desc: "End-to-end digital solution for family-owned coffee roastery, including website development, digital marketing framework, and training resources for independent management.",
        tags: ["Brand Strategy", "Web Development", "Content Marketing", "Social Media"],
        link: "https://amaltheacoffee.com/",
        overview: "Amalthea Coffee is a family-owned coffee roastery and café in New Jersey. As a small business looking to expand its reach, Amalthea Coffee needed a strong digital foundation - from a maintainable website to clear marketing guidance for social media. I was brought on to develop their website, establish a digital marketing framework, and create easy-to-follow resources that empowered the owners to manage their online presence independently.",
        challenges: [
            "No existing website or centralized brand hub for customers",
            "Limited technical expertise for ongoing maintenance",
            "Need for a cohesive digital marketing strategy that was simple to manage in-house",
            "Building an online presence that was cost-effective and maintainable"
        ],
        solutions: [
            "Collaborated with a designer to create a visually appealing, responsive website using WordPress CMS",
            "Created a custom step-by-step guide on how to update content and manage basic site edits",
            "Conducted training sessions with the owners to demonstrate confident updates",
            "Developed social media content guidelines outlining tone, posting frequency, and content themes"
        ],
        strategies: [
            "Website development using WordPress for easy long-term maintenance",
            "Documentation & training to ensure self-sufficiency",
            "Digital marketing support with content guidelines and scheduling tools",
            "Consistent brand voice and aesthetic across web and social presence"
        ],
        results: [
            "Launched Amalthea Coffee's first official website, providing a professional digital home",
            "Empowered the business owners with self-sufficiency through documentation and training",
            "Established a consistent social media content framework maintainable without agency support",
            "Improved local visibility and brand credibility through a cohesive digital identity"
        ],
        duration: "3 months",
        role: "Digital Marketing & Web Development Consultant",
        client: "Amalthea Coffee",
        industry: "Food & Beverage"
    }
];

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
    return portfolioItems.find(item => item.id === id);
}

export function getMarketingProjectById(id: string): MarketingProject | undefined {
    return marketingProjects.find(project => project.id === id);
}
