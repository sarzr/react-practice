import CommunityCard from "./CommunityCard";

function Community() {
  return (
    <div>
      <div className="flex flex-col items-center text-center w-full mt-3">
        <h2 className="font-semibold text-D_Grey md:text-1.75 w-[60%] md:w-[54%] lg:w-[36%] text-2xl">
          Manage your entire community in a single system
        </h2>
        <p className="text-Grey text-sm mt-2">Who is Nextcent suitable for?</p>
      </div>
      <div className="flex justify-center text-center my-10 xl:gap-28 lg:gap-10 gap-4 flex-col items-center md:flex-row mx-2">
        <CommunityCard
          img="/assets/images/Icon..png"
          img_title="Membership"
          title="Membership Organisations"
          text="Our membership management software provides full automation of membership renewals and payments"
          width="66%"
        />

        <CommunityCard
          img="/assets/images/Icon (1).png"
          img_title="National Associations"
          title="National Associations"
          text="Our membership management software provides full automation of membership renewals and payments"
          width="65%"
        />

        <CommunityCard
          img="/assets/images/Icon (2).png"
          img_title="Groups"
          title="Clubs And Groups"
          text="Our membership management software provides full automation of membership renewals and payments"
          width="66%"
        />
      </div>
    </div>
  );
}
export default Community;
