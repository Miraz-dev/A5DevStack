// import React from "react";
import RightSideHeroImage from "./../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="mx-auto flex min-h-[520px] max-w-6xl items-center px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Side: Hero Content */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[52px]">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-[520px] text-base leading-[1.6] text-slate-500 sm:text-[17px]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-gray-200 bg-white px-10 py-3 text-sm font-medium text-slate-600 transition-all duration-300 hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="flex items-center justify-center">
          <img
            src={RightSideHeroImage}
            alt="3D illustration of a development technology stack"
            className="w-full max-w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
