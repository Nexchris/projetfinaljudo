// Generationpage.jsx
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import Overlaypage from './overlay'; // Assurez-vous que le chemin d'importation est correct
import { getFirestore, collection, getDocs } from "firebase/firestore";
import 'animate.css';
import firebaseConfig from "../firebaseConfig";

const Container = styled.div`
background-color: #0A094B;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: flex-start; 
`;

const CustomCarousel = styled(Carousel)`
  width: 95%;
  height: 700px;
  margin-left:3%;

  @media (min-width: 300px) and (max-width: 500px) {
    height: 500px;

  }
`;

const Titleflex = styled.div`
  font-size: 6vh;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-content: stretch;
  align-items: baseline;
  margin-bottom: 1%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? 'bounceInDown 1s;' : 'none')} 1.2s ease-in-out; // Remplace la transition d'opacité par l'animation zoomIn
  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 3.3vh;
    width: 95%;
    margin-left:7vh;
    margin-bottom: 2vh;
  }
  `

;

const Title1 = styled.div`
  margin-left: 6%;
  margin-top: 2%;
  margin-bottom: 10px;
`;

const Title2 = styled.div`
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    opacity: 0.5;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: 9999; // Valeur de z-index élevée pour que l'overlay soit au-dessus de tout
`;

const CloseButton = styled.span`
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // Afficher trois images à la fois sur les écrans de bureau.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2 // Afficher deux images à la fois sur les tablettes.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1 // Afficher une image à la fois sur les appareils mobiles.
  }
};

const Generationpage = () => {
  const [overlayData, setOverlayData] = useState(null); // State pour stocker les données de l'image sélectionnée
  const [titleVisible, setTitleVisible] = useState(false);
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesSnapshot = await getDocs(collection(getFirestore(), "champions"));
      const imagesData = imagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSliderImages(imagesData);
    };

    fetchImages();

    const handleScroll = () => {
      const generationPage = document.getElementById("generationPage");
      const titlePosition = generationPage.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition > titlePosition) {
        setTitleVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openOverlay = (imageData) => {
    setOverlayData(imageData); // Mettre à jour les données de l'overlay avec celles de l'image sélectionnée
  };

  const closeOverlay = () => {
    setOverlayData(null); // Réinitialiser les données de l'overlay lorsqu'il est fermé
  };

  return (
    <Container id="generationPage">
      <Titleflex isVisible={titleVisible}>
        <Title1>La Nouvelle</Title1>
        <Title2>Generation</Title2>
      </Titleflex>
      <CustomCarousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImages.map((image, index) => (
          <div className="slider" key={index} onClick={() => openOverlay(image)}>
            <Image src={image.url} alt={`movie ${index + 1}`} />
          </div>
        ))}
      </CustomCarousel>
      <Overlay isOpen={overlayData !== null}>
        {overlayData && (
          <Overlaypage athleteId={overlayData.id} />
        )}
        <CloseButton onClick={closeOverlay}>&times;</CloseButton>
      </Overlay>
    </Container>
  );
};

export default Generationpage;
