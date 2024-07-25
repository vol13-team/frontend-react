import React, { useState } from "react";
import styled from "styled-components";
import { Text, Flex, Box } from "@yamada-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";

interface Card {
  idNum: number;
  title: string;
  tag?: string;
  liked: boolean;
  viewed: boolean;
  created_at: number;
  imgUrl: string | undefined;
}

export const Articlecard: React.FC<Card> = (Card) => {
  const [isLiked, setIsLiked] = useState(Card.liked);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Box as="section" sx={{ margin: "30px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          width: "400px",
          height: "150px",
          padding: "16px",
          position: "relative",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Flex alignItems="flex-start">
          <Thumbnail>
            <img src={Card.imgUrl} alt="" />
          </Thumbnail>
          <Box flex="1">
            <Text
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "8px",
                margin: "8px",
              }}
            >
              {Card.title}
            </Text>
            {Card.tag && (
              <Box
                sx={{
                  display: "inline-block",
                  background: "#e0e0e0",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  color: "#555",
                  margin: "8px",
                }}
              >
                {Card.tag}
              </Box>
            )}
          </Box>
        </Flex>
        <Flex
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "calc(100% - 32px)",
            position: "absolute",
            bottom: "16px",
            left: "16px",
          }}
        >
          <Icons>
            <button onClick={handleLikeClick}>
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </button>
            {Card.viewed ? <CheckIcon color="secondary" /> : <Text>未読</Text>}
          </Icons>
          <Text
            sx={{
              fontSize: "12px",
              color: "#999",
            }}
          >
            {Card.created_at}日前
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

const Thumbnail = styled.div`
  width: 60px;
  height: 60px;
  background: #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-right: 12px;
`;

const Icons = styled.div`
  display: flex;
  gap: 8px;
`;
