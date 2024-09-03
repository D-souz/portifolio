import { meta, shopify, starbucks, tesla, autosoft,achieve } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    bootstrap,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    wordpress,
    dl,
    weather,
    password
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: wordpress,
        name: "Wordpress",
        type: "Frontend",
    }
];

export const experiences = [
    {
        key: 1,
        title: "React.js Developer",
        company_name: "Autosoft Technologies",
        icon: autosoft,
        iconBg: "#accbe1",
        date: "June 2023 - August 2023",
        points: [
            "Developed and maintained web applications using React.js and other related technologies.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implemented responsive design and ensured cross-browser compatibility.",
            "Participated in code reviews and provided constructive feedback to other developers.",
        ],
    },
    {
        key: 2,
        title: "React Native Developer",
        company_name: "Autosoft Technologies",
        icon: autosoft,
        iconBg: "#fbc3bc",
        date: "June 2023 - August 2023",
        points: [
            "Developed cross-platform mobile applications using React Native for both iOS and Android platforms.",
            "Implemented core mobile application features such as navigation, state management, data fetching, and push notifications.",
            "Leveraged the React Native ecosystem, including popular libraries and frameworks like Redux, React Navigation, and Expo.",
            "Collaborated with other developers and managers to translate UI/UX designs into responsive and intuitive mobile interfaces",
        ],
    },
    {
        key: 3,
        title: "Full stack Developer",
        company_name: "Autosoft Technologies",
        icon: autosoft,
        iconBg: "#b7e4c7",
        date: "June 2023 - August 2023",
        points: [
            "Developed feature-rich web applications using the MERN stack (MongoDB, Express, React, Node.js).",
            "Built secure RESTful APIs using Node.js and Express to power the front-end applications.",
            "Integrated third-party services and APIs to enhance the functionality of the web applications using tools like Insomia & postman",
            "Troubleshot and debugged issues in both the front-end and back-end components of the applications.",
        ],
    },
    {
        key: 4,
        title: "IT & Web Developer",
        company_name: "Achieve Global Safaris",
        icon: achieve,
        iconBg: "#a2d2ff",
        date: "May 2024 - Present",
        points: [
            "Maintained and updated the company's WordPress-based website, ensuring it remained user-friendly, visually appealing, and up-to-date.",
            "Collaborated with the marketing team to design and implement new features and functionalities to enhance the website's user experience and engagement.",
            "Optimized website content and structure for search engine optimization (SEO) to improve the website's visibility and organic traffic",
            "Analyzed website analytics and user behavior data to identify opportunities for improvement and make data-driven decisions using tools like google analytics & google search console",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/D-souz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dhesouza-norbert/',
    }
];

export const projects = [
    {
        iconUrl: dl,
        theme: 'btn-back-red',
        name: 'Ecommerce website',
        description: 'Developed an eCommerce website for d&l connections, a company that deals in electronic gadgets such as phones',
        link: 'https://dlconnections.techsoults.com/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Car Identification & Verfication System',
        description: 'Created a full-stack web app that enabled users to identifing & verfiying vehicles using Qr code technology',
        link: 'https://github.com/D-souz/vehicle-identification-verification-system-frontend',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-blue',
        name: 'Weather App',
        description: 'Designed and built a mobile app to enable users determine the weather condition of different towns and cities.',
        link: 'https://github.com/D-souz/WeatherApp',
    },
    {
        iconUrl: password,
        theme: 'btn-back-pink',
        name: 'Password Generator',
        description: 'Built a web app that allowed users to generate passwords of varius lengths based on the input figure.',
        link: 'https://github.com/D-souz/password-generator',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];