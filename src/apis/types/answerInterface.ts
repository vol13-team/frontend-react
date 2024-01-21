interface createAnswerInterface {
  decision: boolean;
  select_option: string;
  answer_user_id: string;
}

interface updateAnswerInterface {
  decision: boolean;
  select_option: string;
  answer_user_id: string;
}

export type { createAnswerInterface, updateAnswerInterface };
