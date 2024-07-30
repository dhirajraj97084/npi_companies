
// src/Footer.js

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-deep-purple-500  text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="w-full md:w-1/5 mb-4 md:mb-0 ">
            <h2 className="text-3xl font-bold mb-2 ">N.P.INDUSTRIES</h2>
            <p>
              With National production Industries, you can attract, impress, and convert more leads
              online and get results.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Explore</h2>
            <ul>
              <li>
                <Link to={"/"} className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/services"} className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/contactus"} className="hover:underline">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to={"/blog"} className="hover:underline">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Services</h2>
            <ul>
              <li>
                <Link to={"/socialmedia"} className="hover:underline">
                  {/* Social Media Marketing */}
                  ..........
                </Link>
              </li>
              <li>
                <Link to={"/websitedesign"} className="hover:underline">
                  {/* Website Development */}
                  ..........
                </Link>
              </li>
              <li>
                <Link to={"/payperclick"} className="hover:underline">
                  {/* Online Advertising */}
                  .........
                </Link>
              </li>
              <li>
                <Link to={"/influencermarketing"} className="hover:underline">
                  {/* Influencer Marketing */}
                  .........
                </Link>
              </li>
              <li>
                <Link to={"/seo"} className="hover:underline">
                  {/* Search Engine Optimisation */}
                  ........
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold mb-2">Get In Touch</h2>
            {/* <p>
              Dehradun Branch: Near Phooldei Banquet Hall Haripur Naik,
              Kamalwaganja Rd, Dehradun, Uttarakhand 263139
            </p> */}
            <p>
              Shreepur Birgunj 11 , Parsa Nepal 
            </p>
            <p>
              <strong>Mail Us: info@npindustries.com.np</strong>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <div>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:underline ml-2">
              Terms & Conditions
            </a>{" "}
            |
            <a href="#" className="hover:underline ml-2">
              Refund Policy
            </a>
          </div>
          <div>
            <p>
              &copy; {new Date().getFullYear()} N.P.INDUSTRIES . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
