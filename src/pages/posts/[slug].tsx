import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { VFC } from "react";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";

import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";

type Props = {
  post: PostType;
  // TODO: どこかでいつか使うと思うので
  // eslint-disable-next-line react/no-unused-prop-types
  morePosts: PostType[];
  preview?: boolean;
};

const Post: VFC<Props> = ({ post, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

Post.defaultProps = {
  preview: undefined,
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

type StaticProps = {
  props: {
    post: {
      content: string;
    };
  };
};

export const getStaticProps = async ({
  params,
}: Params): Promise<StaticProps> => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

type StaticPaths = {
  paths: {
    params: {
      slug: string;
    };
  }[];
  fallback: boolean;
};

export const getStaticPaths = (): StaticPaths => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};
