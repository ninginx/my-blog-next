import Head from "next/head";
import { VFC } from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts, Items } from "../lib/api";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index: VFC<Props> = ({ allPosts }: Props) => {
  const posts = allPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>喜怒哀楽</title>
        </Head>
        <Container>
          <Intro />
          {posts.length > 0 && <MoreStories posts={posts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

type StaticProps = {
  props: {
    allPosts: Items[];
  };
};

export const getStaticProps = (): StaticProps => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
