import React, { useState } from "react";
import { Box, Text, Flex } from "@yamada-ui/react";

interface Card {
  id: number;
  title: string;
  tag?: string;
  liked: boolean;
  created_at: string;
}

export const Articlecard: React.FC<Card> = (Card) => {
  const [isLiked, setIsLiked] = useState(Card.liked);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Box as="section" sx={{ margin: "90px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          width: "400px",
          height: "170px",
          padding: "16px",
          position: "relative",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Flex alignItems="flex-start">
          <Box
            sx={{
              width: "60px",
              height: "60px",
              background: "#ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              marginRight: "12px",
            }}
          >
            アイコン
          </Box>
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
          <Box
            sx={{
              width: "20px",
              height: "18px",
              backgroundColor: "transparent",
              position: "relative",
              cursor: "pointer",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                top: "0",
                width: "10px",
                height: "16px",
                borderRadius: "50px 50px 0 0",
                backgroundColor: isLiked ? "#ff6b6b" : "#ccc",
              },
              "&::before": {
                left: "10px",
                transform: "rotate(-45deg)",
                transformOrigin: "0 100%",
              },
              "&::after": {
                left: "0",
                transform: "rotate(45deg)",
                transformOrigin: "100% 100%",
              },
              "&:hover::before, &:hover::after": {
                backgroundColor: "#ff6b6b",
              },
            }}
            onClick={handleLikeClick}
          />
          <Text
            sx={{
              fontSize: "12px",
              color: "#999",
            }}
          >
            {Card.created_at}日前
            {/* もしくは月日？ */}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
