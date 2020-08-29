import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const News = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth()).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  const apiKey = "f0394cf0d8454be988b7348eacf64176";
  const apiUrl = `http://newsapi.org/v2/everything?q=bitcoin&from=${today}&sortBy=publishedAt&apiKey=${apiKey}`;
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, []);
  console.log(news);
  return (
    <>
      {news.map((news, idx) => (
        <div key={idx} className="m-3 text-center" style={{ width: "400px" }}>
          <div className="text-center">
            <img src={news.urlToImage} alt="news" style={{ width: "200px" }} />
          </div>
          <h4 className="p-3">
            <a href={news.url} target="_blank">
              {news.title}
            </a>
          </h4>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
      ))}
    </>
  );
};

export default News;
