
// eslint-disable-next-line react/prop-types
export const NewArticle = ({ title, text }) => {
  return (
    <article 
      className="h-auto border-b-2 border-DarkGrayishBlue py-7 last:border-none"
    >
      <h2 
        className=" cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold md:text-[18px]"
      >
        {title}
      </h2>

      <p 
        className="text-[18px] md:text-[15px]"
      >
        {text}
      </p>
    </article>
  );
}

