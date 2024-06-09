import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "@yamada-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";

interface Card {
  idNum: number;
  title: string;
  tag: string;
  liked: boolean;
  viewed: boolean;
  created_at: number;
  imgUrl: string | undefined;
}

export const Articlecard: React.FC<Card> = (Card) => {
  const [liked, setLiked] = useState(Card.liked);

  const handleLike = (): void => {
    setLiked(!liked);
  };

  return (
    <>
      <Carddiv>
        <Thumbnail>
          <img src={Card.imgUrl} alt="" />
        </Thumbnail>
        <Content>
          <Title>{Card.title}</Title>
          <Tag>{Card.tag}</Tag>
          <Footer>
            <Icons>
              <button onClick={handleLike}>
                {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </button>
              {Card.viewed ? <CheckIcon color="secondary" /> : <Text>未読</Text>}
            </Icons>
            <Time>{Card.created_at}</Time>
          </Footer>
        </Content>
      </Carddiv>
    </>
  );
};

const Carddiv = styled.div`  
display: flex;
align-items: center;
background: white;
padding: 16px;
border: 1px solid #ddd;
border-radius: 8px;
width: 400px; /* カードの幅を設定 */
height: 200px; /* カードの高さを設定 */`;

const Thumbnail = styled.div`
width: 80px;
height: 80px;
background: #ccc;
border-radius: 8px;
margin-right: 16px;`;

const Content = styled.div`
display: flex;
flex-direction: column;
flex: 1;`;

const Title = styled.div`
font-size: 18px;
font-weight: bold;
margin-bottom: 8px;
`;

const Tag = styled.div`
display: inline-block;
background: #e0e0e0;
padding: 4px 8px;
border-radius: 4px;
font-size: 12px;
color: #555;
margin-bottom: 8px;`;

const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: auto;
color: #999;`;

const Icons = styled.div`
display: flex;
gap: 8px`;

const Time = styled.span`
font-size: 14px;
color: #999;`;
