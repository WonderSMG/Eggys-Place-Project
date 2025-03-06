import React from "react";

const Hero = () => {
  return (
    <>
      <main className="bg-[url(./assets/Hero-Bg-Img.svg)] bg-no-repeat bg-cover bg-center md:w-full md:h-[600px] content-center">
        <section className="hero-content text-center items-center mx-auto">
          <div className="h-[322px] gap-[84px] font-medium">
            <div className="my-[35%] md:my-0 tracking-wide">
              <h1 className="md:h-[95px] md:text-[56px] ">
                The <span className="font-Rammetto text-[#B67B0F]">ZING</span>{" "}
                in every bite
              </h1>
              <p className="md:h-[74px] md:w-[400px] mx-auto">
                Savor the flavor! Explore our delicious menu and order now for a
                taste sensation!
              </p>
            </div>
            <div className="h-[56px] flex justify-center gap-[12px]">
              <button className="w-[219px] bg-[#B67B0F] rounded-[32px] md:block hidden">
                Order Now!
              </button>
              <button className="w-[142px] bg-[#FBFBFB] rounded-[32px] text-[#100101] md:block hidden">
                View Menu
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
