import calc from "../asset/images/calc.png";
import todo from "../asset/images/todo.png";
import space from "../asset/images/space.png";
import movies from "../asset/images/movies.png";

export const ProjectsArr = [
  {
    id: 1,
    link: "https://cozy-centaur-d16d95.netlify.app/",
    title: "Math Magician",
    img: calc,
    description:
      "Math magicians is a website for all fans of mathematics.It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote",
    lang: [" Css", "React", "Javascript"],
  },
  {
    id: 2,
    link: "https://medsonmoombe.github.io/todo-list/dist/index.html",
    title: "todoList",
    img: todo,
    description:
      "This is a website which allows users to add their to do tasks and mark them completed if they are done also allows users to delete, edit and clear all completed task",
    lang: [" Css", "Html", "Javascript"],
  },
  {
    id: 3,
    link: "https://sparkling-mermaid-bef88d.netlify.app/",
    title: "Space Travellers",
    img: space,
    description:
      "This space traveller service with the real live data from the SpaceX API. The application allows users to book rockets and join selected space missions as well as unsubcribe to the missions",
    lang: [" Css", "React/Redux", "Javascript"],
  },
  {
    id: 4,
    link: "https://magical-rugelach-5decb5.netlify.app/",
    title: "Movie Website",
    img: movies,
    description:
      "This javascript  project  it is a movie website which fetches movies from TVmaze API and displays them,it uses involvement API for adding likes, comments and reservations ",
    lang: [" Css", "Html", "Javascript"],
  },
];
