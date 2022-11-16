import React, { Fragment } from 'react';
import classes from './LatestArticle.module.css';
import Image from 'next/image';
import Preview from '../public/img/box.png';
import Link from 'next/link';
const LatestArticle = ({ post }) => {
  console.log(post.coverPhoto.url);
  const splitedText = post.content.text.slice(0, 300) + '...';
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.main__h1}>
          The <span>Blog</span>
        </h1>
        <div className={classes.preview__container}>
          <Link href={'/article/' + post.slug}>
            <Image
              src={post.coverPhoto.url}
              alt=""
              width="300"
              height="300"
              className={classes.img}
            />
          </Link>
          <div className={classes.main__description}>
            <span>{post.datePublished}</span>
            <h2>{post.title}</h2>
            <p>{splitedText}</p>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default LatestArticle;
