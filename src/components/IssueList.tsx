import { Text, Button, Center, Box } from "@yamada-ui/react";
import styled from "styled-components";
import { IssueCard } from "./IssueCard";
import { useState } from "react";
import { type Issue } from "../interfaces/Interfaces";
export const IssueList: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([
    {
      id: 1,
      title: "テスト",
      body: "テストです",
      correctRate: 80,
      created_at: 0,
      imgUrl: "",
    },
    {
      id: 2,
      title: "テスト",
      body: "テストです",
      correctRate: 80,
      created_at: 0,
      imgUrl: "",
    },
    {
      id: 3,
      title: "テスト",
      body: "テストです",
      correctRate: 80,
      created_at: 0,
      imgUrl: "",
    },
  ]);
  return (
    <>
      <Outer>
        <Head>
          <Text>問題一覧</Text>
          <Button>
            <Text>投稿する</Text>
          </Button>
        </Head>
        {issues.map((issue) => (
          <IssueDiv key={issue.id}>
            <IssueCard
              id={issue.id}
              title={issue.title}
              body={issue.body}
              correctRate={issue.correctRate}
              created_at={issue.created_at}
              imgUrl={issue.imgUrl}
            />
          </IssueDiv>
        ))}
      </Outer>
    </>
  );
};

const Outer = styled.div`
  border: 1px solid #ddd;
  background: gray;
  padding: 16px;
  width: 100%;
  `;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  `;

const IssueDiv = styled.div`
  display: flex;
  justify-content: column;
  margin: 20px auto;`;
