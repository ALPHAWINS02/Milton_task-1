import React from "react";
import Title from "../../components/ui/buttons/Title";
import CtaBtn from "../../components/ui/buttons/CtaBtn";

import HeroImage from "../../assets/photos/image1.png";

const HeroSection = () => {
  return (
    <section className="bg-soapstone overflow-x-hidden">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col pt-8 md:pt-16 lg:pt-20 gap-8 md:gap-16">
        <div className="flex justify-center content-center flex-col text-center">
          <Title text="An other way to manage time️" />
          <div className="flex flex-col justify-center gap-4 md:gap-8 content-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mine-shaft leading-snug md:leading-tight lg:leading-tight">
              Your new favourite <br /> calendar 🗓️ app
            </p>
            <p className="text-base md:text-lg lg:text-xl font-medium text-slate leading-6 md:leading-8 lg:leading-9">
              Here you should explain how cool your app is. Remember,
              <br /> focus on the benefits for your users, not on the features.{" "}
            </p>
            <div className="flex flex-col gap-2">
              <CtaBtn text="Get started, it's free" />
              <p className="text-xs md:text-sm lg:text-base font-medium text-slate">
                Free 14 days trial, no credit card needed
              </p>
            </div>
            <div className="flex justify-center content-center">
              <div className="flex gap-3 w-full max-w-[400px] mx-auto">
                <div>
                  <iframe
                    src="https://embed.praisehive.com/cldxqquwh0005xh0kgigijx32"
                    style={{ width: "326px", height: "42px", overflow: "hidden" }}
                  ></iframe>
                </div>
                {/* Add other rating components here */}
              </div>
            </div>
          </div>
        </div>

        {/* hero photo section */}
        <div className="flex justify-center content-center">
          <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] overflow-hidden">
            <img src={HeroImage} alt="Homepage of saas" className="rounded-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
