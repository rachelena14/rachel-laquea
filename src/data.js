

import React from 'react';


export const about = [ {  
  title: "Hi, I'm Reed.",
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
    title: "React Reserve",
    subtitle: "MERN Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-1.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-2.gif",
    link: "https://reedbarger.com",
  },
  {
    title: "DevChat",
    subtitle: "React and Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-3.gif",
    link: "https://jsbootcamp.com",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-4.gif",
    link: "https://pythonbootcamp.com",
  },
];

export const testimonials = [
  {
    name: "Jesse Collins",
    image: "https://randomuser.me/api/portraits"
  },
]


export const Skills = () => {
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
]