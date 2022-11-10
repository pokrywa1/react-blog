import React from 'react';
import classes from './ArticleList.module.css';
import Image from 'next/image';
import Preview from '../public/img/box.png';
const ArticleList = () => {
  return (
    <section className={classes.section__container}>
      <div className={classes.article}>
        <Image
          src={Preview}
          alt=""
          width="300"
          height="300"
          className={classes.img}
        />
        <span>march 10, 2021</span>
        <h3>Memilh foto yang untuk desain website</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          reiciendis sequi magnam incidunt nobis vitae reprehenderit, ad enim
          ipsa recusandae voluptas totam unde! A ratione corporis minus delectus
          assumenda perspiciatis.dnadnaidnaid.
        </p>
      </div>
      <div className={classes.article}>
        <Image
          src={Preview}
          alt=""
          width="300"
          height="300"
          className={classes.img}
        />
        <span>march 10, 2021</span>
        <h3>Memilh foto yang untuk desain website</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          reiciendis sequi magnam incidunt nobis vitae reprehenderit, ad enim
          ipsa recusandae voluptas totam unde! A ratione corporis minus delectus
          assumenda perspiciatis.
        </p>
      </div>
      <div className={classes.article}>
        <Image
          src={Preview}
          alt=""
          width="300"
          height="300"
          className={classes.img}
        />
        <span>march 10, 2021</span>
        <h3>Memilh foto yang untuk desain website</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          reiciendis sequi magnam incidunt nobis vitae reprehenderit, ad enim
          ipsa recusandae voluptas totam unde! A ratione corporis minus delectus
          assumenda perspiciatis.
        </p>
      </div>
      <div className={classes.article}>
        <Image
          src={Preview}
          alt=""
          width="300"
          height="300"
          className={classes.img}
        />
        <span>march 10, 2021</span>
        <h3>Memilh foto yang untuk desain website</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          reiciendis sequi magnam incidunt nobis vitae reprehenderit, ad enim
          ipsa recusandae voluptas totam unde! A ratione corporis minus delectus
          assumenda perspiciatis.
        </p>
      </div>
    </section>
  );
};

export default ArticleList;
