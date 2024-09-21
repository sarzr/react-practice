import NewsCard from "./NewsCard";

function News() {
  return (
    <div className="mt-14 text-center flex flex-col justify-center items-center">
      <h2 className="text-D_Grey font-semibold md:text-1.75 sm:text-2xl text-xl">
        Caring is the new marketing
      </h2>
      <p className="text-D_Grey text-sm my-3 md:w-[42%] w-[70%]">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="flex gap-4 xl:gap-16 justify-center mt-6 flex-col md:flex-row items-center md:items-start">
        <NewsCard
          img="/assets/images/image 18.png"
          img_title="New"
          title="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <NewsCard
          img="/assets/images/image 19.png"
          img_title="New"
          title="What are your safeguarding responsibilities and how can you manage them?"
        />
        <NewsCard
          img="/assets/images/image 20.png"
          img_title="New"
          title="Revamping the Membership Model with Triathlon Australia"
        />
      </div>
    </div>
  );
}
export default News;
