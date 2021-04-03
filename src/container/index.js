import React from "react";
import style from "./style/index.module.css";
import Card from "../components/Card";
import axios from "axios";

const endpoint = "https://dummyapi.io/data/api/posts";
const appId = "60673cc5f7282deb7741025a";

const HomeContainer = () => {
  const [data, setData] = React.useState({
    posts: [],
    loading: false,
  });

  React.useEffect(async () => {
    const posts = await axios.get(endpoint, {
      headers: {
        "app-id": appId,
      },
    });

    setData(posts.data);
    console.log(posts);
  });

  return (
    <section className={style.root}>
      <h3>Testimonials</h3>
      <div className={style.testimonials}>
        <Card>
          <div className={style.imgContainer}>
            <img src="/img/Mask.png" alt="user" />
          </div>
          <div className={style.textContainer}>
            <p className={style.details}>
              Extremely easy to use, helped us develop our Vote for George
              Washington micro-site extremely quickly! We will definitely use it
              again for other projects
            </p>
            <p className={style.name}>Jasmin andrews</p>
            <p className={style.company}>Microsoft</p>
          </div>
        </Card>
        <Card>
          <div className={style.imgContainer}>
            <img src="/img/Userpic.png" alt="user" />
          </div>
          <div className={style.textContainer}>
            <p className={style.details}>
              Extremely easy to use, helped us develop our Vote for George
              Washington micro-site extremely quickly! We will definitely use it
              again for other projects
            </p>
            <p className={style.name}>Austin Campbell</p>
            <p className={style.company}>Dropbox</p>
          </div>
        </Card>
        <Card>
          <div className={style.imgContainer}>
            <img src="/img/Mask (1).png" alt="user" />
          </div>
          <div className={style.textContainer}>
            <p className={style.details}>
              Extremely easy to use, helped us develop our Vote for George
              Washington micro-site extremely quickly! We will definitely use it
              again for other projects
            </p>
            <p className={style.name}>Jasmin andrews</p>
            <p className={style.company}>Microsoft</p>
          </div>
        </Card>
        <Card>
          <div className={style.imgContainer}>
            <img src="/img/Mask (2).png" alt="user" />
          </div>
          <div className={style.textContainer}>
            <p className={style.details}>
              Extremely easy to use, helped us develop our Vote for George
              Washington micro-site extremely quickly! We will definitely use it
              again for other projects
            </p>
            <p className={style.name}>Aubrey turner</p>
            <p className={style.company}>Designmodo</p>
          </div>
        </Card>
      </div>
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
