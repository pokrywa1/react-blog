import { GraphQLClient, gql } from 'graphql-request';
import { Fragment } from 'react';
import Image from 'next/image';
import classes from '../../styles/Slug.module.css';
import Head from 'next/head';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claikqze01wbx01tc3m3leyy5/master'
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      content {
        html
        text
      }
      coverPhoto {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  console.log(posts);
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const slug = params.slug;
  console.log(slug + 'hej');
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  console.log(post.content.html);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

const Article = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.text.slice(0, 150)} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.post__container}>
        <section className={classes.single__article}>
          <h1>{post.title}</h1>
          <span>Post published {post.datePublished}</span>
          <Image
            src={post.coverPhoto.url}
            alt=""
            width="300"
            height="300"
            className={classes.img}
          />
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></div>
          {/* <p>{post.content.html}</p> */}
        </section>
        <div className={classes.newsletter}>
          <p>
            Get access to the latest tools, freebies, product announcements, and
            much more!
          </p>
          <input
            className={classes.email}
            type="email"
            placeholder="Your email address"
          />
          <button>Subscribe</button>
          <span>Join to over 60,000 subscribers</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Article;
