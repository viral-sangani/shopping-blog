import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Tags from "./tags";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.imgix_url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 flex">
        <Date dateString={date} />
        <div className="px-2">
          {tags && tags.map((el) => <Tags tagName={`${el.metadata.tag}`} />)}
        </div>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
