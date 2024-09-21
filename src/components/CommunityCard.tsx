import { ComuProps } from "../types/main.d";

function CommunityCard({ img, img_title, title, text, width }: ComuProps) {
  return (
    <div className="flex flex-col items-center shadow-ComuCardShadow lg:py-12 py-8 text-center mx-12 sm:mx-0 w-[70%]">
      <img src={img} alt={img_title} />
      <h3 className="text-lg lg:text-2xl font-bold text-D_Grey md:w-1/2 mt-3 w-full">{title}</h3>
      <p className={` text-Grey text-sm w-[${width}] my-3 w-[70%]`}>{text}</p>
    </div>
  );
}
export default CommunityCard;
