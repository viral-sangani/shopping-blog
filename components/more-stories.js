import PostPreview from "./post-preview";

export default function MoreStories({ posts, title }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title ? title : `Trending Right Now`}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:col-gap-4 lg:col-gap-8 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.metadata.cover_image}
            date={post.created_at}
            author={post.metadata.author}
            slug={post.slug}
            excerpt={post.metadata.excerpt}
            tags={post.metadata.tags}
          />
        ))}
      </div>
    </section>
  );
}
