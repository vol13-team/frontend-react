interface createUserInterface {
  user_id: string;
  user_name: string;
  email: string;
}

interface updateUserInterface {
  user_name: string;
  email: string;
}

export type { createUserInterface, updateUserInterface };
