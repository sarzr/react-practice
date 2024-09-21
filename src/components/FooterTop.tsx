import Button from "./Button";

function FooterTop() {
  return (
    <div className="bg-Silver w-full p-8">
      <div className="text-center xl:w-[40%] md:w-[55%] m-auto sm:w-[60%] w-[85%]">
        <h4 className="lg:text-5xl md:text-4xl text-3xl text-black font-semibold my-4 md:leading-[53px] leading-10">
          Pellentesque suscipit fringilla libero eu.
        </h4>
        <Button
          className="m-auto mt-8"
          type="button"
          text="Get a Demo"
          showSvg={true}
        />
      </div>
    </div>
  );
}
export default FooterTop;
