import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Foodie Finder',
        description: "Introducing a cutting-edge mobile application designed to help users discover menus and restaurants effortlessly using AI and Google Maps API! This innovative app combines intelligent recommendations and advanced mapping technology to guide users to the perfect dining experience. Whether you're craving a specific cuisine or want to explore new options nearby, this app provides personalized suggestions based on your tastes and location. Enhance your culinary adventures with a seamless and intuitive interface that connects you to the best dining options around!.",
        tools: ['React Native', 'Expo Go', 'OpenAI API', 'Google Maps API', 'Express', 'Mongo DB', 'Tailwind CSS', 'AWS', 'Jest'],
        role: 'Full Stack Developer',
        code: 'https://github.com/fp-foodie-finder',
        demo: 'https://drive.google.com/file/d/1ULQknLsOFhCbNTboxlb1HPuuDnL-rbxN/view?usp=sharing',
        image: crefin,
    },
    {
        id: 2,
        name: 'Facebook Clone',
        description: 'Discover a captivating mobile-based social media application crafted to bring the Facebook experience to your fingertips!. Immerse yourself in the familiar, engaging features of a social network that allows you to connect with friends and share moments effortlessly. Visit the project to learn more about this exciting development!.',
        tools: ['React Native', 'Expo Go', "GraphQL", "Redis", "Apollo Server", "Apollo Client", "Mongo DB", "Tailwind CSS", "AWS"],
        role: 'Full Stack Developer',
        code: 'https://github.com/naufalsoerya/Facebook-Clone',
        demo: 'https://drive.google.com/file/d/13K7t1UkMkyT2Lz2Bzbvs7uvaleCj1aFR/view?usp=drive_link',
        image: travel,
    },
    {
        id: 3,
        name: 'McDonalds Clone',
        description: 'Explore an immersive web-based e-commerce application inspired by a beloved fast-food chain! Discover the dynamic features and user-friendly interface. Dive into a world where you can experience the convenience and fun of an interactive fast-food website. Please kindly check my project!.',
        tools: ['React', 'NextJS', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Vercel', 'JWT'],
        code: 'https://github.com/naufalsoerya/McDonalds-Clone',
        role: 'Full Stack Developer',
        demo: 'https://drive.google.com/file/d/1B3-m9ya1SsNdrToBO0AiK9sq21HTcj0f/view?usp=drive_link',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Coffee Shop',
        description: "Discover a web-based application tailored for coffee shop enthusiasts!. This app offers a user-friendly interface for customers to explore the menu, place orders, and engage with their favorite coffee shop. Whether you're looking to customize your drink or order ahead for quick pickup, this app enhances the coffee shop experience with convenience and innovation. Dive in to discover how this project is brewing up a perfect blend of technology and coffee culture!.",
        tools: ['React', 'Redux', 'Sequelize', 'Express', "Tailwind CSS", "AWS", "Firebase"],
        code: 'https://github.com/group-project-hck/coffe-shop',
        demo: 'https://drive.google.com/file/d/19WLGjgxFtuCEt-yKwVc8pNTExX51WKcS/view?usp=sharing',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },