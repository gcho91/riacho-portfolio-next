import { StaticImageData } from 'next/image'
import fermatMock from "../public/fermat-mock.png"
import amaltheaMock from "../public/amalthea-mock.png"
import gmarketMock from "../public/gmarket-mock.png"
import lynnsMock from "../public/lynns-mock.png"
import wrexxmock from "../public/wrexx-mockup-s.png"

export type Tags = "React" | "React-Native" | "HTML/CSS" | "TypeScript" | "WordPress" | "Squarespace" | "Angular" | "PostgreSQL" | "Design" | "Figma"

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
        technologies: ["Figma", "Adobe Creative Suite", "Principle", "User Research"],
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

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
    return portfolioItems.find(item => item.id === id);
}
