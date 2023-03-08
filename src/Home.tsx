import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Banner = styled.div<{ url: string; isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? "30vh" : "20vh")};
  width: 100vw;
  min-height: ${(props) => (props.isMobile ? "100px" : "100px")};
  min-width: ${(props) => (props.isMobile ? "640px" : "300px")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url});
`;

function Home() {
  const isMobile = useMediaQuery({ query: "(min-width: 600px)" });
  const [url, setUrl] = useState("/img/banner.png");
  useEffect(() => {
    if (isMobile) {
      setUrl("/img/banner.png");
    } else {
      setUrl("/img/banner_mini.png");
    }
  }, [isMobile]);
  return (
    <>
      <Navigation />
      <Banner url={url} isMobile={isMobile} />
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
