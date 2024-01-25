//pickup記事取得
const fetchPickUpQiitaArticle = async (page: number) => {
  //page = 取得数
  try {
    const res = await fetch(
      // `${process.env.NEXT_PUBLIC_API_URL}/qiita-api/${page}`
      `https://qiita.com/api/v2/items?pickup=true&per_page=${page}`
    );
    const jsonData = await res.json();
    const data = jsonData.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        url: item.url,
        user_id: item.user.id,
        icon_url: item.user.profile_image_url,
      };
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Qiita記事検索
const searchByQiitaArticle = async (searchQuery: string, page: number) => {
  //page = 取得数
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/qiita-api/search/${searchQuery}/${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchPickUpQiitaArticle, searchByQiitaArticle };
