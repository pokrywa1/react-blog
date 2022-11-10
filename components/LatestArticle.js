import React, { Fragment } from 'react';
import classes from './LatestArticle.module.css';
import Image from 'next/image';
import Preview from '../public/img/box.png';
const LatestArticle = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.main__h1}>The Blog</h1>
        <div className={classes.preview__container}>
          <Image
            src={Preview}
            alt=""
            width="300"
            height="300"
            className={classes.img}
          />
          <div className={classes.main__description}>
            <span>March 05, 2021</span>
            <h2>Tentang Creativity Block Pada UI Designer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              doloribus non at, rem cumque quisquam cupiditate nobis neque
              tempore ad dolores, ipsam odio itaque corrupti corporis debitis
              soluta, nihil maxime nemo! Officia voluptatum dolorem possimus ad,
              numquam accusantium saepe explicabo.
            </p>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default LatestArticle;
