import {
  createArticleInterface,
  updateArticleInterface,
} from "./types/articleInterface";

const fetchArticleAll = async () => {
  // article_id
  // article_title
  // article_link
  // article_user_name
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/article`, {
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

const fetchByArticleID = async (articleID: string) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/article/${articleID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

const createArticle = async (article: createArticleInterface) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/article`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const updateArticle = async (
  articleID: string,
  article: updateArticleInterface
) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/article/${articleID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const deleteArticle = async (articleID: string) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/article/${articleID}`,
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
export {
  fetchArticleAll,
  fetchByArticleID,
  createArticle,
  updateArticle,
  deleteArticle,
};
