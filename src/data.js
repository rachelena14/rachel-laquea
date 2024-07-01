

import React from 'react';

export const about = [ {  
  title: "Hi, I'm Rachel",
  subtitle: "I love to build amazing apps.",          
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?"
  }
];
export const contact = [
  {
  github: "github", linkedin: "linkedin", facebook: "facebook", instagram: "instagram"
  },
  {
  title: "Phone",
    contact: "123-456-7890"
  },
  {
    title: "Email",
    contact: "rlaquea14@gmail.com"
  }
];

export const projects = [
  {
    title: "Frequencies",
    subtitle: "MERN Stack",
    description:
      "This is a full-stack React application that serves as an interactive sound therapy tool for both patient and provider use in music therapy practices. More now than ever, stressors, toxins and negative environmental influences are impacting humans’ quality of life. In order to combat this and provide vibrational frequencies that promote health and wellness, we created an application that is designed to help people heal through sound. The application is a full MERN stack application, using MongDB, Apollo Express Server, React, & Node.js.",
    image: "PICTURE(S) OF PROJECT",
    link: "DEPLOYED PROJECT LINK HERE",
  },
  {
    title: "Parks and Pages",
    subtitle: "React and Python",
    description:
      "This application is a search tool for the avid hiker and reader. The user can search for their state in the U.S., and a list of national and/or state parks appears on the next page, with a map showing the park locations. Once they find a park they want to check out, the application uses the Google Books API to show book results that are related to the park. Then, the user can save the books they are interested in to a favorite books list, displayed on the favorite books page.",
    image: "PICTURE(S) OF PROJECT",
    link: "DEPLOYED PROJECT LINK HERE",
  },
  {
    title: "Cat Fact Quiz",
    subtitle: "React and Firebase",
    description:
      "This is a quiz that asks the user five questions about cats. When the start button is clicked, the timer starts at 75 seconds and counts down.

Every time a question is answered incorrectly, the timer subtracts 10 seconds from the time which is the user's score at the end of the game.

When the timer runs out, or all of the questions have been answered, the user is prompted to enter her initials and the high scores are saved in another page using local storage.",
    image: "PICTURE(S) OF PROJECT",
    link: "DEPLOYED PROJECT LINK HERE",
  },
  {
    title: "Botanica API",
    subtitle: "Herbal nutrition search tool",
    description:
      "This is a full MERN Stack application, that utilizes React.js, Express, MongoDB for the database and the herb",
    image: "PICTURE(S) OF PROJECT",
    link: "DEPLOYED PROJECT LINK HERE",
  },
];

export const testimonials = [
  {
    name: "Jesse Collins",
    image: "https://randomuser.me/api/portraits"
  },
]
  const skills = {
  Javascript: true,
  Python: true,
  HTML: true, 
  CSS: true, 
  React: true,
  Node: true, 
  Django: true, 
  Tailwind: true, 
  Bootstrap: true, 
  Materialize: true, 
  Git: true, 
  Github: true, 
  Heroku: true, 
  Netlify: true
  }

export const skillsArray = Object.keys(skills);
export const Skills = () => {
  return skills;
};

export const SkillComponent = () => {
  const skills = Skills();

return (
  <div> 
  {Object.keys(skills).map((skill, index) => (
    <div key={index}>{skill}</div>
  ))}
  </div>
);
}

export const navbar = [
  {
    title: "Past Work",
    link: "#projects"
  },
  {
    title: "Skills",
    link: "#skills"
  },
  {
    title: "Testimonials",
    link: "#testimonials"
  },
  {
    title: "Hire Me",
    link: "#contact"
  },
];
