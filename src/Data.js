import doorInstallationImage from "./assets/door-installation.jpg";
import gardeningServices from "./assets/gardenservices.jpg";
import paintingWork from "./assets/painting-work.jpg";
import homeRenovation from "./assets/home-renovation.webp";
import cleaningService from "./assets/cleaning-service.jpg";
import electricianWorks from "./assets/electrician-works.jpg";

export let services = [
  {
    imageURL: doorInstallationImage, // Use the imported image
    title: "Door Installation",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "Read More",
  },
  {
    imageURL: gardeningServices,
    title: "Gardening Service",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "Read More",
  },
  {
    imageURL: paintingWork,
    title: "Painting Works",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "Read More",
  },
  {
    imageURL: homeRenovation,
    title: "Home Renovation",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "Read More",
  },
  {
    imageURL: cleaningService,
    title: "Cleaning Service",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "Read More",
  },
  {
    imageURL: electricianWorks,
    title: "Electricain Works",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "Read More",
  },
];

export let products = [
  {
    id: 1,
    imageURL: doorInstallationImage,
    title: "Product 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "View More",
    tag: "Featured",
    price: "500",
    color: "Red",
    rating: "5",
  },
  {
    id: 2,
    imageURL: doorInstallationImage,
    title: "Product 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "View More",
    tag: "Recommended",
    cart: "Add to  🛒",
    price: "1000",
    color: "Black",
    rating: "4",
  },
  {
    id: 3,
    imageURL: doorInstallationImage,
    title: "Product 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "View More",
    tag: "Latest",
    cart: "Add to  🛒",
    price: "1500",
    color: "White",
    rating: "3",
  },
  {
    id: 4,
    imageURL: doorInstallationImage,
    title: "Product 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tenetur debitis dicta quam neque.",
    buttonLink: "View More",
    tag: "Offered ",
    cart: "Add to  🛒",
    price: "2000",
    color: "Gray",
    rating: "2",
  },
];
