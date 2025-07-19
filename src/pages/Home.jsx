import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <header className="w-full h-18 flex items-center justify-center bg-[#414141]">
        <h3 className="w-full p-5 md:w-280 text-3xl text-white">Popular Titles</h3>
      </header>
      <div className="mb-20 flex flex-col w-full items-start">
        <main className="w-full md:w-180 md:ml-32">
        <div className="m-5 md:m-10 mb-35 grid grid-cols-2 w-70 h-50 md:w-100 md:h-70 gap-10">
          <Link to="/series" className="flex flex-col gap-2">
            <article className="w-full h-[90%] bg-[#1e1e1e] flex flex-col items-center justify-center">
              <img
                src="../../assets/placeholder.png"
                alt="movie logo"
                className="absolute"
              />
              <h3 to="/" className="text-white text-3xl">
                SERIES
              </h3>
            </article>
            <h2>Popular Series</h2>
          </Link>
          <Link to="/movies" className="flex flex-col gap-2">
            <article className="w-full h-[90%] bg-[#1e1e1e] flex flex-col items-center justify-center">
              <img
                src="../../assets/placeholder.png"
                alt="movie logo"
                className="absolute"
              />
              <h3 to="/" className="text-white text-3xl">
                MOVIES
              </h3>
            </article>
            <h2>Popular Movies</h2>
          </Link>
        </div>
      </main>
      </div>
    </>
  );
}
