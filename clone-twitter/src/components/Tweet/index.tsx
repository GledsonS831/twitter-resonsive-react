import React from 'react';
import {
  Container,
  Description,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

import { RocketseatIcon } from '../RocketseatIcon';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>ReactDevelopment</strong>
            <span>@gledson.js</span>

            <Dot />
            <time>25 de julho</time>
            <Description>Foguete não tem ré </Description>

            <ImageContent />

            <Icons>
              <Status>
                <CommentIcon />
                20
              </Status>

              <Status>
                <RetweetIcon />
                20
              </Status>

              <Status>
                <LikeIcon />
                999
              </Status>
            </Icons>
          </Header>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
