import CoverImage from "./cover-image";
import Date from "./date";
import Tags from "./tags";

export default function MorePostSidebar({ posts }) {
  return (
    <div className="lg:w-5/12 w-full relative">
      <div className="pl-10 pt-5 w-full sticky top-0">
        <h4 className="text-3xl">More Read</h4>
        {posts &&
          posts.map((el) => (
            <div className="flex py-5">
              <div className="w-5/12">
                <CoverImage
                  slug={el.slug}
                  title={el.title}
                  url={el.metadata.cover_image.imgix_url}
                />
              </div>
              <div className="w-7/12 pl-5">
                <p className="text-xl">{el.title}</p>
                <p className="text-base">
                  <Date dateString={el.created_at} />
                </p>
                {el.metadata.tags &&
                  el.metadata.tags.map((el) => (
                    <Tags tagName={`${el.metadata.tag}`} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
