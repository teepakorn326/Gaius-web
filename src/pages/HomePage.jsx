import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col gap-[200px]">
      <div className="flex justify-start">
        <div className="flex bg-gradient-to-r from-sky-300 w-1/2  pl-[220px] flex-col  justify-evenly ">
          <div className="text-7xl text-[#1a316a]">
            Modern living for everyone
          </div>
          <div>
            We provide a complete service for the sale, purchase or rental of
            real estate.{" "}
          </div>
          <div className=" flex bg-[#F3F3FA] w-[450px] h-[60px] items-center justify-center ">
            <input
              type="search"
              className="form-control relative  w-[240px]  px-3 py-1.5 text-base font-normal text-gray-700 bg-white border focus:bg-white focus:border-blue-600 focus:outline-none "
              placeholder="Find a location"
            />
            <Link
              to="/result"
              className="bg-sky-800 hover:bg-sky-800/60 text-zinc-200 font-bold py-1.5 px-4 "
            >
              Search
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/view-downtown-shanghai-china_1359-1062.jpg?w=996&t=st=1664348145~exp=1664348745~hmac=9a722952f8b647d17562705ec54b5c35f5b099485341f63a879f1d7586a14439"
            alt="homepage "
          />
        </div>
      </div>
      <div className="h-[900px]  flex  flex-row">
        <div className=" w-1/2 ">
          <img
            src="https://img.freepik.com/free-photo/business-freelance-asian-woman-working-doing-projects-sending-email-laptop-computer-while-sitting-table-cafe-lifestyle-smart-beautiful-women-working-coffee-shop-concepts_7861-1330.jpg?w=1060&t=st=1664356766~exp=1664357366~hmac=5bbf19fdbe8fc58a3a51be0062e2e998a254cfa4805780056cbd1aaf25d56d21"
            alt="about"
          />
        </div>
        <div className="w-1/2 pr-32 pl-32">
          <div className="text-[50px]">About Us</div>
          <div className="w-[400px]">
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate. Our advantage is more than 15 years of experience and
            soil in attractive locations in Slovakia with branches in Bratislava
            and Košice. We have a connection to all banks on the Slovak market,
            so we can solve everything under one roof. By constantly innovating
            our business activities, we move forward and we are able to offer
            truly above-standard services that set us apart from the
            competition.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
