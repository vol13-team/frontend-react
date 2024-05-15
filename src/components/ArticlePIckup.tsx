import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface ArticleProps {
  id: number;
  title: string;
  tag: string;
  image: string;
  liked: boolean;
  seen: boolean;
  created_at: string;
}

export const ArticlePickup: React.FC<ArticleProps> = (ArticleProps) => {
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "center", border: "3px solid black" }}>
          <img src={ArticleProps.image} alt="thumbnail" />
          <div>
            <h2>{ArticleProps.title}</h2>
            <p>{ArticleProps.tag}</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            {ArticleProps.liked ? <FavoriteIcon color="secondary" /> : <FavoriteIcon />}
            {ArticleProps.seen ? <VisibilityIcon color="secondary" /> : <VisibilityIcon />}
          </div>
          <div>
            <p>{ArticleProps.created_at}</p>
          </div>
        </div>
      </div>
    </>
  );
};
