import React from "react";
import { useState, useEffect } from "react";
import news1 from "../assets/img/news1.png";
import news2 from "../assets/img/news2.png";
import news3 from "../assets/img/news3.png";
import kyoainews1 from "../assets/img/kyoainews1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getNewsList } from "../Api";

const SlidesNew = () => {
  const Newscard = [
    {
      imageSrc: kyoainews1,
      title: "歯磨きのメリット",
      date: "2023-02-01",
      description:
        "歯と歯ぐきの健康は非常に重要です。なぜなら、歯と歯茎が損傷し、手入れを怠",
    },
    {
      imageSrc: news3,
      title: "COVID アラート",
      date: "2023-02-01",
      description:
        " COVID-19 に感染する可能性がより高い人々のグループがいくつかあります。",
    },
    {
      imageSrc: news2,
      title: " 心臓発作 ！！危険",
      date: "2023-02-01",
      description:
        " この状態は、危険で緊急の医学的症状です。突然の心停止は、多くの場合、。",
    },
    {
      imageSrc: news2,
      title: " 心臓発作 ！！危険",
      date: "2023-02-01",
      description:
        " この状態は、危険で緊急の医学的症状です。突然の心停止は、多くの場合、",
    },
    {
      imageSrc: news2,
      title: " 心臓発作 ！！危険",
      date: "2023-02-01",
      description:
        " この状態は、危険で緊急の医学的症状です。突然の心停止は、多くの場合、",
    },
    {
      imageSrc: news2,
      title: " 心臓発作 ！！危険",
      date: "2023-02-01",
      description:
        " この状態は、危険で緊急の医学的症状です。突然の心停止は、多くの場合、",
    },
    {
      imageSrc: news2,
      title: " 心臓発作 ！！危険",
      date: "2023-02-01",
      description:
        " この状態は、危険で緊急の医学的症状です。突然の心停止は、多くの場合、",
    },
  ];
  // const images = [news1, news2, news3];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   getNewsList().then((articles) => {
  //     setNews(articles);
  //   });
  // }, []);

  return (
    <div className="">
      {/* <Carousel responsive={responsive}>
        {news.slice(0, 5).map((newskyoai, index) => (
          <div
            className="mx-4 h-96 bg-white rounded-xl rounded-b-none"
            key={index}
          >
            <div className="grid grid-cols-1 bg-white rounded-xl">
              <img
                src={newskyoai.urlToImg}
                className="rounded-xl h-52 w-full object-cover rounded-b-none"
              />
              <div className="p-4">
                <h2 className="text-sm py-2 text-gray-300 font-bold">
                  {newskyoai.publishedAt}
                </h2>
                <h1 className="font-semibold text-lg pb-2">
                  {newskyoai.title}
                </h1>
                <p className="text-xs">{newskyoai.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel> */}
      <Carousel responsive={responsive}>
        {Newscard.slice(0, 5).map((newskyoai, index) => (
          <div
            className="mx-4 h-96 bg-white rounded-xl rounded-b-none"
            key={index}
          >
            <div className="grid grid-cols-1 bg-white rounded-xl">
              <img
                src={newskyoai.imageSrc}
                className="rounded-xl h-52 w-full object-cover rounded-b-none"
              />
              <div className="p-4">
                <h2 className="text-sm py-2 text-gray-300 font-bold">
                  {newskyoai.date}
                </h2>
                <h1 className="font-semibold text-lg pb-2">
                  {newskyoai.title}
                </h1>
                <p className="text-xs">{newskyoai.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlidesNew;
