import AchieveCard from "./AchieveCard";

function Achievements() {
  return (
    <div className="bg-Silver w-full py-8">
      <div className="max-w-1400 m-auto p-8 flex justify-between items-center flex-col md:flex-row gap-y-16 gap-x-6">
        <div className="w-full">
          <h2 className="font-semibold text-1.75 flex flex-col text-D_Grey">
            Helping a local
            <strong className="font-semibold text-Primary">
              business reinvent itself
            </strong>
          </h2>
          <p className="text-[#18191F] text-sm">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className=" w-full">
          <div className="flex xl:gap-48 lg:gap-24 md:gap-14 gap-8 mb-9 flex-wrap md:flex-nowrap">
            <AchieveCard
              img="/assets/images/Icon12.png"
              img_title="Members"
              count={"2, 245, 341"}
              title="Members"
            />
            <AchieveCard
              img="/assets/images/Icon (2)1.png"
              img_title="Clubs"
              count={"46,328"}
              title="Clubs"
            />
          </div>

          <div className="flex xl:gap-48 lg:gap-24 md:gap-14 gap-8 flex-wrap md:flex-nowrap">
            <AchieveCard
              img="/assets/images/Icon (1)2.png"
              img_title="Event Bookings"
              count={"828,867"}
              title="Event Bookings"
            />
            <AchieveCard
              img="/assets/images/Icon (3)0.png"
              img_title="Payments"
              count={"1,926,436"}
              title="Payments"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Achievements;
