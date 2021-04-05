interface Props {
  name: string;
  title: string;
  comment: string;
}

const CommentItem = ({ comment, name, title }: Props) => {
  return (
    <div className="flex flex-col px-4 border border-skin-muted max-w-lg m-5 bg-skin-card rounded-md shadow-md py-6 justify-center items-center text-center ">
      <div className="flex-shrink-0">
        <div className="inline-block relative">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
              src="https://picsum.photos/id/646/200/200"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <p className="flex ">
        <span className="text-skin-muted font-bold">{name}</span>
      </p>
      <div className="flex items-center mt-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className="flex items-center mt-4 text-skin-muted"></div>
      <div className="mt-3">
        <span className="font-bold">{title}</span>
        <p className="mt-1">{comment}</p>
      </div>
    </div>
  );
};

export default CommentItem;

const Star = () => {
  return (
    <svg
      className="w-4 h-4 fill-current text-skin-primary"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );
};
