import React from "react";
import styled from "styled-components";
import { Center } from "@yamada-ui/react";
import { ArticleDetailCard } from "../components/ArticleDetailCard";
import { IssueList } from "../components/IssueList";
import { RelationArticle } from "../components/RelationArticle";

export const Detail: React.FC = () => {
  return (
    <>
      <Outer>
        <Center>
          <Head>
            <ArticleDetailCard
              idNum={1}
              title="Test"
              tag="test"
              liked={true}
              viewed={true}
              created_at={20240710}
              imgUrl=""
            />
            <IssueList />
          </Head>
        </Center>
        <Center>
          <RelationArticle />
        </Center>
      </Outer>
    </>
  );
};

const Outer = styled.div`
  margin-top: 100px;`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 0 20px;`;
