import React, { useContext } from "react";
import { MessageContext } from "./MessageProvider";
import styled from "styled-components";

import Post from './components/Post.jsx';
import Header from './components/Header.jsx';
import NewPost from './components/NewPost.jsx';

import './styles/index.scss';

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`

const PostContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
`

export const App = () => {
  const { messages } = useContext(MessageContext);

  return (
    <ContentContainer>
      <Header />
      <NewPost />
      <PostContainer>
        {messages && messages.map(msg => <Post key={msg.id} content={msg.content}></Post>)}
      </PostContainer>
    </ContentContainer>
  );
};
