import React from "react";
import LogoIcon from "../../assets/iconmonstr-triangle-1.svg";
import { FaTwitter, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

const Products = [
  {
    name: "Features",
    path: "features",
  },
  {
    name: "Testimonials",
    path: "Testimonials",
  },
  {
    name: "Pricing",
    path: "Pricing",
  },
  {
    name: "FAQs",
    path: "FAQs",
  },
];
const Resources = [
  {
    name: "Change log",
    path: "Change log",
  },
  {
    name: "Help center",
    path: "Help center",
  },
  {
    name: "Blog",
    path: "Blog",
  },
  {
    name: "Contact",
    path: "Contact",
  },
];
const Others = [
  {
    name: "Privacy",
    path: "Privacy",
  },
  {
    name: "Terms",
    path: "Terms",
  },
  {
    name: "Affiliation",
    path: "Affiliation",
  },
  {
    name: "Press",
    path: "Press",
  },
];
const From_the_blog = [
  {
    name: "Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life",
    path: "features",
  },
  {
    name: "Organizing Your Calendar for Enhanced Productivity and Focus",
    path: "Testimonials",
  },
  {
    name: "The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks",
    path: "Pricing",
  },
  {
    name: "Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar",
    path: "FAQs",
  },
];

const Footer = () => {
  const iconStyle = { color: 'white' };
  return (
    <footer className="bg-octothorpe-blue dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-5 px-4 py-6 lg:py-8 md:grid-cols-5">
          {/*  col 1  - logo*/}
          <div className="col-span-1 mb-6 md:mb-0">
            <a
             className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={LogoIcon}
                className="h-6 p-1 rounded-lg bg-spring-wood"
                alt="Milton Logo"
              />
              <span className="self-center text-2xl font-bold text-mine-shaft whitespace-nowrap">
                Milton
              </span>
            </a>
            <div>
              <p className="mb-1 text-2xl  text-boulder dark:text-gray-400 text-base text-start  justify-center font-medium">
                <br></br>
                A short text explaining <br />
                why my startup is so cool
                <br></br>
                <br />
                © My super start-up
              </p>
            </div>

            <div className="flex gap-6 mt-4">
              <div style={iconStyle} className="bg-[#1DA1F2] text-white rounded-full w-10 h-10 flex items-center justify-center">
                <FaTwitter />
              </div>
              <div style={iconStyle} className="bg-[#334E94] text-white rounded-full w-10 h-10 flex items-center justify-center">
                <FaFacebook />
              </div>
              <div style={iconStyle} className=" text-white bg-[#334E94] rounded-full w-10 h-10 flex items-center justify-center ">
                <SiLinkedin />
              </div>
            </div>
          </div>

          {/*  col 2  - Products*/}
          <div className="col-span-1">
            <h2 className="mb-6 text-xl font-bold text-mine-shaft capitalize text-start dark:text-white">
              Products
            </h2>
            <ul className="text-boulder dark:text-gray-400 text-base text-start font-medium">
              {Products.map((val, index) => (
                <li className="mb-4" key={index}>
                  <a
                    href={val.path}
                    className="hover:underline hover:text-mine-shaft"
                  >
                    {val.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*  col 3 - Resources*/}
          <div className="">
            <h2 className="mb-6 text-xl font-bold text-mine-shaft capitalize  text-start dark:text-white">
              Resources
            </h2>
            <ul className="text-boulder dark:text-gray-400 text-base text-start font-medium">
              {Resources.map((val, index) => (
                <li className="mb-4" key={index}>
                  <a
                    href={val.path}
                    className=" hover:underline  hover:text-mine-shaft"
                  >
                    {val.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*  col 4 - Others*/}
          <div className="">
            <h2 className="mb-6 text-xl font-bold text-mine-shaft capitalize  text-start dark:text-white">
              Others
            </h2>
            <ul className="text-boulder dark:text-gray-400 text-base text-start font-medium">
              {Others.map((val, index) => (
                <li className="mb-4" key={index}>
                  <a
                    href={val.path}
                    className=" hover:underline  hover:text-mine-shaft"
                  >
                    {val.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*  col 5 - From the blog*/}
          <div className="">
            <h2 className="mb-6 text-xl font-bold text-mine-shaft capitalize  text-start dark:text-white">
              From the blog
            </h2>
            <ul className="text-boulder dark:text-gray-400 text-base text-start font-medium">
              {From_the_blog.map((val, index) => (
                <li className="mb-4" key={index}>
                  <a
                    href={val.path}
                    className=" hover:underline  hover:text-mine-shaft"
                  >
                    {val.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
