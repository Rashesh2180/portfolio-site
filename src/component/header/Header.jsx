import React from "react";

const Header = () => {
  return (
    <header className=" pt-6 xl:px-24 sm:px-10 sm-2:px-7 px-3">
      <div className="flex justify-between gap-3 items-center max-w-[101.875rem]  mx-auto">
        <a href="/">
          <img
            src="/assets/svg/logo.svg"
            alt="header_logo"
            className="w-[14.375rem] h-[4.37rem] object-contain"
          />
        </a>
        <div className="flex items-center xl-3:gap-10 gap-5 w-full justify-end ">
          <ul className="lg:flex hidden gap-1 items-center justify-between 3xl:max-w-[40.43rem] xl:max-w-lg max-w-sm w-full">
            {["Destinations", "How it works", "Compatible devices"].map(
              (ele, ind) => (
                <li
                  className="xl-3:text-[1.32rem] text-lg text-black-100 hover:text-primary"
                  key={ind}
                >
                  <a href="/"> {ele}</a>
                </li>
              )
            )}
          </ul>
          <button className="flex items-center shrink-0 gap-1.5 border border-border-color px-3.5 py-3 3xl:py-3.5 rounded-full">
            <img
              src="/assets/svg/england-flag.svg"
              className="3xl:h-8 3xl:w-8 h-6 w-6 rounded-full"
              alt="flag_logo"
            />
            <div className="flex items-center gap-1">
              <span className="font-semibold text-xl text-black">EN</span>
              <img
                src="/assets/svg/down-chevron.svg"
                alt=""
                className="w-3 h-2"
              />
            </div>
          </button>
          <button className="bg-primary hidden lg:block border border-primary text-nowrap hover:bg-white hover:text-primary rounded-full text-white 3xl:text-xl text-lg font-semibold xl:px-7 px-4 py-3 3xl:py-4 text-center">
            Get My eSIM
          </button>
          <button className="bg-primary rounded-full h-11 w-11 lg:hidden flex justify-center items-center shrink-0">
            <img src="/assets/svg/menu-bar.svg" alt="" className="w-5 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
