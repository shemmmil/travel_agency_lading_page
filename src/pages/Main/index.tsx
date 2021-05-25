import React from "react";
import styled from "styled-components";

const Layout = styled.main`
  display: flex;
  padding-top: 2rem;
  padding-left: 4rem;
`;
const Content = styled.section`
  flex-basis: 50%;
`;
const Slider = styled.section``;
const Header = styled.header``;
const LogoLayout = styled.p`
  background-color: black;
  color: white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  line-height: 20px;
  padding: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.p``;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 100;
`;

const Text = styled.p`
  color: #505050;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  border: 2px solid white;
  padding: 10px 1.6rem;
  font-weight: bold;
  box-shadow: 2px 2px 0px 0px black;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 4px 4px 1px 0px black;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const ListContent = styled.div`
  margin-left: 1rem;
`;

const ListTitle = styled.h4`
  font-family: "Roboto", sans-serif;
  margin-bottom: 0;
  color: #333;
`;

const ListDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: light;
  margin-top: 6px;
  color: #939393;
`;

const ListImg = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #d8d8d8;
  border-radius: 100%;
`;

const ListSubTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 4rem;
`;

export const Main = () => {
  return (
    <Layout>
      <Content>
        <Header>
          <LogoLayout>
            <Logo>rest</Logo>
          </LogoLayout>
        </Header>
        <Title>Discover the meaning of rest once again</Title>
        <Text>
          Nowadays technology is all around us, so our ability to rest deeply
          has gone away. Check out our beautiful locations with no internet
          access to help you rest like never before/
        </Text>
        <Button>Explore</Button>
        <ListSubTitle>What we offer?</ListSubTitle>
        <List>
          <ListItem>
            <ListImg />
            <ListContent>
              <ListTitle>No internet connection</ListTitle>
              <ListDescription>
                Only you and your creativity and pure mind.
              </ListDescription>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListImg />
            <ListContent>
              <ListTitle>No electricity</ListTitle>
              <ListDescription>
                Only you and the beautiful world of nature.
              </ListDescription>
            </ListContent>
          </ListItem>
          <ListItem>
            <ListImg />
            <ListContent>
              <ListTitle>99% organic</ListTitle>
              <ListDescription>Only a few human-made object.</ListDescription>
            </ListContent>
          </ListItem>
        </List>
      </Content>
      <Slider></Slider>
    </Layout>
  );
};
