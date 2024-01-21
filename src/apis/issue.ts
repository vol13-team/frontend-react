import {
  createIssueInterface,
  updateIssueInterface,
} from "@/apis/types/issueInterface";

//DB内全てを取得
const fetchAllIssue = async () => {
  // issue_id          String
  // issue_name        String
  // issue_detail      String
  // visibility       Boolean
  // option1          String
  // option2          String
  // option3          String
  // option4          String
  // correct_option    String
  // post_user_id       String
  // explanation      String
  // created_at       DateTime
  // update_at        DateTime
  // article_id        String
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/issue`, {
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
//DB内の特定のissueを取得
const fetchByIssueID = async (issueID: string) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/issue/${issueID}`,
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

//issue更新
const updateIssue = async (issueID: string, issue: updateIssueInterface) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/issue/${issueID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(issue),
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
//記事に紐ずくissueを作成
const createIssue = async (articleID: string, issue: createIssueInterface) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/issue/${articleID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(issue),
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

//issue削除
const deleteIssue = async (issueID: string) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/issue/${issueID}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export { fetchAllIssue, fetchByIssueID, updateIssue, createIssue, deleteIssue };
