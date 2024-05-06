import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "@clerk/clerk-react";

export const MyPage: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      <UserDiv>
        <UserImg src={user?.imageUrl} alt="icon" />
        <UserInfoDiv>
          <UserName>{user?.username}</UserName>
          <UserID>{user?.id}</UserID>
          <UserProf>{}</UserProf>
        </UserInfoDiv>
      </UserDiv>
    </>
  );
};

const UserDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 120px 0 40px 40px;
  `;

const UserInfoDiv = styled.div`
  margin : 0 0 20px 40px;`;

const UserImg = styled.img`
  max-width: 100px;
  margin: 0 20px 0 40px;
  border-radius: 10px;`;

const UserName = styled.h2`
  font-size: 2rem;
  margin: 0 0 10px 0;`;

const UserID = styled.p`
  margin: 0 0 10px 0;
  color: gray;
  `;

const UserProf = styled.p`
  margin: 0 0 10px 0;
  max-width: 30%;`;
