import React, { useState } from "react";
import dummyUser from "../assets/images/image.png";
import { Heading, Text, Button } from "@yamada-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

interface Sample {
  id: number;
  title: string;
  summary: string;
  icon: string;
  url: string;
}

export const Home: React.FC = () => {
  const { isSignedIn } = useAuth();
  const [archicles] = useState<Sample[]>([
    { id: 1, title: "Point1", summary: "This is point1", icon: dummyUser, url: "/" },
    { id: 2, title: "Point2", summary: "This is point2", icon: dummyUser, url: "/" },
    { id: 3, title: "Point3", summary: "This is point3", icon: dummyUser, url: "/" },
  ]);

  return (
    <>
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
            {archicles.map((article) => (
              <PointDetail key={article.id}>
                <Icons src={article.icon} alt="icon" />
                <Link to={article.url}>
                  <Point>
                    <ArticlePoints>{article.title}</ArticlePoints>
                    <ArticleSummary>{article.summary}</ArticleSummary>
                  </Point>
                </Link>
              </PointDetail>
            ))}
          </PointDiv>
          <StartButtonDiv>
            <Button>
              {isSignedIn ?? false ? <Link to={`/pickup`}>はじめる</Link> : "未ログイン"}
            </Button>
          </StartButtonDiv>
        </Bg>
      </main>
    </>
  );
};

const Bg = styled.div`
    background-color: #D9D9D9;
    width: 80%;
    margin: 100px auto 0 auto;
    padding: 0 0 40px 0;
    `;

const Title = styled(Heading)`

    margin :40px 0 0 80px
    `;

const SubTitleDiv = styled.div`
    margin: 40px 0 80px 130px;  
  `;

const SubTitle = styled(Text)`
    font-size: 2rem;`;

const PointDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 100px 0px 0 80px;
  `;

const PointDetail = styled.div`
    display: flex;
    justify-content: space-between; 
    margin: 0 80px 0 0;`;

const Point = styled.div`
    margin: 0 10px;
    padding: 30px 0;
  `;

const Icons = styled.img`
    width: 50%
  `;

const ArticlePoints = styled(Text)`
    color: #CA841C;
    margin: 0 0 10px 0;
    font-size: 2rem;
  `;

const ArticleSummary = styled(Text)`
    font-weight: bold;
  `;

const StartButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 100px 80px 0 0;
    `;
