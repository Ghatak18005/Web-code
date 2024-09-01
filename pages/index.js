import { HoverEffect } from "../components/hovereffect";


const demoItems = [
  {
    link: "/page1",
    cardtitle:"1",
    description: "This is a description for Demo Card 1.",
    image: "../thumbnail/1.png", // Example image URL
  },
  {
    link: "/page2",
    cardtitle:"2",
    title: "Demo Card 2",
    description: "This is a description for Demo Card 2.",
    image: "../thumbnail/2.png", // Example image URL
  },
  {
    link: "/example3",
    description: "This is a description for Demo Card 3.",
    image: "https://via.placeholder.com/300x200", // Example image URL
  },
];

const Home = () => {
  return (
    <div className="text-white">
      <HoverEffect items={demoItems} className="container mx-auto" />
    </div>
  );
};

export default Home;
