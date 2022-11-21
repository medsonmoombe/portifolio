import calc from "../asset/images/calc.png";
import todo from "../asset/images/todo.png";
import space from "../asset/images/space.png";
import movies from "../asset/images/movies.png";
import js from "../asset/icons/javascript.svg";
import git from "../asset/icons/git.svg";
import react from "../asset/icons/react.svg";
import github from "../asset/icons/github.svg";
import html from "../asset/icons/html5.svg";
import sass from "../asset/icons/sass.svg";
import ruby from "../asset/icons/ruby.svg";
import rails from "../asset/icons/rails.svg";
import sql from "../asset/icons/sql.svg";
import redux from "../asset/icons/redux.svg";
import bootstrap from "../asset/icons/bootstrap.svg";
import rspec from "../asset/icons/rspec.svg";
import test from "../asset/icons/jest.svg";
import postgres from "../asset/icons/postgresql.svg"

import css from "../asset/icons/css3.svg";

export const ProjectsArr = [
  {
    id: 1,
    link: "https://cozy-centaur-d16d95.netlify.app/",
    code:"",
    title: "Math Magician",
    img: calc,
    description:
      "Math magicians is a website for all fans of mathematics.It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote",
    lang: [" Css", "React", "Javascript"],
  },
  {
    id: 2,
    link: "https://medsonmoombe.github.io/todo-list/dist/index.html",
    code:"",
    title: "todoList",
    img: todo,
    description:
      "This is a website which allows users to add their to do tasks and mark them completed if they are done also allows users to delete, edit and clear all completed task",
    lang: [" Css", "Html", "Javascript"],
  },
  {
    id: 3,
    link: "https://sparkling-mermaid-bef88d.netlify.app/",
    code:"",
    title: "Space Travellers",
    img: space,
    description:
      "This space traveller service with the real live data from the SpaceX API. The application allows users to book rockets and join selected space missions as well as unsubcribe to the missions",
    lang: [" Css", "React/Redux", "Javascript"],
  },
  {
    id: 4,
    link: "https://magical-rugelach-5decb5.netlify.app/",
    code: "",
    title: "Movie Website",
    img: movies,
    description:
      "This javascript  project  it is a movie website which fetches movies from TVmaze API and displays them,it uses involvement API for adding likes, comments and reservations ",
    lang: [" Css", "Html", "Javascript"],
  },
];

export const skills = [
  {
    id: 1,
    icon: js
  }, {
    id: 2,
    icon: html
  }, {
    id: 3,
    icon: sass
  }, {
    id: 4,
    icon: ruby
  }, {
    id: 5,
    icon: rails
  }, {
    id: 6,
    icon: sql
  }, {
    id: 7,
    icon: react
  }, {
    id: 8,
    icon: redux
  }, {
    id: 9,
    icon: css
  }, {
    id: 10,
    icon: git
  },
  {
    id: 11,
    icon: bootstrap
  }, 
  {
    id: 12,
    icon: github
  },
  {
    id: 13,
    icon: postgres
  }, {
    id: 14,
    icon: test
  }, {
    id: 15,
    icon: rspec
  },
]
