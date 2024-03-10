import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
const FIRST_IMAGE = {
  imageUrl: 'https://www.imbastudio.uz/img/photoedit/colorCorrect/1.JPG'
};
const SECOND_IMAGE = {
  imageUrl: 'https://www.imbastudio.uz/img/photoedit/colorCorrect/1+.JPG'
};
const FIRST_IMAGE1 = {
  imageUrl: 'https://www.imbastudio.uz/img/photoedit/basic/1.JPG'
};
const SECOND_IMAGE1 = {
  imageUrl: 'https://www.imbastudio.uz/img/photoedit/basic/1+.JPG'
};
const FIRST_IMAGE2 = {
  imageUrl: 'https://www.imbastudio.uz/img/photoedit/highend/1.JPG'
};
const SECOND_IMAGE2 = {
  imageUrl: 'https://www.imbastudio.uz/img/photoedit/highend/1+.JPG'
};
const Section2 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-4 items-center mt-10">
        <h3 className="text-white text-center mb-4 text-3xl">
          We provide the following photo editing services
        </h3>
        <div className=" mb-10 w-[100px] h-[3px] bg-[#411b7e] m-auto"></div>
        <div className="flex justify-center gap-4 flex-wrap xl:flex-nowrap">
          <div className="border rounded p-4 text-white w-full lg:w-1/3 xl:w-1/4 border-gray-800 bg-gray-700/20" data-aos="fade-up"  data-aos-delay="600">
            <div className="w-full px-10 py-3 text-center bg-[#1f2937]">
              <p>Color Collection</p>
            </div>
            <div>
              <ReactBeforeSliderComponent
                firstImage={SECOND_IMAGE}
                secondImage={FIRST_IMAGE}
                className="w-full h-full overflow-hidden"
              />
            </div>
          </div>
          <div className="border rounded p-4 text-white w-full lg:w-1/3 xl:w-1/4 border-gray-800 bg-gray-700/20" data-aos="fade-up"  data-aos-delay="600">
            <div className="w-full px-10 py-3 text-center bg-[#1f2937]">
              <p>Basic Level</p>
            </div>
            <div>
              <ReactBeforeSliderComponent
                firstImage={SECOND_IMAGE1}
                secondImage={FIRST_IMAGE1}
                className="w-full h-full overflow-hidden"
              />
            </div>
          </div>
          <div className="border rounded p-4 text-white w-full lg:w-1/3 xl:w-1/4 border-gray-800 bg-gray-700/20" data-aos="fade-up"  data-aos-delay="600">
            <div className="w-full px-10 py-3 text-center bg-[#1f2937]">
              <p>High End Level</p>
            </div>
            <div>
              <ReactBeforeSliderComponent
                firstImage={SECOND_IMAGE2}
                secondImage={FIRST_IMAGE2}
                className="w-full h-full overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
