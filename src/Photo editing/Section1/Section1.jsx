import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Section1 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="">
      <div className="bg-photo-sediting bg-cover" data-aos="zoom-in" data-aos-delay="600">
        <div className=" container h-[630.5px]   flex items-center justify-center flex-col gap-5 ">
          <h1 className="text-center w-full text-[2.25rem] text-4xl text-white  ">
            Wedding Photo Editing Services
          </h1>
          <p className="text-white w-2/3  max-w-text text-lg">
            For over 10 years IMBA STUDIO has been a trusted company for wedding
            and portrait photographers who are looking for customized and
            stylized wedding photography editing. Being available 24/7 and
            offering marriage photo editing at the fastest turnaround, our
            retouchers help with edits of any level, from culling to retouching.
          </p>
          <div>
            <a
              href="https://www.instagram.com/imba_studio/"
              className=" text-[19.2px] rounded-md bg-[#f5f5f5f5] py-[12px] px-[30px] md:text-2xl font-bold hover:bg-[#411b7e] hover:text-white duration-300"
              target="_blank"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
