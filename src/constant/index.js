import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    byltaxlogo,
    unionbank,
    ihclogowhite,
    chaselogo,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Android Developer",
        icon: web,
    },
    {
        title: "iOS Developer",
        icon: mobile,
    },
    {
        title: "Software Engineer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Android Developer",
        company_name: "UnionBank of the Philippines",
        icon: unionbank,
        iconBg: "#383E56",
        date: "Oct 2021 - Present",
        points: [
            "The Portal by UnionBank application that makes real-time fund transfers to both local and international banks. ",
            "Implementing new feature module and maintaining the code. ",
            "I’m using Android Studio SDK Development (Kotlin) and from the RESTful API’s (JSON Format) for the data gathering using Retrofit. ",
            "Using RxKotlin and RxJava for interactors and domain layer.",
            "Other Technology stack used Epoxy, Dagger, Navigation Component, Jumio SDK for real time verification of documents, RxAndroid.",
            "MVVM Architecture used and using Coroutines for handling different threads.",
        ],
    },
    {
        title: "Mobile Developer",
        company_name: "Invisible Hand Incorporation",
        icon: ihclogowhite,
        iconBg: "#E6DEDD",
        date: "Oct 2020 - Oct 2021",
        points: [
            "Developed an betting application for cock fighting Local/International and integrated with GCash payment, you can also watch live streaming cock fighting and withdraw and deposit to your account.",
            "I also developed online betting application like PCSO Lotto game, it will also integrated with GCash and Agora Live Streaming.",
            "The language that I used are Java/Kotlin/Dart",
            "I also deploy the implemented Open=EdX (LMS/CMS) tool using AWS infrastructure (Route 53, Elastic Beanstalk, EC2 Instance)",
            "MVP Architecture used and using Coroutine for handling different threads.",
            "Checking the application if it has a bugs or errors.",
            "I am the one in charge of the backend function and frontend designing.",
        ],
    },
    {
        title: "Android Developer",
        company_name: "Byltax Systems Incorporation",
        icon: byltaxlogo,
        iconBg: "#E6DEDD",
        date: "Aug 2019 - Oct 2020",
        points: [
            "I am the one in charge of the backend functions and frontend designing.",
            "I’m using Android Studio SDK Development and Java language for Android Development (Foreign application)",
            "Checking the application if it has a bugs or errors before it submitted to the client.",
            "I’m using XCode framework and Swift language for iOS Development (Local application)",
            "MVP/MVVM Architecture used.",
            "The language that I used are Java, Kotlin, Swift, Dart.",
            "RESTful and SOAP API’s (JSON and XML Format)",
            "Already uploaded the app in both Play Store and App Store.",
        ],
    },
    {
        title: "Mobile Developer",
        company_name: "Chase Technologies Incorporation",
        icon: chaselogo,
        iconBg: "#383E56",
        date: "May 2019 - Aug 2019",
        points: [
            "I’m using Android Studio SDK Development (Java) and from the API’s (JSON Format)",
            "I am the one in charge of the backend function and frontend designing.",
            "I am also the one who demonstrates the application to the client.",
            "Checking the application if it has a bugs or errors",
            "Thinking of own application design and show it to the client from an approval.",
            "I also debugging previous developer code and I fix its bugs and errors.",
            "Handled Clients (DAVIES Paint, UNILEVER, PANDORA Jewerly)",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };