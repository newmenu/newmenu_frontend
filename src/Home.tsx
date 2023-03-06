import Preview from "./Home/Preview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import { motion } from "framer-motion";

const sampleArr = [
  {
    imgsrc: "/img/previewsample.png",
    name: "딸기 샌드위치",
    exp: "GS편의점 | 2400원",
  },
  {
    imgsrc: "/img/previewsample2.png",
    name: "연세우유 우유생크림빵",
    exp: "CU편의점 | 2700원",
  },
  {
    imgsrc: "/img/previewsample3.png",
    name: "바질크림 불닭우동",
    exp: "농심 | 3600원",
  },
  {
    imgsrc: "/img/previewsample4.png",
    name: "티즐 피치 우롱티",
    exp: "웅진 | 1300원",
  },
  {
    imgsrc: "/img/previewsample5.png",
    name: "상쾌환",
    exp: "큐원 | 2500원",
  },
];

const Wrapper = styled.div`
  //background-color: #e1cece;
  height: 92vh;
  width: 90vw;
  margin: auto;
`;

const Box = styled(motion.div)<{ src: string }>`
  height: 100%;
  width: 30vw;
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.src});
  min-height: 540px;
  min-width: 320px;
  opacity: 0.5;
  position: relative;
`;

const Boxvariant = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Layer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  h1 {
    color: #df3c3c;
    font-size: 4em;
    margin-top: 30vh;
    font-family: "SEBANG_Gothic_Bold", sans-serif;
    -webkit-text-stroke: 2px white;
    //text-shadow: 10px rgba(255, 255, 255, 1);
  }
`;

const LayerVariants = {
  hover: {
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const Banner = styled.div`
  height: 30vh;
  width: 100vw;
  min-height: 100px;
  min-width: 640px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("img/banner.png");
`;

function Home() {
  return (
    <>
      <Navigation />
      <Banner />
    </>
  );
  /* <Swiper>
      {sampleArr.map((item) => (
        <SwiperSlide>
          <Preview imgsrc={item.imgsrc} name={item.name} exp={item.exp} />
        </SwiperSlide>
      ))}
    </Swiper> */

  /*  <Wrapper>
        <Box variants={Boxvariant} whileHover="hover" src="img/home1.png">
          <Layer variants={LayerVariants} whileHover="hover">
            <h1>딸기연유퐁당</h1>
          </Layer>
        </Box>
        <Box variants={Boxvariant} whileHover="hover" src="img/home2.png" />
        <Box variants={Boxvariant} whileHover="hover" src="img/home4.png" />
      </Wrapper> */
}

export default Home;
