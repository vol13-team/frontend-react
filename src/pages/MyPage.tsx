import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface UserProps {
  name: string;
  id: string;
  img: string;
  profile: string;
}

const UserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 40px 0;
  `;

const UserImg = styled.img`
  width: 100px;
  `;

const UserInfoDiv = styled.div`
  margin : 0 0 20px 40px;`;

const MyPage: React.FC<UserProps> = (props: UserProps) => {
  return (
    <>
      <UserDiv>
        <UserImg src={props.img} alt="icon" />
        <div>
          <h2>{props.name}</h2>
          <p>{props.id}</p>
          <p>{props.profile}</p>
        </div>
      </UserDiv>
    </>
  );
};

export default MyPage;
