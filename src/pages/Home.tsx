import React, { useState, useEffect } from "react";
import icon1 from "../assets/images/image03.jpg";
import icon2 from "../assets/images/image02.jpeg";
import icon3 from "../assets/images/image01.jpg";
import { Heading, Text, Button } from "@yamada-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

interface Article {
  id: number;
  title: string;
  summary: string;
  icon: string;
  url: string;
}

const ArticlePoint: React.FC<Article> = ({ title, summary, icon, url }) => (
  <PointDetail>
    <Icons src={icon} alt={`${title} icon`} />
    <Link to={url}>
      <Point>
        <ArticlePoints>{title}</ArticlePoints>
        <ArticleSummary>{summary}</ArticleSummary>
      </Point>
    </Link>
  </PointDetail>
);

export const Home: React.FC = () => {
  const { isSignedIn } = useAuth();
  const [articles] = useState<Article[]>([
    { id: 1, title: "Point1", summary: "チーム開発をスムーズに", icon: icon1, url: "/" },
    { id: 2, title: "Point2", summary: "技術理解の向上に", icon: icon2, url: "/" },
    { id: 3, title: "Point3", summary: "習熟度の確認に", icon: icon3, url: "/" },
  ]);

  return (
    <main>
      <Bg>
        <Title size={"4xl"}>Article Park</Title>
        <SubTitleDiv>
          <SubTitle>
            問題作成で、
            <br />
            気軽なアウトプットを。
          </SubTitle>
        </SubTitleDiv>
        <PointDiv>
          {articles.map((article) => (
            <ArticlePoint key={article.id} {...article} />
          ))}
        </PointDiv>
        <StartButtonDiv>
          <StyledButton isLoggedIn={isSignedIn ?? false}>
            {isSignedIn ? <Link to="/pickup">はじめる</Link> : "未ログイン"}
          </StyledButton>
        </StartButtonDiv>
      </Bg>
    </main>
  );
};

const Bg = styled.div`
  background-color: #ffdbb7;
  width: 90%;
  max-width: 1200px;
  margin: 5vh auto;
  padding: 4vh 4vw;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Heading)`
  margin: 2vh 0;
  color: #f58181;
`;

const SubTitleDiv = styled.div`
  margin: 4vh 0;
`;

const SubTitle = styled(Text)`
  font-size: 1.5rem;
`;

const PointDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5vh 0;
`;

const PointDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vh 2vw;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Point = styled.div`
  text-align: center;
  padding: 2vh 0;
`;

const Icons = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const ArticlePoints = styled(Text)`
  color: #e67e22;
  margin: 1vh 0;
  font-size: 1.3rem;
  font-weight: bold;
`;

const ArticleSummary = styled(Text)`
  font-weight: 500;
  color: #34495e;
  font-size: 1.3rem;
`;

const StartButtonDiv = styled.div`
  display: flex;
  justify-content: right;
  margin: 5vh 0 0 0;
  color: #f58181;
`;

const StyledButton = styled(Button)<{ isLoggedIn: boolean }>`
  background-color: ${(props) => (props.isLoggedIn ? "#3498db" : "#ccc")};
  color: ${(props) => (props.isLoggedIn ? "white" : "#000")};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isLoggedIn ? "#2980b9" : "#bbb")};
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

