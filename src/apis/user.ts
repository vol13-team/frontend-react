import {
  createUserInterface,
  updateUserInterface,
} from "@/apis/types/userInterface";

const fetchAllUsers = async () => {
  // user_id    String
  // user_name   String
  // email     String
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
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

const fetchByUserID = async (userID: string) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (user: createUserInterface) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const updateUser = async (userID: string, user: updateUserInterface) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const deleteUser = async (userID: string) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${userID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export { fetchAllUsers, fetchByUserID, createUser, updateUser, deleteUser };
