import React from "react";
import styled from "styled-components";
import { requestToPostWithPostId } from "../../utils/postRequest";

const Container = styled.div``;

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}

export async function getStaticProps({ params }) {
  const postData = await requestToPostWithPostId({ postId: params.id });

  return {
    props: {
      postData: postData.data,
    },
  };
}

export default function Post({ postData }) {
  console.log(postData);
  return <Container></Container>;
}
