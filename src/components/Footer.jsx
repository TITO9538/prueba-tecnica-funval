import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-fit md:h-70 flex flex-col items-start bg-[#1e1e1e] text-gray-400 py-10">
        <div className="w-50 flex flex-col flex-wrap gap-4 text-sm mx-10 md:w-200 md:ml-38">
          <div className="flex flex-wrap gap-2 text-sm">
            <Link to="/" className="border-r px-4 md:px-0 md:pr-4">Home</Link>
            <p className="border-r px-4">Terms and Conditions</p>
            <p className="border-r px-4">Privacy Policy</p>
            <p className="border-r px-4">Colection Statement</p>
            <p className="border-r px-4">Help</p>
            <p className="px-4">Manage Account</p>
          </div>
          <div>
            <p>Copyrigth © 2016 DEMO Streaming. All Rigths Reserved</p>
          </div>
        </div>
        <div className="w-full h-60 md:h-20 flex flex-col md:flex-row gap-4 items-center justify-between mt-10 md:pl-38 md:px-10">
            <div className="w-full flex gap-10 items-center justify-center md:w-fit">
                <img src="../../public/assets/social/facebook-white.svg" alt="" className="h-10"/>
                <img src="../../public/assets/social/twitter-white.svg" alt="" className="h-10"/>
                <img src="../../public/assets/social/instagram-white.svg" alt="" className="h-10"/>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
                <img src="../../public/assets/store/app-store.svg" alt="" className="w-40 md:w-fit md:h-10"/>
                <img src="../../public/assets/store/play-store.svg" alt="" className="w-40 md:w-fit md:h-10"/>
                <img src="../../public/assets/store/windows-store.svg" alt="" className="w-40 md:w-fit md:h-10"/>
            </div>
        </div>
      </footer>
    </>
  );
}
