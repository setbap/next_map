import React from "react";
import BlogItem from "~/template/BlogItem";
import { pagesLinks } from "~/utils/links";

interface Props {
  data: any;
  title: string;
  subtitle: string;
}

const TutorialCard = ({ data, subtitle, title }: Props) => {
  return (
    <div className="container sm:pt-8 pt-2 mx-auto">
      <div className=" mb-2 px-1  py-3 sm:px-2 rounded-2xl sm:mb-1 sticky top-2 overflow-hidden  backdrop_custom bg-opacity-40 bg-skin-card">
        <h2 className="text-lg   font-bold sm:text-xl md:text-2xl px-2 text-skin-base">
          {title}
        </h2>
        <h3 className="text-xs px-2 sm:text-sm md:text-base text-skin-base">
          {subtitle}
        </h3>
      </div>
      <div className="flex flex-wrap ">
        {data.map(({ postId, image, jdate, title, short }) => {
          return (
            <BlogItem
              href={pagesLinks.tutorialItem({ slug: postId })}
              type={""}
              image={image}
              key={postId}
              short={short}
              date={jdate}
              id={postId}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TutorialCard;
