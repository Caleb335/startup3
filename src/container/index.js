import React from "react";
import style from "./style/index.module.css";
import Card from "../components/Card";

const endpoint = "https://dummyapi.io/explorer";

const HomeContainer = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

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
            <p className={style.name}>Jasmin andrews</p>
            <p className={style.company}>Microsoft</p>
          </div>
        </Card>
        <Card>
          <div className={style.imgContainer}>
            <img src="/img/Mask(1).png" alt="user" />
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
            <img src="/img/Mask(2).png" alt="user" />
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
      </div>
    </section>
  );
};

export default HomeContainer;
