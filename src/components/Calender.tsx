import Button from "./Button";

function Calender() {
  return (
    <div className="mt-20 flex justify-center lg:gap-28 md:gap-14 gap-10 items-center flex-col md:flex-row">
      <img
        className="w-[250px] h-[250px] md:w-[316px] md:h-[330px]"
        src="/assets/images/pana.png"
        alt="Pic"
      />
      <div className="lg:w-[40%] w-[80%] flex flex-col items-center md:items-start">
        <h2 className="text-D_Grey font-semibold lg:text-1.75 text-2xl md:w-[75%] w-full">
          How to design your site footer like we did
        </h2>
        <p className="text-Grey text-sm mt-4 mb-8 md:w-[82%] w-full">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button className="self-start" type="button" text="Learn More" />
      </div>
    </div>
  );
}
export default Calender;
