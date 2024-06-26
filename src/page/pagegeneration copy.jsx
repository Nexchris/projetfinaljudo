import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import Overlaypage from './overlay'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import 'animate.css';
import firebaseConfig from "../firebaseConfig"

const Container = styled.div`
  background-color: #86847A;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: flex-start; 
`;

const CustomCarousel = styled(Carousel)`
  width: 95%;
  height: 700px;
  margin-left:3%;
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
  animation: ${({ isVisible }) => (isVisible ? 'backInLeft' : 'none')} 1.2s ease-in-out; // Remplace la transition d'opacité par l'animation zoomIn
`;

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
  const [overlayOpen, setOverlayOpen] = useState(Array(4).fill(false));
  const [titleVisible, setTitleVisible] = useState(false);
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    const firestore = getFirestore();
    const fetchImages = async () => {
      const imagesSnapshot = await getDocs(collection(firestore, "champions"));
      const imagesData = imagesSnapshot.docs.map(doc => doc.data());
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

  const openOverlay = (index) => {
    const updatedOverlayState = [...overlayOpen];
    updatedOverlayState[index] = true;
    setOverlayOpen(updatedOverlayState);
  };

  const closeOverlay = (index) => {
    const updatedOverlayState = [...overlayOpen];
    updatedOverlayState[index] = false;
    setOverlayOpen(updatedOverlayState);
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
          <div className="slider" key={index} onClick={() => openOverlay(index)}>
            <Image src={image.url} alt={`movie ${index + 1}`} />
          </div>
        ))}
      </CustomCarousel>
      {sliderImages.map((image, index) => (
        <Overlay key={index} isOpen={overlayOpen[index]}>
          {overlayOpen[index] && (
            <Overlaypage judoka={image} />
          )}
          <CloseButton onClick={() => closeOverlay(index)}>&times;</CloseButton>
        </Overlay>
      ))}
    </Container>
  );
};

export default Generationpage;
