import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import Header from "@/components/header";
import PostPreview from "@/components/post-preview";

export default function Index({ allPosts }) {
  const heroPost = [allPosts[0], allPosts[1]];
  const morePosts = allPosts.slice(2);
  return (
    <>
      <Layout>
        <Head>
          <title>GeekyPheonix Blogs</title>
        </Head>
        <Header />
        <Container>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-8 lg:col-gap-8 mb-8">
              {heroPost.map((post) => {
                return (
                  <PostPreview
                    key={post.slug}
                    title={post.title}
                    coverImage={post.metadata.cover_image}
                    date={post.created_at}
                    slug={post.slug}
                    tags={post.metadata.tags}
                  />
                );
              })}
            </div>
          </section>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
