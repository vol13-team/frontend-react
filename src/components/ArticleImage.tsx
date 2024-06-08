import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// データをpropsで受け取り、id、記事の画像、タイトル、投稿時間を表示するコンポーネント
interface ArticleProps {
  id: number;
  title: string;
  img: string;
  time: number;
}

export const ArticleImage: React.FC<ArticleProps> = (props: ArticleProps) => {
  const [count, setCount] = React.useState<number>(props.time);
  const [time, setTime] = React.useState<string>("");
  // 時間計算と表示
  useEffect(() => {
    const timerID = setInterval(() => {
      setCount((time) => time + 1);
    }, 1000);
    if (count < 3600 && count > 60) {
      const date = Math.floor(count / 60);
      setTime(date + "分前");
    } else if (count < 86400 && count > 3600) {
      const date = Math.floor(count / 3600);
      setTime(date + "時間前");
    } else if (count > 86400) {
      const date = Math.floor(count / 86400);
      setTime(date + "日前");
    } else {
      setTime(count + "秒前");
    }
    return () => {
      clearInterval(timerID);
    };
  }, [count]);

  return (
    <>
      <ArticleDiv>
        <ImgDiv>
          <ArticleImg src={props.img} alt="img" />
        </ImgDiv>

        <ArticleTitle>
          <Link to={`/detail/${props.id}`}>{props.title}</Link>
        </ArticleTitle>

        <TimeDiv>
          <ArticleTime>{time}</ArticleTime>
        </TimeDiv>
      </ArticleDiv>
    </>
  );
};

const ArticleDiv = styled.div`
    background-color: #ffffdd;
    width: calc(25% - 20px);
    z-index: 1;
    border : 5px solid black;
    border-radius: 10px;
    margin: 20px 10px;`;

const ImgDiv = styled.div`
    border-bottom: 3px solid black;
    text-align: center;
    z-index: 0;`;

const ArticleImg = styled.img`
    width: 100%;
    height: 20rem;
    border-bottom: 3px solid black;
    vertical-align: bottom;`;

const ArticleTitle = styled.h2`
    margin: 20px 0 30px 20px;
    color: black;
    font-size: 2rem;`;

const TimeDiv = styled.div`
    display: flex;
    justify-content: flex-end;`;

const ArticleTime = styled.p`
    margin : 30px 20px 0 0;
    color: black;
    font-size: 1rem;`;
