import Button from "./Button";

function HeroSection() {
  return (
    <div className="w-full bg-Silver">
      <div className="max-w-1400 m-auto p-8 flex items-center justify-between flex-col gap-12 md:flex-row">
        <div>
          <h1 className="font-semibold text-3xl md:text-[2.7rem] text-D_Grey leading-[53px] flex flex-col">
            Lessons and insights
            <strong className="font-semibold text-[#4CAF4F]">
              from 8 years
            </strong>
          </h1>
          <p className="text-Grey text-sm md:text-small mt-4 mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button type="button" text="Register" />
        </div>
        <div className="mr-24">
          <img
            src="/assets/images/Illustration.png"
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
