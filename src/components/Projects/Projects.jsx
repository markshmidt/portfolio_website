// // src/components/Projects/Projects.jsx
// import React from "react";
// import "./Projects.css";

// const projectsData = [
//   {
//     title: "Coffee Island POS Web App",
//     description: "A full-stack Point of Sale (POS) web application built with Django, designed for Coffee Island coffee shop, featuring order management, item configuration, categories, loyalty points, receipt handling, and more",
//     image: "/public//assets/img/coffeeshopapp.png",
//     github: "https://github.com/markshmidt/coffee-shop-app",
//     play: "https://mariia-shmidt-portfolio/coffeeshopapp"
//   },
//   {
//     title: "Gomoku game",
//     description: "A fully functional web-based Gomoku game featuring PvP and AI game modes, responsive UI in colors of my portfolio website, Java Spring Boot backend + vanilla JS frontend, mobile-friendly interface",
//     image: "/assets/img/iadminpanel.gif",
//     github: "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-front",
//     play: "https://mariia-shmidt-portfolio/gomoku",
//   },
//   {
//     title: "Kamisado Game",
//     description: "Interactive digital version of the strategic board game Kamisado, using Python object-oriented programming and Pygame library.",
//     image: "/assets/img/kamisado.gif",
//     github: "https://github.com/markshmidt/projects/tree/main/PythonProjects/kamisado",
//     play:"",
//   },
//   {
//     title: "Racing Game",
//     description: "A fast-paced JavaFX racing game built with the JavaRush graphics engine with focus on dependencies and plugins.",
//     image: "/assets/img/project-maven.gif",
//     github: "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-maven",
//     play:"",
//   },
//   {
//     title: "Tic-Tac-Toe Game",
//     description: "A strategic Tic-Tac-Toe game on Tomcat using servlets and JSP as well as working with HTTP requests and responses.",
//     image: "/assets/img/tic-tac-toe.gif",
//     github: "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-servlet",
//     play:"",
//   },
//   {
//     title: "HRM & Payroll System",
//     description: "Comprehensive JavaFX-based HRM and Payroll System with employee record management and generating reports.",
//     image: "/assets/img/management.gif",
//     github: "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-management",
//     play:"",
//   },
//   {
//     title: "Airline Reservation System",
//     description: "An OOP-based Airline Reservation System with database storage and exception handling mechanisms.",
//     image: "/assets/img/oop2.gif",
//     github: "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-maven",
//     play:"",
//   },
//   {
//     title: "RPG Admin Panel",
//     description: "A CRUD-based web app for managing online game player accounts using JS and jQuery.",
//     image: "/assets/img/iadminpanel.gif",
//     github: "https://github.com/markshmidt/projects/tree/main/JavaProjects/project-front",
//     play:"",
//   },
  


// ];

// const Projects = () => {
//   return (
//     <section className="projects-container">
//       <h1>My Projects</h1>
//       <div className="projects-description">
//         A selection of my projects that demonstrate my passion for full-stack development and clean, functional UI.
//       </div>
//       <div className="project-list">
//         {projectsData.map((project, index) => (
//           <div className="project-card" key={index}>
//             <img src={project.image} alt={project.title} />
//             <div className="project-info">
//               <h2>{project.title}</h2>
//               <p>{project.description}</p>
//               <a className="project-btn" href={project.github} target="_blank" rel="noopener noreferrer">
//                 GitHub
//               </a>
//               <a className="project-btn" href={project.play} target="_blank" rel="noopener noreferrer">
//                 Try it Live
//               </a>
              
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
