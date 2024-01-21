import styled from "styled-components";
import { IoMdTime } from "react-icons/io";

interface Props {
  title: string;
  startAt: string;
  endAt?: string;
  imagePath: string;
  url: string;
}

const SideArticle = (props: Props) => {
  const { title, startAt, endAt, imagePath, url } = props;
  return (
    <SArticle>
      <SFlex>
        <SImage src={imagePath} alt='スポンサー' />
        <a href={url} target='_blank'>
          <STitle>{title}</STitle>
        </a>
      </SFlex>
      <STimeFlex>
        <IoMdTime />
        <STime>{`${startAt} ~ ${endAt}`}</STime>
      </STimeFlex>
    </SArticle>
  );
};

const SArticle = styled.article`
  margin-top: 16px;
  &:first-child {
    margin-top: 0;
  }
`;

const SFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SImage = styled.img`
  width: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const STitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const STimeFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const STime = styled.time`
  display: block;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
  color: #333;
`;

export default SideArticle;
