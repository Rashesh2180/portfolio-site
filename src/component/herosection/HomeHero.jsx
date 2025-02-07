import React from "react";

const HomeHero = () => {
  return (
    <section className=" xl:px-24 sm:px-10 px-7 bg-gradient-to-b from-white to-secondary 3xl:pt-14 pt-10 relative overflow-hidden">
      <h6 className="font-semibold 3xl:text-[2.62rem] lg:text-4xl text-3xl text-center tracking-wide text-black-100">
        One <span className="text-primary">eSIM</span> for All,
      </h6>
      <h1 className="text-center 3xl:text-[4.68rem] lg:text-6xl text-5xl font-bold text-black-100 3xl:mb-16 mb-8">
        Here, There and Everywhere.
      </h1>
      <div className="flex 3xl:gap-20 gap-5 sm:gap-5 items-center  max-lg:flex-wrap w-full lg:justify-around  3xl:max-w-[76.063rem] max-w-[65rem] mx-auto lg:mb-10 mb-7 3xl:mb-[4.37rem]">
        <div className="flex gap-3 lg:max-w-[13.31rem]">
          <img
            src="/assets/svg/small-earth.svg"
            alt=""
            className="lg:h-[3.25rem] lg:w-[3.25rem] w-9 h-9"
          />
          <span className="text-black-100 text-xl font-semibold lg:leading-[1.87rem]">
            190 Countries <br className="max-lg:hidden" /> 8 Regions
          </span>
        </div>
        <div className="w-px 3xl:h-[5.25rem] h-9 bg-black  max-lg:hidden opacity-20"></div>
        <div className="flex gap-3">
          <img
            src="/assets/svg/small-sim.svg"
            alt=""
            className="lg:h-[3.25rem] lg:w-[3.25rem] w-9 h-9"
          />
          <span className="text-black-100 text-xl font-semibold lg:leading-7 ">
            Enjoy the convenience of one eSIM for all your destinations— <br />{" "}
            top up and extend data plans for any country you visit, all on a
            single eSIM. to
          </span>
        </div>
      </div>

      {/* searchbar start */}
      <div className="flex justify-between items-center  max-w-[47.25rem] w-full mx-auto pl-10 gap-2 border rounded-full bg-white border-border-color pr-2 py-2">
        <div className="flex gap-1 items-center w-full">
          <img src="/assets/svg/small-search.svg" className="h-5 w-5" alt="" />
          <input
            type="text"
            className="bg-transparent border-none  outline-none w-full flex-1"
            placeholder="Where do you need internet?"
          />
        </div>
        <button className="3xl:w-[3.75rem] 3xl:h-[3.75rem] h-12 w-12 bg-primary rounded-full justify-center flex shrink-0 items-center">
          <img
            src="/assets/svg/wifi-small.svg"
            alt=""
            claasName="3xl:h-6 3xl:w-[1.87rem] w-6 h-5"
          />
        </button>
      </div>

      {/* searchbar end */}
      <div className="w-full  sm:pt-44 pt-[6.93rem] sm:pb-[16.43rem] pb-[9.25rem]">
        <div className="flex sm:gap-5 gap-2.5 justify-center">
          {[
            {
              id: 1,
              img: "/assets/images/hero/card_1.png",
              country_name: "France",
            },
            {
              id: 2,
              img: "/assets/images/hero/card_2.png",
              country_name: "Italy",
            },
            {
              id: 3,
              img: "/assets/images/hero/card_3.png",
              country_name: "USA",
            },
            {
              id: 4,
              img: "/assets/images/hero/card_4.png",
              country_name: "Turkey",
            },
            {
              id: 5,
              img: "/assets/images/hero/card_4.png",
              country_name: "Dubia",
            },
          ].map((ele, ind) => (
            <div
              key={ind}
              className="z-[9] min-w-[10rem] sm:min-w-[15rem] max-w-[18.56rem] 3xl:h-48 sm:h-40 h-[6.56rem] relative mx-auto rounded-2xl overflow-hidden"
            >
              <img src={ele.img} alt="" className="h-full w-full" />
              <div className=" absolute sm:left-10 left-6 top-1/2  -translate-y-1/2">
                <p className="sm:text-lg text-[0.5rem] text-white">eSIM for </p>
                <h6 className="sm:text-[1.813rem] text-base font-bold text-white">
                  {ele.country_name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-xl max-sm:max-w-[20.62rem] w-full max-sm:min-w-[20.62rem] absolute left-1/2 -translate-x-1/2 bottom-0">
        <div className="relative h-full w-full ">
          <img
            src="/assets/images/hero/hero-phone.png"
            alt=""
            className="h-full w-full"
          />
          <div className=" absolute left-1/2 -translate-x-1/2 lg:bottom-14 bottom-7">
          <div className="lg:mb-9 mb-5 flex flex-col sm:gap-3 gap-1.5 items-center">
            <img src="/assets/svg/green-wifi.svg" className="sm:h-[2.37rem] sm:w-12 h-7 w-5" alt="" />
            <p className="text-center capitalize sm:text-[1.31rem] text-xs tracking-widest font-bold">Connected</p>

          </div>
            <div className="flex gap-5 items-center">
              <span className="lg:text-xl sm:text-sm text-[0.6rem] tracking-widest text-gray-50">
                Downlaod by
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  className="3xl:h-14 3xl:w-14 sm:h-10 sm:w-10 h-8 w-8 bg-black rounded-full flex justify-center items-center"
                >
                  <img
                    src="/assets/svg/small-apple-logo.svg"
                    className="3xl:w-[1.37rem] 3xl:h-[1.62rem] w-3 h-3.5  sm:h-4 sm:w-4"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="3xl:h-14 3xl:w-14 sm:h-10 sm:w-10 h-8 w-8 bg-gray-25 rounded-full flex justify-center items-center"
                >
                  <img
                    src="/assets/svg/playstore-small.svg"
                    className="3xl:w-[1.37rem] 3xl:h-[1.62rem] w-3 h-3.5  sm:h-4 sm:w-4"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
