import Head from "next/head";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import BaseLine from "../components/BaseLine";
import { requestToPostGetAll } from "../utils/postRequest";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div``;

const Banner = styled.div`
  background-color: hotpink;
  height: 20rem;
`;

const ItemsWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-overflow: ellipsis;
  color: #424242;
`;

const Price = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: #f1f1f1;
  font-size: 32px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  left: 20px;
  border-radius: 15px;
`;

const StyledImage = styled(Image)`
  position: absolute;
  border-radius: 15px;
`;

const Footer = styled.div`
  width: 100vw;
  height: 20rem;
  background-color: hotpink;
  margin-top: 30px;
`;

export async function getStaticProps() {
  const postsData = await requestToPostGetAll();

  return {
    props: {
      postsData: postsData.data,
    },
  };
}

export default function Home({ postsData }) {
  const [postsDataState, setPostsDataState] = useState([]);
  useEffect(() => {
    setPostsDataState(postsData);
  }, [postsData]);
  return (
    <Container>
      <Head>
        <title>YORUTOWN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <BaseLine />
      <Banner></Banner>
      <ItemsWrapper>
        {postsDataState?.map((post) => (
          <Link href={`/posts/${post._id}`}>
            <Item>
              <StyledImage
                height={400}
                width={300}
                src={`/assets/thumbnail/${post.thumbnail}`}
              />
              <Price>{post.price}</Price>
              <Title>{post.title}</Title>
            </Item>
          </Link>
        ))}
      </ItemsWrapper>
      <Footer></Footer>
    </Container>
  );
}
