import React from 'react';
import classes from './ArticleList.module.css';
import Image from 'next/image';
import Preview from '../public/img/box.png';
import Link from 'next/link';
const ArticleList = ({ posts }) => {
  return (
    <section className={classes.section__container}>
      {posts.map(post => {
        const text = post.content.text.slice(0, 150) + '...';
        const src = post.coverPhoto.url;
        return (
          <Link href={'/article/' + post.slug}>
            <div className={classes.article} key={post.id}>
              <Image
                src={src}
                alt=""
                width="300"
                height="300"
                className={classes.img}
              />
              <span>{post.datePublished}</span>
              <h3>{post.title}</h3>
              <p>{text}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );

  // return (
  //   <section className={classes.section__container}>
  //     <div className={classes.article}>
  //       <Image
  //         src={Preview}
  //         alt=""
  //         width="300"
  //         height="300"
  //         className={classes.img}
  //       />
  //       <span>march 10, 2021</span>
  //       <h3>Memilh foto yang untuk desain website</h3>
  //       <p>
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
  //         reiciendis sequi magnam incidunt nobis vitae reprehenderit, ad enim
  //         ipsa recusandae voluptas totam unde! A ratione corporis minus delectus
  //         assumenda perspiciatis.dnadnaidnaid.
  //       </p>
  //     </div>
  //   </section>
  // );
};

export default ArticleList;
