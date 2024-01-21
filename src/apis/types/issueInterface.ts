interface createIssueInterface {
  issue_name: string; //問題名
  issueDetail: string; //問題文
  visibility: boolean; //公開設定
  explanation: string; //解説
  //選択肢
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: string; //正解正解選択肢
  post_user_id: string; //投稿ユーザーID
}

interface updateIssueInterface {
  issue_name: string; //問題名
  issueDetail: string; //問題文
  visibility: boolean; //公開設定
  explanation: string; //解説
  //選択肢
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_option: string; //正解正解選択肢
  post_user_id: string; //投稿ユーザーID
}

export type { createIssueInterface, updateIssueInterface };
