import React from "react";
import BlogItem from "~/template/BlogItem";

interface Props {
  data: any;
  title: string;
  subtitle: string;
}

const EncyclopediaCard = ({ data, subtitle, title }: Props) => {
  return (
    <div className="container pt-8  mx-auto">
      <div className=" mb-2 px-1  py-3 sm:px-2 rounded-2xl sm:mb-1 sticky top-2 overflow-hidden  backdrop_custom bg-opacity-30 bg-skin-card">
        <h2 className="text-lg   font-bold sm:text-xl md:text-2xl px-2 text-skin-base">
          {title}
        </h2>
        <h3 className="text-xs px-2 font-bold sm:text-sm md:text-base text-skin-mute">
          {subtitle}
        </h3>
      </div>
      <div className="flex flex-wrap ">
        {data.map(({ postId, image, jdate, title, short, type }) => {
          return (
            <BlogItem
              type={type}
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

export default EncyclopediaCard;
