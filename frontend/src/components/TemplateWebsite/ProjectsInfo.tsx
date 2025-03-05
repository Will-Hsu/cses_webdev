import template1 from "../../images/templatepage/template1.png"


export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const projects : Project[] = [
    {
      id: 1,
      name: "Project One",
      description: "This is a description of Project Alpha. It's a groundbreaking initiative.",
      image: template1,
    },
    {
      id: 2,
      name: "Project Beta",
      description: "This is a description of Project Beta. An innovative approach to problem-solving.",
      image: template1,
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "This is a description of Project Gamma. A cutting-edge technological solution.",
      image: template1,
    },
  ];