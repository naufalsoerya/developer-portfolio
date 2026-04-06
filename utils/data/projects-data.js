import ayla from '../../public/image/ayla.jpg';
import crefin from '../../public/image/crefin.jpg';
import realEstate from '../../public/image/real-estate.jpg';
import travel from '../../public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Intelligent Stock Market Analysis',
        description: "AI powered stock market analytics platform that processes End-of-Day and broker summary data to generate daily stock watchlists and trading signals.",
        tools: ['FastAPI', 'NextJS', 'TypeScript', 'OpenAI API', 'Machine Learning', 'PostgreSQL'],
        role: 'Software Engineer',
        code: '',
        demo: 'https://drive.google.com/drive/folders/1f5I_8m5Ozb_o5TMkFN4go-SAv30Uq8Dq',
        image: crefin,
    },
    {
        id: 2,
        name: 'Scalable Learning Management System',
        description: 'Learning Management System for online training platforms, enabling administrators to manage courses, learning materials, and course purchases through a centralized dashboard',
        tools: ['FastAPI', 'NextJS', 'TypeScript', 'PostgreSQL'],
        role: 'Software Engineer',
        code: '',
        demo: 'https://drive.google.com/drive/folders/1niYAKtt2AjcJWM3SHmQIyIF-k6b0wkan?usp=drive_link',
        image: travel,
    },
    {
        id: 3,
        name: 'Enterprise Internal Management System',
        description: 'Internal enterprise platform to streamline HR and operational workflows, including attendance management, request approvals, project engagement tracking, and employee time-off management.',
        tools: ['Laravel', 'NextJS', 'TypeScript', 'MariaDB'],
        code: '',
        role: 'Software Engineer',
        demo: 'https://drive.google.com/drive/folders/1Sy--IPYLQzfXGoJDcNlPVL64wL2Ey-WK',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Scalable Online Examination System',
        description: "The system is ideal for organizations that need a reliable platform for online assessments, certification exams, recruitment tests, or large-scale training programs.",
        tools: ['Gin', 'NextJS', 'TypeScript', 'PostgreSQL'],
        role: 'Software Engineer',
        code: '',
        demo: 'https://drive.google.com/drive/folders/1DlUZbsaR-n81z9jK_BdLgoO3aGGvFAYn?usp=sharing',
        image: crefin,
    },
    {
        id: 5,
        name: 'AI Powered Restaurant Finder Mobile App',
        description: "Mobile application that helps users discover restaurants and food menus using AI driven recommendations and location based services.",
        tools: ['React Native', 'Expo Go', 'OpenAI API', 'Google Maps API', 'Express', 'Mongo DB', 'Tailwind CSS', 'AWS', 'Jest'],
        role: 'Fullstack Developer',
        code: 'https://github.com/fp-foodie-finder',
        demo: 'https://drive.google.com/file/d/1ULQknLsOFhCbNTboxlb1HPuuDnL-rbxN/view?usp=sharing',
        image: crefin,
    },
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