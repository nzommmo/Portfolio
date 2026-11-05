import Huduma from "../assets/Images/Projects/Huduma.png"
import BAdmin from "../assets/Images/Projects/BAdmin.png"
import Hosy from "../assets/Images/Projects/Hosy.jpeg"
import SMS from "../assets/Images/Projects/SMS.png"
import Parking from "../assets/Images/Figma/Parking1.png"
import CMS from "../assets/Images/Projects/CMS.png"
import Mofa from "../assets/Images/Figma/MOFA.png"
import Plantra from "../assets/Images/Projects/plantra.png"

// TODO items: new entries whose URLs/screenshots I don't have. Image: null is
// handled by the Projects.jsx tweak noted in the reply.

export const Experiences = [    {
        Period: "Aug 2024 - Present",
        Title: "Frontend Developer",
        Company: "Dotsavvy",
        Link: 'https://www.dotsavvyafrica.com/',
        Description: "Build conversion-focused WordPress sites and campaign pages for clients in financial services, property, hospitality, FMCG and agriculture, including Gulf African Bank, Crystal Rivers Mall and Kaplan and Stratton, lifting engagement and conversion rates by 10-25%. Built diaspora journeys for Gulf African Bank (mortgage forms, investment quizzes, support hub), campaign pages for the Crystal Rivers Road Runners Run and Farmers Choice Pork Pawa, and supported delivery of the Executive Residency by Best Western Nairobi and Fortified Whole Grain Alliance (FWGA) websites. Created reusable templates so non-technical editors manage content without a developer, and used AI tools like Lovable and Google Stitch to speed up delivery by ~30%.",
        Technologies: [
            { Tech: "WordPress" },
            { Tech: "WPBakery" },
            { Tech: "ACF" },
            { Tech: "Elementor" },
            { Tech: "Accessibility" },
            { Tech: "Performance" },
        ]
    },

    {
        Period: "Apr 2026 - Oct 2026",
        Title: "Technical Growth Associate",
        Company: "VettedAI",
        Link: '#', // TODO: VettedAI URL
        Description: "Owned execution and growth of Recruiters Ring, VettedAI's flagship recruiter community series. Grew event-day attendance an average of 25% per edition, cut reliance on one channel from 52% to 34% of sign-ups, and took UTM-attributed registrants from ~10% to 100%. Built a Zoho CRM integration that captures every confirmed registration as a lead, turning the audience into 10 demos booked and a paid subscription. Diagnosed a Zoho send-limit throttle that silently skipped 34-100% of emails and ran a sender-domain A/B test (38.9% vs 16.9% open rate).",
        Technologies: [
            { Tech: "Zoho CRM" },
            { Tech: "Zoho Campaigns" },
            { Tech: "Twilio WhatsApp" },
            { Tech: "UTM Attribution" },
            { Tech: "Marketing Analytics" },
        ]
    },
    {
        Period: "June 2025 - August 2025",
        Title: "Products & Innovation Intern (Academic Attachment)",
        Company: "Interswitch East Africa",
        Link: 'https://interswitchgroup.com/kenya/',
        Description: "Supported product strategy and UX for Interswitch's payments products. Used AI-powered prototyping to cut feature validation cycles by ~50%, benchmarked Payment Gateway and AutoPay against competitors to surface feature gaps, and mapped the Quickteller customer journey to recommend UX fixes at key friction points. Worked in Agile/Kanban with Jira and Confluence.",
        Technologies: [
            { Tech: "Product Lifecycle" },
            { Tech: "Jira" },
            { Tech: "Confluence" },
            { Tech: "Agile/Scrum" },
            { Tech: "AI Prototyping" },
            { Tech: "Roadmapping" },
        ]
    },
]

export const PortfolioProjects = [
    {
        Image: null, // TODO: screenshot
        Title: "Gulf African Bank: Diaspora Journeys",
        Link: '#', // TODO
        Description: "Mortgage application forms, investment personality quizzes, a support hub and campaign landing pages for the bank's diaspora customers, plus lead forms integrated with third-party platforms. Built at Dotsavvy.",
        Technologies: [
            { Tech: "WordPress" },
            { Tech: "ACF" },
            { Tech: "Lead Capture" },
        ]
    },
    {
        Image: null, // TODO: screenshot
        Title: "PesaWallet",
        Link: '#', // TODO: GitHub (App)
        Description: "A mobile digital wallet: hold funds, create dedicated spending wallets (e.g. Fuel), send money and top up. Built with idempotent transaction handling so repeated requests never create duplicates, and designed to scale vertically and horizontally.",
        Technologies: [
            { Tech: "Django REST" },
            { Tech: "React Native" },
            { Tech: "PostgreSQL" },
            { Tech: "JWT" },
        ]
    },
    {
        Image: Plantra,
        Title: "Plantra",
        Link: 'https://plantra.zearom.com/',
        Description: "An event planning tool that helps organizers manage tasks, vendors, budgets and team collaboration, with real-time visibility into what's done and what still needs attention.",
        Technologies: [
            { Tech: "Django REST" },
            { Tech: "React" },
            { Tech: "PostgreSQL" },
            { Tech: "Tailwind" },
        ]
    },
    {
        Image: CMS,
        Title: "Headless CMS: WordPress + React",
        Link: 'https://chajio.zearom.com/',
        Description: "WordPress used solely as a content backend, with a React (Vite) frontend fetching content through the WordPress REST API for a fast, decoupled landing page.",
        Technologies: [
            { Tech: "WordPress" },
            { Tech: "React" },
            { Tech: "Tailwind" },
        ]
    },
    {
        Image: Huduma,
        Title: "Huduma Mtaani",
        Link: 'https://huduma-mtaani.vercel.app/',
        Description: "A web platform connecting local service providers with customers who need essential services. The name means 'services in the neighborhood', reflecting the goal of making reliable, on-demand services accessible in every community.",
        Technologies: [
            { Tech: "React" },
            { Tech: "ASP .NET" },
            { Tech: "REST" },
            { Tech: "PostgreSQL" },
        ]
    },
    {
        Image: BAdmin,
        Title: "Business Admin",
        Link: 'https://businessadmin-dusky.vercel.app/',
        // NOTE: this was a copy of the Huduma Mtaani description. Edit to match what it really does.
        Description: "A business administration dashboard for managing day-to-day operations in one place.",
        Technologies: [
            { Tech: "React" },
            { Tech: "Django REST" },
            { Tech: "PostgreSQL" },
        ]
    },
]

export const Designs = [
    {
        Image: Mofa,
        Title: "Ministry of Foreign Affairs Guest Services Management System",
        Link: "https://www.figma.com/design/uBFK9pjMa83XgKF0t1sgP5/MOFA?node-id=47-1447&t=QiTHYlrhVzjUCsPD-0",
        Description: "A comprehensive web-based platform designed to streamline the coordination of diplomatic guest services for the Ministry of Foreign Affairs. The system manages guest registration, itineraries, and special requirements while automating service coordination for airport transfers, accommodation, transportation, and protocol events. It features staff duty assignment, role-based access control, and secure document management.",
        Type: "Web Application"
    },
    {
        Image: Parking,
        Title: "Parking Management System",
        Link: 'https://www.figma.com/design/daWKFX6RYzQyr1jQS3uXIX/Parking-Management-System?node-id=0-1&t=K1lcHVgFjFHLihIa-1',
        Description: "This Figma project showcases the UI/UX design of a modern Parking Management App that streamlines how users handle parking. The app allows users to pay for parking electronically, access virtual parking tickets, and earn loyalty points with every transaction. These points can be redeemed within the app, promoting user retention and rewarding frequent use. The design emphasizes simplicity, accessibility, and real-time interactivity to enhance the parking experience.",
        Type: "Web Application"
    }
]

