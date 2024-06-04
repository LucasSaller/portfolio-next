import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

export const HomeIcon: JSX.Element = <FaHome />;
export const AboutIcon: JSX.Element = <FaInfoCircle />;
export const ProjectsIcon: JSX.Element = <FaProjectDiagram />;
export const ContactIcon: JSX.Element = <FaEnvelope />;

export const navItems = [
  { name: "Home", link: "#home", icon: HomeIcon },
  { name: "About", link: "#about", icon: AboutIcon },
  { name: "Projects", link: "#projects", icon: ProjectsIcon },
  { name: "Contact", link: "#contact", icon: ContactIcon },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[30vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-4 md:min-h-[20vh] md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: (
      <>
        Studying Software Engineering at{" "}
        <span className="text-purple hover:underline">
          <a
            href="https://www.frba.utn.edu.ar/"
            target="_blan"
            rel="noreferrer"
          >
            UTN- FRBA
          </a>
        </span>
      </>
    ),
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working as a Wordpress Developer",
    description: "2021 | Present",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Netflix Trailer app",
    des: "This application allows users to view trailers for trending movies available on Netflix. It offers an intuitive and user-friendly interface, enabling seamless browsing and quick access to the latest trailers. Designed to enhance the movie-watching experience, the app helps users discover new films and stay updated with upcoming releases on Netflix.",
    img: "/netflix-clone.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://netflix-trailer-app-three.vercel.app/",
  },
  {
    id: 2,
    title: "Aerolab Challenge",
    des: " Easily explore and redeem items using accumulated points with our intuitive app featuring transparent pricing, instant redemption, and secure transactions.",
    img: "/aerolab-challenge.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://aerolab-challenge.vercel.app/",
  },
  {
    id: 2,
    title: "Sum Reservations",
    des: "I made this app to make it easier and more accessible to book the communal space in the building where I live. Reservations were previously managed on a paper sheet, and the idea was to 'modernize' and streamline the booking process..",
    img: "/sum-reservations.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://sum-echeverria22.netlify.app/",
  },
  {
    id: 3,
    title: "Task list",
    des: "Stay organized and boost productivity with my user-friendly task management app. Effortlessly create, manage, and conquer your daily to-do lists for ultimate success.",
    img: "/task-list.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://taskslist-saller.netlify.app/",
  },
  {
    id: 4,
    title: "Weather App",
    des: "I made this app as part of a job interview, and it allows you to check the weather anywhere in the world! It features a user-friendly interface and provides real-time weather updates, making it a handy tool for planning your day or travel.",
    img: "/weather-app.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://weather-challenge22.netlify.app/",
  },
  {
    id: 5,
    title: "Anime Vault",
    des: "Your favorite anime, all in one place.",
    img: "/anime-screen.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://anime-vault-onichan.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    alt: "github",
    link: "https://github.com/LucasSaller",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   alt: "twitter",
  //   link: "",
  // },
  {
    id: 3,
    img: "/link.svg",
    alt: "linkedin",
    link: "",
  },
];
