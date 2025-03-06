import React from "react";
import navLogo from "../assets/Burger-logo.svg";
import locationIcon from "../assets/location-icon.svg";
import dropDown from "../assets/dropDownIcon.png";
import cartLogo from "../assets/cart-logo.svg";
import { Link } from "react-router-dom";
import loginLogo from "../assets/login-logo.svg";

const Navbar = () => {
  return (
    <>
      <header className=" bg-[#100101]">
        <nav className="wrapper flex justify-between items-center py-5">
          <div className="flex gap-[18px]">
            <img className="h-[53.17px] hidd" src={navLogo} alt="nav-logo" />
            <div className="flex gap-[10px]">
              <img
                className="h-[20px] w-[18px] mt-4"
                src={locationIcon}
                alt="location-logo"
              />
              <h3 className="h-[26px] mt-3 text-[20px] font-[500] hidden lg:block ">
                Location
              </h3>
              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button">
                  <img
                    className="w-[10px] mt-6 "
                    src={dropDown}
                    alt="drop-down"
                  />{" "}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>Lagos</a>
                  </li>
                  <li>
                    <a>Abuja</a>
                  </li>
                  <li>
                    <a>Benin</a>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
          <div>
                <form action="">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-[300px] h-[56px] rounded-[32px] bg-[#F0F0F0] outline-none text-[#100101] ps-[30px] border font-[400] text-[20px] hidden lg:block"
                  />
                </form>
              </div>
          <div className="flex gap-[28px] items-center">
            <h2 className="font-[500] text-[20px] pt-3 hidden lg:block">
              All Products
            </h2>
            <div>
              <ul className="flex gap-[28px]">
                <li className="flex gap-2 bg-[#B67B0F] md:rounded-[32px] rounded-full py-[15px] px-[20px] lg:w-[142px] w-[80px] h-[50px] ">
                  <img src={cartLogo} alt="cartLogo" />
                  <Link>
                    {" "}
                    <span className="hidden lg:inline-block">Cart</span> 00{" "}
                  </Link>
                </li>
                <li className="flex gap-2 bg-[#F0F0F0] md:rounded-[32px] rounded-full text-black py-[15px] px-[20px] lg:w-[124px] w-[50px] h-[50px]">
                  <img src={loginLogo} alt="loginLogo" />
                  <Link>
                    {" "}
                    <span className="hidden lg:block">Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
