import { AchieveCardProps } from "../types/main.d";

function AchieveCard({ img, img_title, count, title }: AchieveCardProps) {
  return (
    <div className="flex gap-3 items-center">
      <div>
        <img src={img} alt={img_title} />
      </div>
      <div>
        <h3 className="text-D_Grey font-bold text-xl">{count}</h3>
        <p className="text-Grey text-sm">{title}</p>
      </div>
    </div>
  );
}
export default AchieveCard;
