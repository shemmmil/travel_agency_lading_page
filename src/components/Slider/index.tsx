import styled from "styled-components";
import SlickSlider from "react-slick";

const SliderLayout = styled.section`
  width: 40%;
  overflow: hidden;
  padding-left: 5rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  &:active {
    cursor: move;
  }
`;

const SliderImages = styled.div`
  width: 130%;
`;

const SliderImage = styled.div<ImageProps>`
  display: block;
  width: 400px !important;
  height: 600px;
  background-color: silver;
  background-image: url(${(props) => props.backgroundImageUrl});
  background-size: cover;
  filter: grayscale(50%);
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const Slider = () => {
  const slickSliderSetting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <SliderLayout>
      <SliderImages>
        <SlickSlider {...slickSliderSetting}>
          <Image
            backgroundImageUrl="https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
            title="Saksun, Faroe Island"
            text="1692 km away"
          />
          <Image
            backgroundImageUrl="https://images.unsplash.com/photo-1509018778968-5341380562c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=603&q=80"
            title="Streymoy, Faroe Island"
            text="1838 km away"
          />
          <Image
            backgroundImageUrl="https://images.unsplash.com/photo-1513883524931-aaab83bcb19b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            title="Boap, Faroe Island"
            text="1779 km away"
          />
          <Image
            backgroundImageUrl="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            title="Argir, Faroe Island"
            text="2009 km away"
          />
        </SlickSlider>
      </SliderImages>
    </SliderLayout>
  );
};

const ImageContent = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  color: white;
  padding: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 -10px 20px 20px rgba(0, 0, 0, 0.3);
`;

const ImageTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
`;

const ImageText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

export type ImageProps = {
  backgroundImageUrl: string;
  title?: string;
  text?: string;
};

const Image = ({ backgroundImageUrl, title, text }: ImageProps) => {
  return (
    <SliderImage backgroundImageUrl={backgroundImageUrl}>
      <ImageContent>
        <ImageTitle>{title}</ImageTitle>
        <ImageText>{text}</ImageText>
      </ImageContent>
    </SliderImage>
  );
};
