import {
  createAnswerInterface,
  updateAnswerInterface,
} from "@/apis/types/answerInterface";

const fetchAllAnswers = async () => {
  // answer_id
  // decision
  // issue_id
  // answer_user_id
  // select_option_id
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/answers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const fetchByAnswerID = async (answerID: string) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/answers/${answerID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
};

const fetchByIssueID = async (issueID: string) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/answers/${issueID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
};

const createAnswer = async (
  answer: createAnswerInterface,
  issue_id: string
) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/answers/${issue_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answer),
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const updateAnswer = async (
  answerID: string,
  answer: updateAnswerInterface
) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/answers/${answerID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answer),
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
export {
  fetchAllAnswers,
  fetchByAnswerID,
  createAnswer,
  updateAnswer,
  fetchByIssueID,
};
