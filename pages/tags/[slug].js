import { useRouter } from "next/router";
import ErrorPage from "next/error";
import MoreStories from "@/components/more-stories";
import Header from "@/components/header";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import Layout from "@/components/layout";
import { getAllTagsWithSlug, getTagPosts } from "@/lib/api";
import PostTitle from "@/components/post-title";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import MorePostSidebar from "@/components/more-posts-sidebar";
import PostBody from "@/components/post-body";

export default function Post({ posts, preview, slug }) {
  const router = useRouter();
  if (!router.isFallback && !posts) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Header />
      <div className="container mx-auto px-5 pt-10">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>{posts.length > 0 && <MoreStories posts={posts} />}</>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getTagPosts(params.slug, preview);

  return {
    props: {
      preview,
      posts: data.morePosts || [],
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const allTags = (await getAllTagsWithSlug()) || [];
  return {
    paths: allTags.map((tag) => `/tags/${tag.slug}`),
    fallback: true,
  };
}
