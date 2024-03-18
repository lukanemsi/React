import karimP from "../img/users/karim.png";
import dashboardP from "../img/navigation/category.svg";
import artistsP from "../img/navigation/profile.svg";
import projectsP from "../img/navigation/gallery.svg";
import logoutP from "../img/navigation/logout.svg";

import user1 from "../img/users/user1.svg";
import user2 from "../img/users/user2.svg";
import user3 from "../img/users/user3.svg";

import project1 from "../img/projects/project1.svg";
import project2 from "../img/projects/project2.svg"
import project3 from "../img/projects/project3.svg"


export const picture = {
  src: karimP,
  alt: "picture1",
};
export const user = {
  name: "Karim Benzema",
  role: "Admin",
};

export const navigation = [
  {
    src: dashboardP,
    name: "Dashboard",
    path: "/"
  },

  {
    src: artistsP,
    name: "Artists",
    path: "/artists"
  },
  {
    src: projectsP,
    name: "Projects",
    path: "/projects"
  },

  {
    src: logoutP,
    name: "Logout",
    path: "/logout"
  },
];

export const cards = [
  {
    amount: 30000,
    title: "Art sales",
  },
  {
    amount: 250,
    title: "New artists",
  },
  {
    amount: 400000,
    title: "Revenue generated",
  },
];

export const artists = [
  {
    creator: {
      name: "Flotsam",
      img: user1,
    },
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    creator: {
      name: "Siuuuuu",
      img: user2,
    },
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    creator: {
      name: "Bluenose",
      img: user3,
    },
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
];


export const artistsInfo = [
  {
    creator: {
      name: "Flotsam",
      img: user1,
    },
    birthDate: "YYYY-MM-DD",
    biography: "Biographical information about the artist",
    awards: ["List", "of", "awards", "and", "honors"],

  },
  {
    creator: {
      name: "Siuuuuu",
      img: user2,
    },
    birthDate: "YYYY-MM-DD",
    biography: "Biographical information about the artist",
    awards: ["List", "of", "awards", "and", "honors"],

  },
  {
    creator: {
      name: "Bluenose",
      img: user3,
    },
    birthDate: "YYYY-MM-DD",
    biography: "Biographical information about the artist",
    awards: ["List", "of", "awards", "and", "honors"],    
  },
];



export const projects = [
  {
    creator: {
      name: "Flotsam",
      img: project1,
    },
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    creator: {
      name: "Astrom",
      img: project2,
    },
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    creator: {
      name: "$Moon",
      img: project3,
    },
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
];

export const tableData = {
  headers : [
    "artist",
    "status",
    'rating',
    "projects",
    "sale"
  ],

  data : [
    {
      artist: {
        name: "Flotsam",
        img: user1,
      },
      status: "Verified",
      rating: "40%",
      projects: 400,
      sale: "$400000"
    },

    {
      artist: {
        name: "Siuuuuu",
        img: user2,
      },
      status: "Pending",
      rating: "8%",
      projects: 60,
      sale: "$67800"
    },
    {
      artist: {
        name: "Bluenose",
        img: user3,
      },
      status: "Unverified",
      rating: "19%",
      projects: 10,
      sale: "$12000"
    }

  ]
}