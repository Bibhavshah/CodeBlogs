import React from 'react';

const skills = [
  'C/C++',
  'Java',
  'Javascript',
  'Python',
  'HTML5',
  'CSS',
  'React',
  'Next',
  'Node',
  'MongoDB',
  'Jenkins',
  'Docker',
  'Github',
];

const Skills = () => {
  return (
    <section className="mt-16 w-full flex flex-col justify-start p-16 border-b-2 border-solid border-dark">
      <span className="text-3xl font-semibold text-accent">
        I am Comfortable in...
      </span>
      <ul className="flex flex-wrap justify-start gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="font-semibold capitalize border-2 border-solid border-dark px-8 py-4 text-2xl text-dark mt-4 hover:scale-105 transition-all ease duration-200 cursor-pointer"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
