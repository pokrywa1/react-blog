import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import LatestArticle from '../components/LatestArticle';
import styles from '../styles/Home.module.css';
import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claikqze01wbx01tc3m3leyy5/master'
);

const QUERY = gql`
  query {
    posts {
      id
      title
      datePublished
      slug
      content {
        text
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}
export default function Home({ posts }) {
  const [articles, setArticles] = useState(posts);
  const [latestArticle, setLatestArticle] = useState(() => {
    return articles.reduce((a, b) =>
      a.datePublished > b.datePublished ? a : b
    );
  });

  return (
    <Fragment>
      <LatestArticle post={latestArticle}></LatestArticle>
      <ArticleList posts={articles}></ArticleList>
    </Fragment>
  );
}
