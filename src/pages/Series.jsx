import React from "react";
import Article from "../components/Article";
import useArticles from "../hooks/useArticles";

export default function Series() {
  const {arts, isLoading } = useArticles()

  return (
    <>
      <header className="w-full h-18 flex items-center justify-center bg-[#414141]">
        <h3 className="w-full p-5 md:w-280 text-3xl text-white">Popular Series</h3>
      </header>
      <div className="p-10 md:px-30 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {isLoading ? (
          <div className="text-lg px-15 mb-50">Loading...</div>
        ) : (
          arts.map((serie, index) => <Article art={serie} index={index}></Article>)
        )}
      </div>
    </>
  );
}