// Kept in sync with the hardcoded text in About.jsx (About doesn't read this).
export const AboutParagraphs = [
    { Text: "I'm a software engineer who builds things that convert. I build responsive, accessible websites for brands like Gulf African Bank, Crystal Rivers Mall and Kaplan and Stratton, and back them with the data and automation that show whether they're working." },
    { Text: "As a Frontend Developer at Dotsavvy Africa, I ship WordPress sites, campaign landing pages (such as Farmers Choice Pork Pawa) and lead-generation journeys, and support delivery of sites like the Fortified Whole Grain Alliance (FWGA) and Executive Residency by Best Western Nairobi, plus reusable templates so editors can manage content without a developer. Across projects, engagement and conversion rates have improved by 10-25%." },
    { Text: "I previously worked as Technical Growth Associate at VettedAI, where I owned Recruiters Ring, a recruiter community event series. I grew event-day attendance an average of 25% per edition, built a Zoho CRM integration that turns every registration into a lead, and converted the audience into booked demos and a paid subscription." },
    { Text: "On the engineering side, I build full-stack apps with Django REST, React and PostgreSQL, including a mobile wallet with idempotent transactions. I hold a BSc in Computer Science and certifications in cybersecurity and data protection." },
]

export const ProjectArchive = [
    { Year: "2026", Project: "Recruiters Ring Campaigns", MadeAt: "VettedAI", MadeWith: [{ Tech: "Zoho" }, { Tech: "Twilio WhatsApp" }, { Tech: "Luma" }], Link: "#" }, // TODO
    { Year: "2025", Project: "Executive Residency by Best Western Nairobi", MadeAt: "Dotsavvy", MadeWith: [{ Tech: "WordPress" }, { Tech: "WPBakery" }], Link: "#" }, // TODO
    { Year: "2025", Project: "Fortified Whole Grain Alliance (FWGA)", MadeAt: "Dotsavvy", MadeWith: [{ Tech: "WordPress" }, { Tech: "ACF" }], Link: "#" }, // TODO
    { Year: "2025", Project: "Farmers Choice Pork Pawa", MadeAt: "Dotsavvy", MadeWith: [{ Tech: "WordPress" }], Link: "#" }, // TODO
    { Year: "2025", Project: "Crystal Rivers Road Runners Run", MadeAt: "Dotsavvy", MadeWith: [{ Tech: "WordPress" }], Link: "#" }, // TODO
    { Year: "2025", Project: "Huduma Mtaani", MadeAt: "CUEA", MadeWith: [{ Tech: "ASP .NET" }, { Tech: "React" }, { Tech: "Tailwind" }, { Tech: "PostgreSQL" }], Link: "https://huduma-mtaani.vercel.app/" },
    { Year: "2024", Project: "Gulf African Bank", MadeAt: "Dotsavvy", MadeWith: [{ Tech: "WordPress" }, { Tech: "ACF" }], Link: "#" }, // TODO
    { Year: "2024", Project: "Crystal Rivers Mall and Residences", MadeAt: "Dotsavvy", MadeWith: [{ Tech: "WordPress" }], Link: "#" }, // TODO
    { Year: "2024", Project: "Kaplan and Stratton", MadeAt: "Dotsavvy", MadeWith: [{ Tech: "WordPress" }], Link: "#" }, // TODO
    { Year: "2024", Project: "Business Admin", MadeAt: "-", MadeWith: [{ Tech: "Django REST" }, { Tech: "React" }, { Tech: "Tailwind" }, { Tech: "PostgreSQL" }], Link: "https://businessadmin-dusky.vercel.app/" },
    { Year: "2024", Project: "SMS Nasi", MadeAt: "-", MadeWith: [{ Tech: "Node" }, { Tech: "React" }, { Tech: "Tailwind" }, { Tech: "Africa's Talking" }], Link: "https://bulk-sms-swart.vercel.app/" },
    { Year: "2023", Project: "Hosy Sasa", MadeAt: "-", MadeWith: [{ Tech: "PHP" }, { Tech: "Javascript" }, { Tech: "Bootstrap" }], Link: "https://github.com/nzommmo/Hosy-Sasa" },
    { Year: "2023", Project: "Public Transport Ticketing System", MadeAt: "CUEA", MadeWith: [{ Tech: "PHP" }, { Tech: "Javascript" }, { Tech: "Bootstrap" }], Link: "https://github.com/nzommmo/PUBLIC-TRANSPORT-TICKETING-SYSTEM" },
]