import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./Cards.css";
import image1 from "./imgs/ac-odyssey.avif";
import image2 from "./imgs/4xJ8XB3bi888QTLZYdl7Oi0s.avif";
import image3 from "./imgs/Grand_Theft_Auto_V_capa.png";
import image4 from "./imgs/blackmyth.jpg";
import image5 from "./imgs/redDead.avif";

function Navbar() {
  const slides = [
    {
      image: image1,
      title: "Assassin`s Creed",
      description: "R$ 60,00",
      clickEvent: () => {
        window.location.href = "https://store.epicgames.com/pt-BR/p/assassins-creed-odyssey"
        // Lógica adicional para o clique aqui
      }
  
    },
    {
      image: "https://img.odcdn.com.br/wp-content/uploads/2022/05/fifa-22-819x1024.webp",
      title: "Fifa 2022",
      description: "R$ 42,00",
      clickEvent: () => {
        console.log("Slider clicked!");
        window.location.href = "https://store.epicgames.com/pt-BR/p/ea-sports-fc-25"
        // Lógica adicional para o clique aqui
      }
  
    },
    {
      image: image3,
      title: "Grand theft auto V",
      description: "R$ 45,00",
      clickEvent: () => {
        console.log("Slider clicked!");
        window.location.href = "https://store.epicgames.com/pt-BR/p/grand-theft-auto-v"
        // Lógica adicional para o clique aqui
      }
  
    },
    {
      image: image4,
      title: "Black Myth Wukong",
      description: "Jogar",
      clickEvent: () => {
        console.log("Slider clicked!");
        window.location.href = "https://store.epicgames.com/pt-BR/p/black-myth-wukong-87a72b"
        // Lógica adicional para o clique aqui
      }
  
    },
    {
      image: image5,
      title: "Red Dead Redemption II",
      description: "R$ 105,00",
      clickEvent: () => {
        console.log("Slider clicked!");
        window.location.href = "https://store.epicgames.com/pt-BR/p/red-dead-redemption-2"
        // Lógica adicional para o clique aqui
      }
  
    },
    {
      image: image2,
      title: "God of War",
      description: "R$ 119,00",
      clickEvent: () => {
        console.log("Slider clicked!");
        window.location.href = "https://store.epicgames.com/pt-BR/p/god-of-war-ragnarok-3ca641"
        // Lógica adicional para o clique aqui
      }
  
    },
    {
      image: "https://cdn.ggmax.com.br/images/c283a5e1197917efadd5ad7c0cb620cc.sm.jpg",
      title: "Minecraft",
      description: "R$ 23,80",
      clickEvent: () => {
        console.log("Slider clicked!");
        window.location.href = ""
        // Lógica adicional para o clique aqui
      }
  
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/pt/1/1c/Cod_bops3.jpg",
      title: "Call of Duty",
      description: "R$ 74,80",
      clickEvent: () => {
        console.log("Slider clicked!");
        window.location.href = ""
        // Lógica adicional para o clique aqui
      }
  
    },
    {
      image: "https://www.adrenaline.com.br/wp-content/uploads/2023/05/valorant-cover.jpg",
      title: "Valorant",
      description: "Jogar",
      clickEvent: () => {
        console.log("Slider clicked!");
        window.location.href = "https://store.epicgames.com/pt-BR/p/valorant"
        // Lógica adicional para o clique aqui
      }
  
    }
  ];
  return (
    <div>
      <ReactCardSlider className="sdd" slides={slides} />
    </div>
  );
}

export default Navbar;
