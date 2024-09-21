type NewsCard = {
  img: string;
  img_title: string;
  title: string;
};

function NewsCard({ img, img_title, title }: NewsCard) {
  return (
    <div className="lg:w-[21%] md:w-[30%] sm:w-[50%] w-[75%] lg:mx-6">
      <img className="w-full" src={img} alt={img_title} />
      <div className="bg-Silver shadow-NewCardShadow m-auto p-7 w-[85%] relative bottom-[73px] z-10 rounded-md">
        <h4 className="font-semibold text-Grey text-base">{title}</h4>
        <h5 className="font-semibold text-base text-Primary flex gap-2 items-center justify-center mt-4 +++++++">
          Readmore
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0755 11.8659L14.3676 9.57384C14.6394 9.302 14.6394 8.86128 14.3676 8.58945L12.0755 6.29736M14.1637 9.08164L4.4187 9.08164"
              stroke="#4CAF4F"
              stroke-width="1.0441"
              stroke-linecap="round"
            />
          </svg>
        </h5>
      </div>
    </div>
  );
}
export default NewsCard;
