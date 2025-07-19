import React, { useState, useRef, useEffect } from "react";

export default function Article({ art, index }) {
  const [modal, setModal] = useState(false);
  const modalRef = useRef();

  // Cierra el modal si se clickea fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modal && modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal]);

  const toggleModal = () => setModal(!modal);

  return (
    <>
      <div
        onClick={toggleModal}
        key={index}
        className="flex flex-col items-start justify-between p-3 transition-shadow cursor-pointer">
        <img
          src={art.images["Poster Art"].url}
          alt={art.title}
          className="w-full h-40 md:h-40 lg:h-50 object-cover mb-2"
        />
        <h3 className="text-xs md:text-sm font-semibold text-gray-800">{art.title}</h3>
      </div>

      {modal && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/50 z-[1000]">
          <article
            ref={modalRef}
            className="flex gap-4 relative bg-white rounded-lg p-6 w-11/12 max-w-md shadow-lg">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg font-bold cursor-pointer">
              &times;
            </button>
            <img
              src={art.images["Poster Art"].url}
              alt={art.title}
              className="w-full h-60 object-cover rounded mb-4"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{art.title}</h3>
              <div className="flex gap-2 mb-5">
                <p className="text-sm text-gray-600 uppercase">{art.programType}</p>
              <p className="text-sm text-gray-600">{art.releaseYear}</p>
              </div>
              <p className="text-sm text-gray-600">{art.description}</p>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
