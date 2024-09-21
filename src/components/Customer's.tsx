function Customer() {
  return (
    <div className="bg-Silver w-full mt-14">
      <div className="max-w-1400 m-auto p-7 flex items-center lg:justify-evenly justify-between flex-col md:flex-row gap-y-8">
        <img className="lg:w-[350px] md:w-[280px] w-[250px]" src="/assets/images/image 9.png" alt="pic" />
        <div className="md:w-[58%] w-full">
          <p className="text-Grey text-sm font-medium leading-5 mb-5">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-Primary font-semibold text-lg mb-2">Tim Smith</p>
          <p className="text-L_Grey text-sm">
            British Dragon Boat Racing Association
          </p>
          <div className="flex gap-8 items-center my-8 flex-wrap">
            <img src="/assets/images/Logo.1.png" alt="logo" />
            <img src="/assets/images/Logo (1).png" alt="logo" />
            <img src="/assets/images/Logo (6).png" alt="logo" />
            <img src="/assets/images/Logo (3).png" alt="logo" />
            <img src="/assets/images/Logo (4).png" alt="logo" />
            <img src="/assets/images/Logo (5).png" alt="logo" />
            <strong className="font-semibold text-Primary text-base md:text-lg flex gap-3 items-center">
              Meet all customers
              <svg
              className="w-[18px] h-[17px]"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.7139 6.40938L11.006 4.11729C11.2778 3.84546 11.2778 3.40473 11.006 3.1329L8.7139 0.84082M10.8021 3.6251L1.05713 3.6251"
                  stroke="#4CAF4F"
                  stroke-width="1.0441"
                  stroke-linecap="round"
                />
              </svg>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Customer;
