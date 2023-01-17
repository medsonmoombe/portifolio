import eshop from "../asset/images/eshop.png";
import recipe from "../asset/images/recipe_ap.png";
import todo from "../asset/images/todo.png";
import doc from "../asset/images/doc.png";
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
import postgres from "../asset/icons/postgresql.svg";

import css from "../asset/icons/css3.svg";

export const ProjectsArr = [
  {
    id: 1,
    link: "https://sunny-syrniki-a48a54.netlify.app/",
    code: "https://github.com/medsonmoombe/e-shopping",
    title: "eshopping",
    img: eshop,
    description: "An online shopping e-commence website to shop",
    lang: [" Scss", "React", "firebase"],
  },
  {
    id: 2,
    link: "https://my-recipe-app-2uff.onrender.com/",
    code: "https://github.com/medsonmoombe/Recipee_app",
    title: "Recipe App",
    img: recipe,
    description:
      "The website keeps track of recipes, ingredients, and inventory. Allows to save, keep track, create recipes, and generate a shopping list based on whats missing from a recipe.",
    lang: ["Bootstrap", "Ruby", "ruby on rails"],
  },
  {
    id: 3,
    link: "https://medsonmoombe.github.io/todo-list/dist/index.html",
    code: "https://github.com/medsonmoombe/todo-list",
    title: "Todo list",
    img: todo,
    description:"This is a website which allows users to add their to do tasks and mark them completed if they are done also allows users to delete, edit and clear all completed tasks",
     lang: [" Css", "html", "Javascript"],
  },
  {
    id: 4,
    link: "https://63c6cb03c109d258d1ef70c9--flourishing-mochi-f95866.netlify.app/",
    code: "https://github.com/medsonmoombe/Reserve-doctor-front-end",
    title: "Reserve Doctor",
    img: doc,
    description:
      "This application is use to book an appointment with prominent Doctors around the world",
    lang: [" Tailwindcss", "React/Redux", "Rails"],
  },
];

export const skills = [
  {
    id: 1,
    icon: js,
  },
  {
    id: 2,
    icon: html,
  },
  {
    id: 3,
    icon: sass,
  },
  {
    id: 4,
    icon: ruby,
  },
  {
    id: 5,
    icon: rails,
  },
  {
    id: 6,
    icon: sql,
  },
  {
    id: 7,
    icon: react,
  },
  {
    id: 8,
    icon: redux,
  },
  {
    id: 9,
    icon: css,
  },
  {
    id: 10,
    icon: git,
  },
  {
    id: 11,
    icon: bootstrap,
  },
  {
    id: 12,
    icon: github,
  },
  {
    id: 13,
    icon: postgres,
  },
  {
    id: 14,
    icon: test,
  },
  {
    id: 15,
    icon: rspec,
  },
];
