import React, { useState, useEffect } from "react";
import style from "./style/index.module.css";
import Card from "../components/Card";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const posts = "https://jsonplaceholder.typicode.com/posts";

const images = [
  {
    path: "img/Mask.png",
  },
];

const HomeContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = () => {
    setLoading(true);
    axios
      .get(posts)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className={style.root}>
      <h3>Testimonials</h3>
      {loading ? (
        <Loader
          type="Bars"
          color="#2f1893"
          height={30}
          width={30}
          className={style.loader}
        />
      ) : (
        <div className={style.testimonials}>
          {data.map((post, index) => {
            return (
              <Card key={index}>
                <div className={style.imgContainer}>
                  {images.map((image, index) => {
                    return <img src={image.path} alt="user" key={index} />;
                  })}
                </div>
                <div className={style.textContainer}>
                  <p className={style.details}>{post.body}</p>
                  <p className={style.name} key={index}>
                    audrey turner
                  </p>
                  <p className={style.company}>Microsoft</p>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HomeContainer;

{
  /* {data.map((usersPost, index) => {
          return (
            <Card key={index}>
              <div className={style.imgContainer}>
                <img src={usersPost.owner.picture} alt="user" />
              </div>
              <div className={style.textContainer}>
                <p className={style.details}>
                  Extremely easy to use, helped us develop our Vote for George
                  Washington micro-site extremely quickly! We will definitely
                  use it again for other projects
                </p>
                <p className={style.name}>Jasmin andrews</p>
                <p className={style.company}>Microsoft</p>
              </div>
            </Card>
          );
        })} */
}
