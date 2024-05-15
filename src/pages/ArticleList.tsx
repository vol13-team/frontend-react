import React from "react";

interface ListProps {
  id: number;
  title: string;
  tug: string;
  liked: boolean;
  seen: boolean;
  created_at: string;
}

export const ArticleList: React.FC<ListProps> = (ListProps) => {
  return (
    <>
      <div>
        <div></div>
      </div>
    </>
  );
};
