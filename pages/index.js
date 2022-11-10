import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import ArticleList from '../components/ArticleList';
import LatestArticle from '../components/LatestArticle';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Fragment>
      <LatestArticle></LatestArticle>
      <ArticleList></ArticleList>
    </Fragment>
  );
}
