import React from "react";

const CardSection3 = () => {
  return (
    <div className="bg-[#f5f5f5] rounded-xl p-4">
      <div>
        <h2 className="text-center text-2xl">Basic Level</h2>
        <h1 className="text-center text-4xl">$ 2</h1>
        <p className="text-center">per photo</p>
      </div>
      <hr />
      <div className="ml-6 mt-2 card-main-text">
        <p>Services applied:</p>
        <ul className="list-disc">
          <li>Basic Retouch for 2-3 Persons</li>
          <li>Color/Light Correction</li>
          <li>Exposure</li>
          <li>Teeth Whitening</li>
          <li>Red-Eye Effect Removal</li>
          <li>Eye Bag Fixing</li>
          <li>Skin Tone Fixing</li>
          <li>Cropping/Straightening</li>
          <li>No Body Retouch</li>
          <li>No Background Touch Up</li>
          <li>No Portraits/Indoors Photos Editing</li>
        </ul>
      </div>
      <div className="flex flex-col mt-2">
        <button className="min-h-14 bg-[#c8e5ff] text-[#114b81] hover:bg-[#2766a1] hover:text-[#f5f5f5] font-semibold w-100 duration-300">
          View examples
        </button>
        <a
          href="https://www.instagram.com/photographer_mamirov_group/"
          target="_blank"
          className="mt-2"
        >
          <button className="min-h-14 bg-[#411b7e] text-[#f5f5f5] hover:bg-[#e0ccff] hover:text-[#411b7e] font-semibold w-100 duration-300">
            Order Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardSection3;
