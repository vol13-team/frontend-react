import styled from "styled-components";

interface Props {
  questionTitle: string;
  questionText: string;
  questionRate: string;
}

const QuestionCard = (props: Props) => {
  const { questionTitle, questionText, questionRate } = props;
  return (
    <SQuestionCard>
      <SQuestionCardTitle>{questionTitle}</SQuestionCardTitle>
      <SQuestionCardText>{questionText}</SQuestionCardText>
      <SQuestionCardRate>{`正答率：${questionRate}%`}</SQuestionCardRate>
    </SQuestionCard>
  );
};

const SQuestionCard = styled.div`
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  &:last-child {
    margin-bottom: 0;
  }
`;

const SQuestionCardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: start;
  color: #333;
`;

const SQuestionCardText = styled.p`
  margin: 8px 0;
  padding: 0;
  text-align: start;
  color: #333;
`;

const SQuestionCardRate = styled.span`
  margin: 0;
  padding: 4px;
  text-align: start;
  color: #333;
  background-color: #eee;
  border-radius: 4px;
`;

export default QuestionCard;
