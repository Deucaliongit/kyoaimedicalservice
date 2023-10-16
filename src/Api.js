import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getNewsList = async () => {
  const news = await axios.get(
    `${baseUrl}/v2/top-headlines?country=id&category=health&apiKey=${apiKey}`
  );

  console.log(news);

  return news.data.articles;
};
