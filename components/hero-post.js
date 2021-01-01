import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  console.log("coverImage.imgix_url", coverImage.url);
  return (
    <>
      <div class="bg-white overflow-hidden w-full px-4">
        <img
          src={coverImage.imgix_url}
          alt="People"
          class="w-full object-cover h-32 sm:h-48 md:h-64"
        />
        <div class="p-4 md:p-6">
          <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">
            New
          </p>
          <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            {title}
          </h3>
          <div class="text-sm flex items-center">
            <p class="leading-none">
              <Date dateString={date} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
