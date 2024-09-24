import Button from "./Button";

function Unlock() {
  return (
    <div className="flex justify-center gap-2 lg:gap-20 items-center mb-12 flex-col md:flex-row">
      <img
        className="lg:ml-16 w-[250px] h-[250px] md:w-[350px] md:h-[380px]"
        src="/assets/images/Frame 35.png"
        alt="Unlock"
      />
      <div className="md:w-[50%] flex flex-col items-center md:items-start w-[80%]">
        <h2 className="font-semibold text-D_Grey lg:text-1.75 md:w-[77%] w-full text-2xl">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-Grey text-sm mt-4 mb-8 md:w-[85%] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button className="self-start" type="button" text="Learn More" />
      </div>
    </div>
  );
}
export default Unlock;
